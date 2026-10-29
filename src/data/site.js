// All business info and gallery content lives here. Edit this file to update the site.

export const business = {
  name: 'JC Suchite Construction',
  // California contractor license number (CSLB). Fill in and it appears in the footer + Google data.
  license: '',
  phone: '818-917-2197',
  phoneHref: 'tel:+18189172197',
  email: 'suchite_juan@yahoo.com',
  serviceAreas: ['Los Angeles', 'Santa Clarita', 'Woodland Hills', 'San Fernando'],
  serviceAreaSummary: 'Greater Los Angeles & Santa Clarita regions',
  facebook: 'https://www.facebook.com/juan.suchite.100',
  tiktok: 'https://www.tiktok.com/@juancsuchite?lang=en',
};

// Photos live in src/assets/images/ and are referenced below by filename.

export const services = [
  {
    slug: 'kitchens',
    seoTitle: 'Kitchen Remodeling',
    title: 'Kitchens',
    cover: 'IMG_4769.jpeg',
    blurb: 'Full kitchen remodels — cabinetry, countertops, backsplashes, flooring and lighting.',
    description:
      'From layout changes to new cabinetry, quartz countertops, tile backsplashes, lighting and flooring, we handle every part of a kitchen remodel. We plan the space around how your family actually cooks and gathers, keep you informed on budget and schedule, and finish with the details that make a kitchen feel custom.',
    gallery: ['IMG_4772.jpeg', 'IMG-31.jpg', 'IMG-34.jpg', 'IMG_4769.jpeg', 'IMG-30.jpg', 'IMG-43.jpg', 'IMG_5462.jpg', 'IMG-40.jpg', 'IMG-37.jpg', 'IMG-56.jpg', 'IMG_1711.jpeg', 'IMG_1712.jpeg'],
  },
  {
    slug: 'bathrooms',
    seoTitle: 'Bathroom Remodeling',
    title: 'Bathrooms',
    cover: 'IMG_2494.jpeg',
    blurb: 'Showers, tubs, tile, vanities and fixtures — built to last and easy to live with.',
    description:
      'Walk-in showers, soaking tubs, custom tile, double vanities and modern fixtures — we remodel primary baths, guest baths and powder rooms. Every bathroom is built with proper waterproofing and clean finish work so it looks great and holds up for years.',
    gallery: ['IMG-33.jpg', 'IMG-46.jpg', 'IMG_2496.jpeg', 'IMG_2494.jpeg', 'IMG_2492.jpeg', 'IMG_0112.jpeg', 'IMG_0114.jpeg'],
  },
  {
    slug: 'interiors',
    seoTitle: 'Interior Remodeling',
    title: 'Interiors',
    cover: 'IMG_0923.jpeg',
    blurb: 'Flooring, drywall, paint, trim and layout changes that transform how your home feels.',
    description:
      'Living rooms, bedrooms, staircases, built-ins and whole-home refreshes. We take on flooring, drywall, paint, trim, fireplaces, railings and open-concept layout changes to transform how your home looks and feels.',
    gallery: ['IMG-39.jpg', 'IMG-41.jpg', 'IMG-32.jpg', 'IMG-49.jpg', 'IMG-54.jpg', 'IMG-36.jpg', 'IMG-55.jpg', 'IMG-58.jpg', 'IMG-52.jpg', 'IMG_2398.jpeg', 'IMG_2400.jpeg', 'IMG_2397.jpeg', 'IMG_0923.jpeg', 'IMG_4622.jpeg'],
  },
  {
    slug: 'exteriors',
    seoTitle: 'Exterior & Outdoor Living',
    title: 'Exteriors',
    cover: 'IMG_2404.jpeg',
    blurb: 'Siding, stucco, patios and outdoor upgrades that boost curb appeal.',
    description:
      'Outdoor kitchens, patios, hardscape, landscape lighting and curb-appeal upgrades. We design and build outdoor spaces made for Southern California living — ready for entertaining day and night.',
    gallery: ['IMG_2404.jpeg', 'IMG_2402.jpeg', 'IMG_2401.jpeg', 'IMG_2403.jpeg', 'IMG_2407.jpeg', 'IMG_2406.jpeg', 'IMG_2405.jpeg'],
  },
  {
    slug: 'additions',
    seoTitle: 'Home Additions',
    title: 'Additions',
    cover: 'IMG_2399.jpeg',
    blurb: 'Room additions, home gyms and conversions, from planning and permits through final finish.',
    description:
      'Need more space? We build room additions, home gyms, and garage and space conversions — handling planning and permits through framing, finishes and final inspection.',
    gallery: ['IMG_2399.jpeg'],
  },
];

// "Our Work" page shows each service's gallery as its own section (see src/pages/work.astro).

export const testimonials = [
  {
    quote: 'Carlos and his team were a real pleasure to work with. They showed up on time, every time. Everything that was discussed was handled and done to the highest standards.',
    name: 'David Garcia',
  },
];
