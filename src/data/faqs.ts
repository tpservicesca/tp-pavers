export interface FAQ {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export const faqsColumn1: FAQ[] = [
  {
    question: 'How much does it cost to install pavers or a retaining wall?',
    answer: 'Costs vary depending on the size, materials, and complexity of your project. We provide free estimates and detailed designs after evaluating your site.',
    defaultOpen: true,
  },
  {
    question: 'How long does installation take?',
    answer: 'Project timelines depend on the area size and type of service. Most residential installations are completed within 2 weeks, but we\'ll give a detailed schedule after assessing your project.',
  },
  {
    question: 'Do you offer warranty on installation and materials?',
    answer: 'Yes, we stand behind our work and materials. Warranty terms depend on the type of service and will be detailed in your estimate.',
  },
  {
    question: 'Do you handle removal of existing concrete, grass, or other surfaces?',
    answer: 'Yes! We can remove and prepare existing surfaces before starting your new project. Scope and duration depend on site conditions.',
  },
  {
    question: 'Is synthetic turf safe for kids and pets?',
    answer: 'Absolutely! Our turf is non-toxic, durable, and designed to withstand everyday use by children and pets.',
  },
];

export const faqsColumn2: FAQ[] = [
  {
    question: 'How do I know what type of drainage or retaining system my property needs?',
    answer: 'The ideal system depends on your soil, slope, and water issues. We\'ll assess your site and recommend the best solution for your property.',
    defaultOpen: true,
  },
  {
    question: 'What types of materials do you use for pavers, retaining walls, and turf installation?',
    answer: 'We offer a variety of durable materials, including concrete, natural stone, brick, and high-quality synthetic turf, all designed for long-lasting results.',
  },
  {
    question: 'Can you work with my existing patio/driveway?',
    answer: 'Yes! In many cases, we can repair, extend, or upgrade your existing patio or driveway. We\'ll recommend the best solution to ensure durability and a beautiful finish.',
  },
  {
    question: 'Do you offer financing or flexible payment options?',
    answer: 'Yes, we provide financing or payment plans on select projects. We can discuss options during your consultation.',
  },
];
