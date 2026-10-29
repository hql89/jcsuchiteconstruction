# JC Suchite Construction — website

Static Astro site + one Vercel serverless function for the contact form. Replaces the Wix site at jcsuchiteconstruction.com.

## Pages
`/` `/about` `/services` `/kitchens` `/bathrooms` `/interiors` `/exteriors` `/additions` `/work` `/contact` — same URLs as the Wix site, so existing Google links keep working.

## Edit content
- Business info, services, galleries, testimonial: `src/data/site.js`
- Page text: `src/pages/*.astro`
- Colors/fonts: top of `src/styles/global.css`

## Photos
Photos live in `src/assets/images/`. Astro automatically resizes them and converts them to WebP at build time.
To add a photo: drop it in that folder, then add its filename to a service's `gallery` list in `src/data/site.js`.

## License number
Set `license` in `src/data/site.js` to the CSLB license number — it then shows in the footer and in Google's business data.

## Run locally
```
npm install
npm run dev        # http://localhost:4321
```

## Deploy on Vercel
1. Push this folder to a GitHub repo.
2. vercel.com → Add New → Project → import the repo. Framework is auto-detected (Astro). No settings to change.
3. Contact form email (Project → Settings → Environment Variables):
   - `RESEND_API_KEY` — free key from resend.com
   - `CONTACT_TO_EMAIL` — `suchite_juan@yahoo.com` (comma-separate for more)
   - `CONTACT_FROM_EMAIL` — after verifying the domain in Resend, e.g. `JC Suchite Website <leads@jcsuchiteconstruction.com>`
   Redeploy after adding them.
4. Domain: Project → Settings → Domains → add `jcsuchiteconstruction.com` and `www.jcsuchiteconstruction.com`, then update DNS where the domain is registered (Vercel shows the exact records). Cancel the Wix plan only after the new site is live.
