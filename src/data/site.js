// All business info and gallery content lives here. Edit this file to update the site.

export const business = {
  name: 'JC Suchite Construction',
  phone: '818-917-2197',
  phoneHref: 'tel:+18189172197',
  email: 'suchite_juan@yahoo.com',
  serviceAreas: ['Los Angeles', 'Santa Clarita', 'Woodland Hills', 'San Fernando'],
  serviceAreaSummary: 'Greater Los Angeles & Santa Clarita regions',
  facebook: 'https://www.facebook.com/juan.suchite.100',
  tiktok: 'https://www.tiktok.com/@juancsuchite?lang=en',
};

// Image files are expected in /public/images/ with these exact names
// (the original filenames from the Wix Media Manager).
export const img = (file) => `/images/${file}`;

export const services = [
  {
    slug: 'kitchens',
    title: 'Kitchens',
    cover: 'IMG_1711.jpeg',
    blurb: 'Full kitchen remodels — cabinetry, countertops, backsplashes, flooring and lighting.',
    gallery: ['IMG-34.jpg', 'IMG-31.jpg', 'IMG-30.jpg', 'IMG-50.jpg', 'IMG-47.jpg', 'IMG-43.jpg', 'IMG-40.jpg', 'IMG-37.jpg', 'IMG-53.jpg', 'IMG-45.jpg', 'IMG-56.jpg', 'IMG_1711.jpeg', 'IMG_1712.jpeg'],
  },
  {
    slug: 'bathrooms',
    title: 'Bathrooms',
    cover: 'IMG_2494.jpeg',
    blurb: 'Showers, tubs, tile, vanities and fixtures — built to last and easy to live with.',
    gallery: ['IMG-57.jpg', 'IMG-46.jpg', 'IMG_2496.jpeg', 'IMG_2494.jpeg', 'IMG_2492.jpeg', 'IMG_0112.jpeg', 'IMG_0114.jpeg'],
  },
  {
    slug: 'interiors',
    title: 'Interiors',
    cover: 'IMG_0923.jpeg',
    blurb: 'Flooring, drywall, paint, trim and layout changes that transform how your home feels.',
    gallery: ['IMG-39.jpg', 'IMG-41.jpg', 'IMG-32.jpg', 'IMG-49.jpg', 'IMG-54.jpg', 'IMG-35.jpg', 'IMG-36.jpg', 'IMG-55.jpg', 'IMG-38.jpg', 'IMG-48.jpg', 'IMG-58.jpg', 'IMG-51.jpg', 'IMG-42.jpg', 'IMG-52.jpg', 'IMG_2398.jpeg', 'IMG_2400.jpeg', 'IMG_2397.jpeg', 'IMG_0923.jpeg'],
  },
  {
    slug: 'exteriors',
    title: 'Exteriors',
    cover: 'IMG_2404.jpeg',
    blurb: 'Siding, stucco, patios and outdoor upgrades that boost curb appeal.',
    gallery: ['IMG_2404.jpeg', 'IMG_2402.jpeg', 'IMG_2401.jpeg', 'IMG_2403.jpeg', 'IMG_2407.jpeg', 'IMG_2406.jpeg', 'IMG_2405.jpeg'],
  },
  {
    slug: 'additions',
    title: 'Additions',
    cover: 'IMG_2399.jpeg',
    blurb: 'Room additions and expansions, from planning and permits through final finish.',
    gallery: ['IMG_2399.jpeg'],
  },
];

// "Our Work" page gallery, in the same order as the original site.
export const workGallery = ['IMG-31.jpg', 'IMG-39.jpg', 'IMG-41.jpg', 'IMG-32.jpg', 'IMG-34.jpg', 'IMG-49.jpg', 'IMG-50.jpg', 'IMG-30.jpg', 'IMG-47.jpg', 'IMG-33.jpg', 'IMG-43.jpg', 'IMG-46.jpg', 'IMG-54.jpg', 'IMG-35.jpg', 'IMG-40.jpg', 'IMG-37.jpg', 'IMG-53.jpg', 'IMG-44.jpg', 'IMG-55.jpg', 'IMG-56.jpg', 'IMG-57.jpg', 'IMG-36.jpg', 'IMG-45.jpg', 'IMG-38.jpg', 'IMG-48.jpg'];

export const testimonials = [
  {
    quote: 'Carlos and his team were a real pleasure to work with. They showed up on time, every time. Everything that was discussed was handled and done to the highest standards.',
    name: 'David Garcia',
  },
];
