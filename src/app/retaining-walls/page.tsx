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
  title: 'Retaining Wall Installation & Construction | Expert Contractors | TP Pavers',
  description:
    'Professional retaining wall installation in California. Gravity walls, segmental blocks, natural stone & paver retaining walls. Erosion control, slope management & landscape design. Free estimates.',
  keywords: [
    'retaining wall installation',
    'retaining wall contractor near me',
    'retaining wall cost',
    'retaining wall builders',
    'retaining wall construction',
    'block retaining wall',
    'stone retaining wall',
    'retaining wall contractors california',
    'segmental retaining wall',
    'landscape retaining wall',
    'erosion control retaining wall',
    'retaining wall design',
    'gravity retaining wall',
    'paver block retaining wall',
  ],
  openGraph: {
    title: 'Professional Retaining Wall Construction | TP Pavers California',
    description:
      'Expert retaining wall installation. Gravity, segmental, stone & paver block walls. Erosion control & landscape design. Free estimates.',
    url: 'https://tppavers.com/retaining-walls',
    siteName: 'TP Pavers',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://tppavers.com/images/projects/patio-retaining-wall.webp',
        width: 1200,
        height: 630,
        alt: 'Professional Retaining Wall Construction in California',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retaining Wall Installation | TP Pavers California',
    description: 'Expert retaining wall construction. Erosion control, slope management & landscape tiers. Free estimates.',
    images: ['https://tppavers.com/images/projects/patio-retaining-wall.webp'],
  },
  alternates: {
    canonical: 'https://tppavers.com/retaining-walls',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Retaining Wall Installation',
  provider: {
    '@type': 'LocalBusiness',
    name: 'TP Pavers',
    telephone: '+1-510-650-0080',
    url: 'https://tppavers.com',
    image: 'https://tppavers.com/images/projects/patio-retaining-wall.webp',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '15',
      bestRating: '5',
    },
  },
  description:
    'Professional retaining wall construction in California. Gravity walls, segmental blocks, natural stone, and paver retaining walls for erosion control and landscape design.',
  areaServed: {
    '@type': 'State',
    name: 'California',
  },
  serviceType: 'Retaining Wall Construction',
  url: 'https://tppavers.com/retaining-walls',
};

const wallTypes = [
  {
    title: 'Gravity Retaining Walls',
    description: 'These massive walls rely on their own weight to hold back soil. Built with natural stone, large concrete blocks, or boulders, gravity walls are perfect for shorter walls up to 4 feet and offer a rugged, natural appearance.',
    icon: <Shield size={28} className="text-brand-orange" />,
  },
  {
    title: 'Cantilever Retaining Walls',
    description: 'Engineered walls that use a reinforced concrete footing and stem to resist soil pressure. Ideal for taller walls over 4 feet where maximum strength is needed. Often used for hillside properties and significant grade changes.',
    icon: <Ruler size={28} className="text-brand-orange" />,
  },
  {
    title: 'Segmental Block Walls',
    description: 'The most popular residential option. Pre-engineered concrete blocks interlock without mortar, creating strong, attractive walls. Available in many colors and textures. Easy to incorporate curves and steps.',
    icon: <CheckCircle size={28} className="text-brand-orange" />,
  },
  {
    title: 'Paver Block Walls',
    description: 'Matching your retaining wall to your paver patio or driveway creates a cohesive landscape design. Paver block walls combine structural function with stunning aesthetics for a unified outdoor space.',
    icon: <Droplets size={28} className="text-brand-orange" />,
  },
];

const reasons = [
  {
    title: 'Erosion Control',
    description: 'Prevent soil washout during California\'s rainy season. A retaining wall holds earth in place, protecting your property and preventing landscape damage.',
  },
  {
    title: 'Slope Management',
    description: 'Transform unusable sloped terrain into flat, functional outdoor space. Retaining walls make hillside properties livable and enjoyable.',
  },
  {
    title: 'Landscape Tiers',
    description: 'Create beautiful multi-level gardens, raised planters, and tiered landscape designs that add dimension and visual interest to your yard.',
  },
  {
    title: 'Structural Support',
    description: 'Protect your home\'s foundation, driveway, and structures from soil movement. Retaining walls provide critical structural support on graded properties.',
  },
];

