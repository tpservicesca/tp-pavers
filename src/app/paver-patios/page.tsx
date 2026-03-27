import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallNowStrip from '@/components/CallNowStrip';
import DynamicServiceAreaMap from '@/components/DynamicServiceAreaMap';
import DynamicGallery from '@/components/DynamicGallery';
import { MapPin, Phone, CheckCircle, ArrowRight, Shield, Droplets, Timer, Ruler } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Paver Patio Installation & Design | Custom Patios | TP Pavers California',
  description:
    'Custom paver patio design & installation in California. Backyard patios, outdoor living spaces, fire pit areas & pool surrounds. 20+ years experience. Free estimates.',
  keywords: [
    'paver patio installation',
    'patio paver ideas',
    'backyard paver patio',
    'pavers patio',
    'paver patio cost',
    'paver patio designs',
    'outdoor patio pavers',
    'patio paver contractor',
    'stone patio installation',
    'patio paver patterns',
    'custom paver patio',
    'patio pavers near me',
    'backyard patio ideas',
    'paver patio with fire pit',
  ],
  openGraph: {
    title: 'Custom Paver Patio Design & Installation | TP Pavers',
    description:
      'Beautiful paver patios for California homes. Outdoor living, fire pits, pool surrounds & dining areas. 20+ years experience.',
    url: 'https://tppavers.com/paver-patios',
    siteName: 'TP Pavers',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://tppavers.com/images/projects/patio-raised-house.webp',
        width: 1200,
        height: 630,
        alt: 'Custom Paver Patio Installation in California',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Paver Patio Installation | TP Pavers California',
    description: 'Beautiful paver patios — outdoor living, fire pits, pool surrounds. Free estimates.',
    images: ['https://tppavers.com/images/projects/patio-raised-house.webp'],
  },
  alternates: {
    canonical: 'https://tppavers.com/paver-patios',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Paver Patio Installation',
  provider: {
    '@type': 'LocalBusiness',
    name: 'TP Pavers',
    telephone: '+1-510-650-0080',
    url: 'https://tppavers.com',
    image: 'https://tppavers.com/images/projects/patio-raised-house.webp',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '15',
      bestRating: '5',
    },
  },
  description:
    'Custom paver patio design and installation in California. Outdoor living spaces, fire pit areas, pool surrounds, and dining patios.',
  areaServed: {
    '@type': 'State',
    name: 'California',
  },
  serviceType: 'Paver Patio Installation',
  url: 'https://tppavers.com/paver-patios',
};

const designIdeas = [
  {
    title: 'Outdoor Living Rooms',
    image: '/images/projects/patio-raised-house.webp',
    description: 'Create a complete outdoor living space with defined seating areas, built-in benches, and seamless indoor-outdoor flow. Perfect for California\'s year-round entertaining weather.',
  },
  {
    title: 'Fire Pit Patios',
    image: '/images/projects/patio-retaining-wall.webp',
    description: 'A paver patio with a built-in fire pit becomes the centerpiece of your backyard. We design circular, square, and custom fire pit areas with proper ventilation and safety features.',
  },
  {
    title: 'Pool Surrounds',
    image: '/images/projects/patio-curved-seatwall.webp',
    description: 'Slip-resistant, heat-reflective pavers around your pool create a safe, beautiful, and durable surface. Travertine and tumbled pavers are especially popular for pool decks.',
  },
  {
    title: 'Outdoor Dining Areas',
    image: '/images/projects/walkway-herringbone.webp',
    description: 'Design a dedicated dining patio with level surfaces perfect for tables and chairs. We can integrate outdoor kitchens, pergola foundations, and lighting pathways.',
  },
];

const patterns = [
  {
    title: 'Herringbone',
    description: 'A classic 45° or 90° interlocking pattern that\'s extremely strong and ideal for high-traffic areas. The zigzag design prevents pavers from shifting under pressure.',
  },
  {
    title: 'Running Bond',
    description: 'Simple and elegant, this offset brick-like pattern creates a clean, modern look. Versatile enough for any patio style from contemporary to traditional.',
  },
  {
    title: 'Basketweave',
    description: 'Pairs of pavers alternate direction to create a woven appearance. A timeless pattern that adds visual interest without being too busy.',
  },
  {
    title: 'Random / Ashlar',
    description: 'Multiple paver sizes arranged in a seemingly random pattern for a natural, organic look. Perfect for natural stone and European-inspired designs.',
  },
];

