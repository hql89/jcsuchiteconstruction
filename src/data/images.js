// Loads every photo in src/assets/images so pages can reference them by filename.
// Astro resizes and compresses them at build time (multiple sizes + WebP).
const modules = import.meta.glob('../assets/images/*.{jpg,jpeg,JPG,JPEG,png}', { eager: true });

export const images = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => [path.split('/').pop(), mod.default])
);

export function getPhoto(file) {
  const meta = images[file];
  if (!meta) throw new Error(`Photo not found: src/assets/images/${file}`);
  return meta;
}
