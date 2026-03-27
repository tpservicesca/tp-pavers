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
  title: 'Artificial Turf Installation in California | Synthetic Grass | TP Pavers',
  description:
    'Premium artificial turf installation in California. Landscape turf, pet turf, playground surfaces, putting greens & sports turf. Save water, no mowing. Free estimates.',
  keywords: [
    'artificial turf installation',
    'synthetic turf installation',
    'artificial grass installation',
    'fake grass installation',
    'artificial turf cost',
    'synthetic turf cost',
    'pet turf installation',
    'artificial turf near me',
    'putting green installation',
    'playground turf',
    'artificial lawn installation',
    'synthetic grass california',
    'water saving turf',
    'artificial turf contractor',
  ],
  openGraph: {
    title: 'Premium Artificial Turf Installation | TP Pavers California',
    description:
      'Expert artificial turf installation. Landscape, pet, playground & putting greens. Save water & eliminate mowing. Free estimates.',
    url: 'https://tppavers.com/synthetic-turf',
    siteName: 'TP Pavers',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://tppavers.com/images/S1.webp',
        width: 1200,
        height: 630,
        alt: 'Premium Artificial Turf Installation in California',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artificial Turf Installation | TP Pavers California',
    description: 'Premium synthetic turf installation. Save water, no mowing. Pet-friendly, year-round green. Free estimates.',
    images: ['https://tppavers.com/images/S1.webp'],
  },
  alternates: {
    canonical: 'https://tppavers.com/synthetic-turf',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Artificial Turf Installation',
  provider: {
    '@type': 'LocalBusiness',
    name: 'TP Pavers',
    telephone: '+1-510-650-0080',
    url: 'https://tppavers.com',
    image: 'https://tppavers.com/images/S1.webp',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '15',
      bestRating: '5',
    },
  },
  description:
    'Premium artificial turf installation in California. Landscape turf, pet turf, playground surfaces, putting greens, and sports turf with professional installation.',
  areaServed: {
    '@type': 'State',
    name: 'California',
  },
  serviceType: 'Artificial Turf Installation',
  url: 'https://tppavers.com/synthetic-turf',
};

const benefits = [
  {
    title: 'Save Thousands on Water',
    description: 'California homeowners spend significant amounts watering natural grass. Artificial turf eliminates water costs entirely, saving you thousands per year. It pays for itself in just a few years.',
    icon: <Droplets size={28} className="text-brand-orange" />,
  },
  {
    title: 'Zero Mowing or Maintenance',
    description: 'No more weekends spent mowing, edging, fertilizing, or treating for weeds and pests. Artificial turf stays perfectly manicured 365 days a year with virtually no effort.',
    icon: <Timer size={28} className="text-brand-orange" />,
  },
  {
    title: 'Year-Round Green',
    description: 'While natural grass turns brown in summer heat and goes dormant in winter, your synthetic turf stays lush and green every single day — no matter the season or drought conditions.',
    icon: <CheckCircle size={28} className="text-brand-orange" />,
  },
  {
    title: '100% Pet-Friendly',
    description: 'Our pet turf is designed with antimicrobial infill and superior drainage. No mud, no dead spots, no digging holes. Easy to clean and odor-resistant. Dogs and cats love it.',
    icon: <Shield size={28} className="text-brand-orange" />,
  },
];

const turfTypes = [
  {
    title: 'Landscape Turf',
    description: 'Our most popular product for front and backyard lawns. Realistic blade shapes, natural color variations, and soft texture create a lawn that looks and feels like real grass.',
  },
  {
    title: 'Playground Turf',
    description: 'Safety-rated artificial turf with shock-absorbing padding underneath. Meets ASTM fall-height requirements. Perfect for schools, daycare centers, and residential play areas.',
  },
  {
    title: 'Pet Turf',
    description: 'Specifically engineered for homes with dogs and cats. Features antimicrobial infill, enhanced drainage (up to 30+ inches per hour), and durable fibers that resist wear from pet traffic.',
  },
  {
    title: 'Putting Greens',
    description: 'Professional-grade putting green turf with consistent ball roll and true speed. Custom designed for your backyard with multiple holes, contours, and fringe areas.',
  },
  {
    title: 'Sports Turf',
    description: 'High-performance synthetic turf for backyard sports courts, batting cages, and training areas. Durable enough for cleats and heavy use while providing excellent traction.',
  },
];

