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
    image: '/images/P1.png',
    alt: 'Paver Installation',
    description: 'Upgrade your outdoors with custom paver designs built to last - durable, stylish, and made to boost your home\'s curb appeal.',
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
    id: 'retaining-walls',
    name: 'Retaining Walls',
    image: '/images/R1.png',
    alt: 'Retaining Walls',
    description: 'Strong, stylish, and built to protect your property... our retaining walls combine durability with design to transform any landscape.',
    features: [
      'Engineered for stability & safety',
      'Built with premium, long-lasting materials',
      'Customizable to attractive California conditions',
      'Functional layout with modern aesthetics',
      'Low-maintenance, lifetime durability',
    ],
  },
  {
    id: 'synthetic-turf',
    name: 'Synthetic Turf Installation',
    image: '/images/S1.png',
    alt: 'Synthetic Turf Installation',
    description: 'Enjoy a lush, green lawn all year long... without the hassle of mowing, watering, or much. Perfect for families, pets, and outdoor play.',
    features: [
      'Premium, next-generation turf',
      'Safe & eco-friendly materials',
      'Quick & pet-friendly surfaces',
      'Low maintenance, eco-friendly solution',
      'Complete project management from start to finish',
    ],
  },
  {
    id: 'landscaping',
    name: 'Landscaping Projects',
    image: '/images/L1.png',
    alt: 'Landscaping Projects',
    description: 'Transform your outdoor space into a beautiful, functional area for living and entertaining.',
    features: [
      'Creative designs tailored to your property',
      'Complete hardscaping & softscaping',
      'Enhances curb appeal & property value',
      'Eco-friendly & sustainable solutions',
      'Professional installation & project management',
    ],
  },
  {
    id: 'drainage',
    name: 'Drainage Systems',
    image: '/images/D1.png',
    alt: 'Drainage Systems',
    description: 'Protect your property from water damage with smart, durable drainage solutions.',
    features: [
      'Custom-designed for your landscape',
      'Prevents storms & flooding',
      'Protects foundations & structures',
      'Works with pavers, turf, and gardens',
      'Low maintenance, long-term protection',
    ],
  },
  {
    id: 'demolition',
    name: 'Demolition & Excavation',
    image: '/images/E1.png',
    alt: 'Demolition & Excavation',
    description: 'Safe and efficient demolition to prepare your site for any project, big or small.',
    features: [
      'Professional site assessment & planning',
      'Responsible material disposal',
      'Quick, clean, and organized process',
      'Minimizes disruption to your property',
      'Prepare your space for your dream project',
    ],
  },
];
