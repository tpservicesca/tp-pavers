export interface Service {
  id: string;
  name: string;
  image: string;
  alt: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'pavers',
    name: 'Paver Installation',
    image: '/images/P1.webp',
    alt: 'Paver Installation',
    description: 'Upgrade your outdoors with custom paver designs built to last — durable, stylish, and made to boost your home\'s curb appeal.',
    features: [
      'Wide selection of styles & colors',
      'Built to resist California\'s weather',
      'Expert installation with long-lasting results',
      'Eco-friendly options available',
      'Low maintenance, high durability',
      'Adds beauty & value to your property',
    ],
  },
  {
    id: 'concrete',
    name: 'Concrete Work',
    image: '/images/P3.webp',
    alt: 'Concrete Work',
    description: 'From driveways to patios, we deliver strong, clean concrete work that stands the test of time — built right, the first time.',
    features: [
      'Driveways, patios, walkways & foundations',
      'Stamped, stained & decorative finishes',
      'Precision grading & expert forming',
      'Durable mixes for California climate',
      'Clean, professional results every time',
    ],
  },
  {
    id: 'retaining-walls',
    name: 'Retaining Walls',
    image: '/images/R1.webp',
    alt: 'Retaining Walls',
    description: 'Strong, stylish, and built to protect your property — our retaining walls combine durability with design to transform any landscape.',
    features: [
      'Engineered for stability & safety',
      'Built with premium, long-lasting materials',
      'Customizable designs for any landscape',
      'Functional layout with modern aesthetics',
      'Low-maintenance, lifetime durability',
    ],
  },
  {
    id: 'synthetic-turf',
    name: 'Synthetic Turf Installation',
    image: '/images/S1.webp',
    alt: 'Synthetic Turf Installation',
    description: 'Enjoy a lush, green lawn all year long — without the hassle of mowing, watering, or maintenance. Perfect for families, pets, and outdoor play.',
    features: [
      'Premium, next-generation turf',
      'Safe & eco-friendly materials',
      'Pet-friendly surfaces',
      'Low maintenance, eco-friendly solution',
      'Complete project management from start to finish',
    ],
  },
];