const processSteps = [
  { step: '01', title: 'Free Consultation', description: 'We measure your space, discuss your needs (pets, kids, aesthetics), and recommend the perfect turf product and infill system for your property.' },
  { step: '02', title: 'Site Preparation', description: 'Removal of existing grass/sod, excavation to proper depth, and grading for drainage. We ensure a perfectly level, well-draining base.' },
  { step: '03', title: 'Base Installation', description: 'Compacted decomposed granite or Class II road base creates a solid, permeable foundation. Proper base preparation is key to a long-lasting turf installation.' },
  { step: '04', title: 'Turf Laying & Seaming', description: 'Precision cutting and placement of turf panels with invisible seaming. We ensure blade direction consistency and proper fit around edges and landscaping.' },
  { step: '05', title: 'Infill & Brushing', description: 'Application of antimicrobial infill (sand or specialized products) and power brushing to stand blades upright for a natural, lush appearance.' },
  { step: '06', title: 'Final Inspection', description: 'Complete quality check, cleanup, and walkthrough with you. We make sure everything is perfect before considering the job done.' },
];

const costComparison = [
  { category: 'Monthly Water Bill', natural: 'High', artificial: '$0' },
  { category: 'Mowing (monthly)', natural: 'Recurring', artificial: '$0' },
  { category: 'Fertilizer & Weed Control', natural: 'Recurring', artificial: '$0' },
  { category: 'Pest Treatment', natural: 'Recurring', artificial: '$0' },
  { category: 'Annual Reseeding/Sod', natural: 'Annual cost', artificial: '$0' },
  { category: '10-Year Total Cost', natural: 'Significant over time', artificial: 'One-time investment' },
];