const processSteps = [
  { step: '01', title: 'Site Assessment', description: 'We evaluate the terrain, soil conditions, drainage patterns, and structural requirements. Every retaining wall project starts with understanding the land.' },
  { step: '02', title: 'Engineering & Design', description: 'For walls over 4 feet, we work with engineers to ensure proper design. We create plans that meet local building codes and your aesthetic vision.' },
  { step: '03', title: 'Excavation & Foundation', description: 'Proper excavation and a solid compacted base are critical. We install a leveled gravel foundation that ensures long-term stability.' },
  { step: '04', title: 'Drainage Installation', description: 'Behind every great retaining wall is proper drainage. We install perforated pipes and gravel backfill to prevent hydrostatic pressure buildup.' },
  { step: '05', title: 'Wall Construction', description: 'Block by block, stone by stone — our experienced crews build your wall with precision, proper setback, and reinforcement as needed.' },
  { step: '06', title: 'Backfill & Finishing', description: 'Proper backfill, compaction, cap installation, and landscape restoration. Your wall is built to last decades.' },
];

const faqs = [
  {
    question: 'How much does retaining wall installation cost?',
    answer: 'Retaining wall costs depend on height, length, materials, and site conditions. Every project is different — cost depends on wall height, length, materials, and site conditions. We provide free on-site estimates with transparent pricing.',
  },
  {
    question: 'Do I need a permit for a retaining wall?',
    answer: 'In most California jurisdictions, retaining walls over 4 feet tall (measured from the bottom of the footing to the top of the wall) require a building permit and may need engineered plans. We handle the permit process and engineering for you.',
  },
  {
    question: 'How long does a retaining wall last?',
    answer: 'A properly built retaining wall lasts 50–100+ years. The key is proper drainage, a solid foundation, and quality materials — all things we never cut corners on. Our retaining walls come with a lifetime guarantee.',
  },
  {
    question: 'What is the best material for a retaining wall?',
    answer: 'Segmental concrete blocks are the most popular for residential retaining walls — they\'re strong, affordable, and attractive. Natural stone offers a premium look. The best choice depends on your wall height, aesthetic preferences, and budget.',
  },
  {
    question: 'Can a retaining wall help with drainage problems?',
    answer: 'Yes! Retaining walls are often a key part of solving drainage issues. We integrate proper drainage systems (French drains, weep holes, gravel backfill) into every retaining wall to manage water flow and prevent erosion.',
  },
  {
    question: 'How tall can a retaining wall be?',
    answer: 'Single retaining walls can be built up to 6+ feet tall with proper engineering. For greater height changes, we often recommend a tiered wall system — multiple shorter walls with terraced planting areas between them, which is both structurally superior and more attractive.',
  },
  {
    question: 'Do retaining walls increase property value?',
    answer: 'Absolutely. Retaining walls increase usable space, improve drainage, and enhance the landscape — all factors that boost property value. They also prevent costly erosion damage, protecting your existing investment.',
  },
  {
    question: 'Where can I find a retaining wall contractor near me?',
    answer: 'TP Pavers builds retaining walls throughout the Bay Area and California. We serve Contra Costa, Alameda, Solano, Marin, San Mateo, and Santa Clara counties. Call (510) 650-0080 for a free consultation.',
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

export default function RetainingWallsPage() {
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
            src="/images/R2.webp"
            alt="Professional retaining wall construction in California"
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
            Professional Retaining<br />Wall Construction
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-[700px] mx-auto">
            Expert retaining wall installation for erosion control, slope management &amp; beautiful landscape design. 20+ years experience with lifetime guarantee.
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

      {/* Types of Retaining Walls */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            WALL TYPES
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-6 leading-[1.2]">
            Types of Retaining Walls We Build
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            Every property is different, and so is every retaining wall. We build the right type of wall for your specific terrain, needs, and design preferences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wallTypes.map((type, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow">
                <div className="mb-4">{type.icon}</div>
                <h3 className="text-lg font-bold text-brand-black mb-3">{type.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When You Need a Retaining Wall */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            DO YOU NEED ONE?
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-6 leading-[1.2]">
            When You Need a Retaining Wall
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            Not sure if your property needs a retaining wall? Here are the most common situations where a retaining wall is the right solution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-brand-black mb-3 flex items-center gap-2">
                  <CheckCircle size={20} className="text-brand-orange" />
                  {reason.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{reason.description}</p>
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
            How We Build Your Retaining Wall
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            Retaining walls require precision engineering and expert construction. Our proven process ensures your wall is built to last.
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
            <div className="text-3xl md:text-4xl font-bold mb-1">300+</div>
            <div className="text-sm opacity-90">Walls Built</div>
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
            Retaining Wall Installation Across California
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-10 leading-relaxed">
            We build retaining walls throughout the Bay Area and surrounding California counties.
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
            Retaining Wall Installation — Common Questions
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
            Need a Retaining Wall? Let&apos;s Talk.
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Get a free site assessment and estimate. We&apos;ll design the perfect retaining wall for your property.
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
