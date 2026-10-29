// Vercel serverless function: receives the contact form and emails it via Resend (https://resend.com).
// Required env vars (set in Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY      – API key from resend.com
//   CONTACT_TO_EMAIL    – where leads are sent (e.g. suchite_juan@yahoo.com)
// Optional:
//   CONTACT_FROM_EMAIL  – verified sender, e.g. "JC Suchite Website <leads@jcsuchiteconstruction.com>"
//                         (defaults to Resend's test sender, which only delivers to your Resend account email)

const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clip = (s, n) => String(s ?? '').trim().slice(0, n);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  // Honeypot: bots fill hidden fields. Pretend success.
  if (body.company) return res.status(200).json({ ok: true });

  const f = {
    firstName: clip(body.firstName, 80),
    lastName: clip(body.lastName, 80),
    email: clip(body.email, 200),
    phone: clip(body.phone, 40),
    address: clip(body.address, 200),
    subject: clip(body.subject, 200),
    projectType: clip(body.projectType, 60),
    timeline: clip(body.timeline, 60),
    message: clip(body.message, 5000),
  };

  if (!f.firstName || !f.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
    return res.status(400).json({ error: 'Please provide your first name, a valid email and a message.' });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) {
    console.error('Contact form not configured: set RESEND_API_KEY and CONTACT_TO_EMAIL');
    return res.status(500).json({ error: 'Form is not configured yet.' });
  }

  const name = `${f.firstName} ${f.lastName}`.trim();
  const rows = [
    ['Name', name], ['Email', f.email], ['Phone', f.phone], ['Address', f.address], ['Project type', f.projectType], ['Timeline', f.timeline], ['Subject', f.subject],
  ].filter(([, v]) => v);

  const html = `
    <h2 style="font-family:Arial,sans-serif">New website inquiry</h2>
    <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
      ${rows.map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666">${k}</td><td style="padding:4px 0"><strong>${esc(v)}</strong></td></tr>`).join('')}
    </table>
    <p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap;margin-top:16px">${esc(f.message)}</p>`;
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\n${f.message}`;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || 'JC Suchite Website <onboarding@resend.dev>',
        to: to.split(',').map((s) => s.trim()),
        reply_to: f.email,
        subject: `Website inquiry: ${f.subject || f.projectType || 'New project'} — ${name}`,
        html,
        text,
      }),
    });
    if (!r.ok) {
      console.error('Resend error', r.status, await r.text());
      return res.status(502).json({ error: 'Could not send message.' });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact send failed', err);
    return res.status(502).json({ error: 'Could not send message.' });
  }
}