const processSteps = [
  { step: '01', title: 'Design Consultation', description: 'We visit your backyard, discuss your ideas, measure the space, and help you choose the perfect materials and layout for your patio.' },
  { step: '02', title: 'Custom Design', description: 'Our team creates a detailed patio design with your chosen patterns, colors, and features. Revisions until you\'re 100% satisfied.' },
  { step: '03', title: 'Site Preparation', description: 'Excavation, grading for proper drainage, and installation of a compacted gravel base. We ensure your patio drains away from your home.' },
  { step: '04', title: 'Paver Installation', description: 'Expert placement of every paver with precision cutting, proper spacing, and edge restraints for a flawless finish.' },
  { step: '05', title: 'Finishing Touches', description: 'Joint sand, compaction, sealing, and cleanup. We leave your backyard looking better than you imagined.' },
];

const faqs = [
  {
    question: 'How much does a paver patio installation cost?',
    answer: 'Paver patio costs vary by size, material, and complexity. Every project is unique — cost depends on size, materials, and design complexity. We provide free, detailed on-site estimates for every project.',
  },
  {
    question: 'What are the best patio paver ideas for backyards?',
    answer: 'Popular patio paver ideas include outdoor living rooms with fire pits, multi-level patios with retaining walls, pool surrounds with slip-resistant pavers, and dining areas with integrated outdoor kitchens. We help you design a patio that matches your lifestyle and home architecture.',
  },
  {
    question: 'What paver patterns work best for patios?',
    answer: 'Herringbone is the strongest and most popular for high-traffic areas. Running bond offers a clean, modern look. Basketweave adds traditional charm. Random/ashlar patterns with multiple sizes create a natural, elegant appearance. We\'ll recommend the best pattern for your design.',
  },
  {
    question: 'How long does a backyard paver patio take to install?',
    answer: 'Most residential paver patios are completed in 3–7 days, depending on size and complexity. Larger projects with retaining walls, fire pits, or multiple levels may take 1–2 weeks. We provide a detailed timeline during your consultation.',
  },
  {
    question: 'Can you build a paver patio with a fire pit?',
    answer: 'Absolutely! We design and build custom fire pit patios using fire-rated pavers and proper construction techniques. Options include gas or wood-burning fire pits in circular, square, or custom shapes, fully integrated into your patio design.',
  },
  {
    question: 'What materials are best for patio pavers?',
    answer: 'Concrete interlocking pavers are the most popular for their durability and value. Natural stone (travertine, bluestone, flagstone) offers a premium look. Brick pavers provide classic charm. We help you choose based on your style preference and budget.',
  },
  {
    question: 'Do paver patios need maintenance?',
    answer: 'Paver patios are very low maintenance. Regular sweeping, occasional rinsing, and resealing every 2–3 years keeps them looking new. Unlike wood decks, pavers won\'t rot, splinter, or need staining. Individual pavers can be replaced if damaged.',
  },
  {
    question: 'Do you install paver patios near me in the Bay Area?',
    answer: 'Yes! TP Pavers installs custom paver patios throughout the Bay Area including Contra Costa, Alameda, Solano, Marin, San Mateo, and Santa Clara counties. Contact us at (510) 650-0080 for a free estimate.',
  },
];

const counties = [
  { name: 'Contra Costa County', slug: '/contra-costa-county' },
  { name: 'Alameda County', slug: '/alameda-county' },
  { name: 'Solano County', slug: '/solano-county' },
  { name: 'Marin County', slug: '/marin-county' },
  { name: 'San Mateo County', slug: '/san-mateo-county' },
  { name: 'Santa Clara County', slug: '/santa-clara-county' },
];