const faqs = [
  {
    question: 'How much does artificial turf installation cost?',
    answer: 'The cost depends on the turf product, project size, and base preparation needed. When you factor in the elimination of water bills, mowing, and maintenance, most homeowners break even within 3–5 years.',
  },
  {
    question: 'How long does artificial turf last?',
    answer: 'High-quality artificial turf lasts 15–25 years with minimal maintenance. Our premium products come with manufacturer warranties of 8–15 years. The actual lifespan depends on usage, foot traffic, and UV exposure — but even in California\'s intense sun, modern turf is designed to resist fading.',
  },
  {
    question: 'Is artificial turf safe for pets?',
    answer: 'Absolutely! Our pet turf is specifically designed for homes with dogs and cats. It features antimicrobial infill that resists bacteria and odors, drainage rates of 30+ inches per hour, and durable fibers that won\'t flatten from pet traffic. It\'s easier to clean than natural grass — no mud, no dead spots.',
  },
  {
    question: 'Does artificial turf get hot in the sun?',
    answer: 'Synthetic turf can get warm on hot summer days, similar to a pool deck or patio. However, modern turf products include heat-reflective technology. A quick spray with a garden hose cools the surface instantly. We also recommend lighter-colored turf options for areas with direct afternoon sun.',
  },
  {
    question: 'How does artificial turf drain?',
    answer: 'Quality artificial turf has perforated backing that drains at 30+ inches per hour — much faster than natural grass. Combined with our properly prepared base, water flows through quickly. No puddles, no muddy spots, even after heavy rain.',
  },
  {
    question: 'Can artificial turf be installed on slopes?',
    answer: 'Yes! We regularly install artificial turf on slopes, hillsides, and uneven terrain. Proper base preparation, secure edges, and appropriate infill ensure the turf stays in place. Slopes can actually be ideal for turf since it eliminates the difficulty of mowing on angled surfaces.',
  },
  {
    question: 'Does artificial turf save water?',
    answer: 'Yes — dramatically. The average California lawn uses 44,000+ gallons of water per year. Artificial turf eliminates that entirely. Many California water districts even offer rebates per square foot for replacing natural grass with synthetic turf.',
  },
  {
    question: 'Where do you install artificial turf in California?',
    answer: 'TP Pavers installs artificial turf throughout the Bay Area and surrounding counties including Contra Costa, Alameda, Solano, Marin, San Mateo, and Santa Clara counties. Call (510) 650-0080 for a free estimate at your location.',
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

export default function SyntheticTurfPage() {
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
            src="/images/S1.webp"
            alt="Premium artificial turf installation in California"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-[1]" />
        <div className="relative z-[2] text-center max-w-[900px]">
          <div className="inline-flex items-center gap-2 bg-brand-orange/90 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <Droplets size={16} /> Save Water. Save Time. Save Money.
          </div>
          <h1 className="font-oswald text-[2.2rem] sm:text-[3.5rem] lg:text-[4.5rem] font-bold text-white leading-[1.05] mb-5 uppercase tracking-[2px]">
            Premium Artificial<br />Turf Installation
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-[700px] mx-auto">
            Eliminate watering, mowing &amp; maintenance forever. Our premium synthetic turf looks and feels like real grass — year-round green guaranteed.
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

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            WHY ARTIFICIAL TURF?
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-6 leading-[1.2]">
            Benefits of Artificial Turf Installation
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            California homeowners are switching to synthetic turf in record numbers — and for good reason. Here&apos;s why it&apos;s one of the smartest investments you can make.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-brand-black mb-3">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Turf Types */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            TURF OPTIONS
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-6 leading-[1.2]">
            Synthetic Turf Types We Install
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            We carry a full range of artificial turf products for every application — from beautiful front lawns to backyard putting greens.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {turfTypes.map((turf, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-brand-black mb-3 flex items-center gap-2">
                  <CheckCircle size={18} className="text-brand-orange" />
                  {turf.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{turf.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            INSTALLATION PROCESS
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-6 leading-[1.2]">
            How We Install Artificial Turf
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            Professional installation is the difference between turf that looks natural for 15+ years and turf that wrinkles, shifts, or drains poorly.
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

      {/* Cost vs Natural Grass */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            COST COMPARISON
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-6 leading-[1.2]">
            Artificial Turf vs Natural Grass: Long-Term Costs
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            While artificial turf has a higher upfront cost, the long-term savings are dramatic. Here&apos;s how the numbers compare over 10 years.
          </p>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-brand-black text-white">
                    <th className="px-6 py-4 text-left text-sm font-semibold">Expense</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">Natural Grass</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold bg-brand-orange">Artificial Turf</th>
                  </tr>
                </thead>
                <tbody>
                  {costComparison.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-6 py-4 text-sm font-medium text-brand-black">{row.category}</td>
                      <td className="px-6 py-4 text-sm text-center text-slate-500">{row.natural}</td>
                      <td className="px-6 py-4 text-sm text-center font-semibold text-green-600">{row.artificial}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center text-slate-500 text-sm mt-4">
            * Estimates based on average California homeowner costs for a 1,000 sq ft lawn.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-brand-orange">
        <div className="max-w-[1100px] mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-1">44K+</div>
            <div className="text-sm opacity-90">Gallons Saved/Year</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-1">$0</div>
            <div className="text-sm opacity-90">Monthly Maintenance</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-1">15-25</div>
            <div className="text-sm opacity-90">Year Lifespan</div>
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
            Artificial Turf Installation Across California
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-10 leading-relaxed">
            We install premium artificial turf throughout the Bay Area and surrounding California counties.
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
            Artificial Turf Installation — Common Questions
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
            Ready for a Beautiful, Maintenance-Free Lawn?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Get a free estimate for artificial turf installation. Start saving water and time today.
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