export default function PaverPatiosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-center items-center pt-[100px] px-5 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects/patio-raised-house.webp"
            alt="Custom paver patio installation in California"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-[1]" />
        <div className="relative z-[2] text-center max-w-[900px]">
          <div className="inline-flex items-center gap-2 bg-brand-orange/90 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <MapPin size={16} /> Serving All of California
          </div>
          <h1 className="font-oswald text-[2.2rem] sm:text-[3.5rem] lg:text-[4.5rem] font-bold text-white leading-[1.05] mb-5 uppercase tracking-[2px]">
            Custom Paver Patio<br />Design &amp; Installation
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-[700px] mx-auto">
            Create the perfect outdoor living space with a stunning paver patio. Fire pits, pool surrounds, dining areas &amp; more. 20+ years experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15106500080"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-bold bg-brand-orange text-white hover:bg-brand-orange-dark transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              <Phone size={20} /> Call for Free Estimate
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-bold bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              Get a Quote <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <CallNowStrip />

      {/* Patio Design Ideas */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            DESIGN IDEAS
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-6 leading-[1.2]">
            Patio Paver Ideas for Your Backyard
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            Your backyard paver patio should be an extension of your home — a place to relax, entertain, and enjoy California&apos;s beautiful weather. Here are our most popular designs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designIdeas.map((idea, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={idea.image}
                    alt={idea.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 text-xl font-bold text-white drop-shadow-lg">
                    {idea.title}
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-slate-600 text-sm leading-relaxed">{idea.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Patterns */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            MATERIALS & PATTERNS
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-6 leading-[1.2]">
            Patio Paver Patterns &amp; Materials
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            The pattern you choose defines the character of your patio. Each layout offers a different aesthetic and structural benefit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {patterns.map((pattern, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-brand-black mb-3 flex items-center gap-2">
                  <Ruler size={20} className="text-brand-orange" />
                  {pattern.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{pattern.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            OUR PROCESS
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-6 leading-[1.2]">
            How We Build Your Dream Patio
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            From design to installation, every step is handled by our experienced team for a seamless, stress-free experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="relative bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="text-4xl font-bold text-brand-orange/20 mb-2">{step.step}</div>
                <h3 className="text-lg font-bold text-brand-black mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-brand-orange">
        <div className="max-w-[1100px] mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-1">20+</div>
            <div className="text-sm opacity-90">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-1">1000+</div>
            <div className="text-sm opacity-90">Patios Installed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-1">Lifetime</div>
            <div className="text-sm opacity-90">Guarantee</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-1">5★</div>
            <div className="text-sm opacity-90">Customer Rating</div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <DynamicGallery />

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            SERVICE AREAS
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-6 leading-[1.2]">
            Paver Patio Installation Across California
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-10 leading-relaxed">
            We design and install custom paver patios throughout the Bay Area and surrounding counties.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-[700px] mx-auto">
            {counties.map((county) => (
              <Link
                key={county.slug}
                href={county.slug}
                className="flex items-center gap-2 px-5 py-4 bg-slate-50 rounded-xl text-sm font-semibold text-brand-black border border-slate-200 hover:border-brand-orange hover:bg-brand-orange/5 transition-all group"
              >
                <MapPin size={16} className="text-brand-orange" />
                {county.name}
                <ArrowRight size={14} className="ml-auto text-slate-400 group-hover:text-brand-orange transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[900px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            FAQ
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-10 leading-[1.2]">
            Paver Patio Installation — Common Questions
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group border-2 border-brand-orange/20 rounded-xl overflow-hidden hover:border-brand-orange/40 transition-colors"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer bg-white hover:bg-slate-50 transition-colors font-semibold text-brand-black text-[15px]">
                  {faq.question}
                  <CheckCircle size={18} className="text-brand-orange flex-shrink-0 ml-3" />
                </summary>
                <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-black">
        <div className="max-w-[800px] mx-auto px-5 text-center">
          <h2 className="text-[1.8rem] md:text-[2.2rem] font-bold text-white mb-4">
            Ready for Your Dream Paver Patio?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Get a free design consultation and estimate. Let&apos;s create the perfect outdoor space for your home.
          </p>
          <a
            href="tel:+15106500080"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-lg font-bold bg-brand-orange text-white hover:bg-brand-orange-dark transition-all duration-300 shadow-lg hover:-translate-y-0.5"
          >
            <Phone size={20} /> (510) 650-0080
          </a>
        </div>
      </section>

      <DynamicServiceAreaMap />
      <Footer />
    </>
  );
}
