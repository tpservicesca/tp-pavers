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
  title: 'Paver Walkway Installation | Beautiful Stone Walkways | TP Pavers California',
  description:
    'Professional paver walkway installation in California. Curved walkways, garden paths, stepping stones & front entry walkways. Premium materials, expert installation. Free estimates.',
  keywords: [
    'paver walkway installation',
    'paver walkway ideas',
    'stone walkway installation',
    'walkway pavers',
    'paver path installation',
    'brick walkway installation',
    'garden path pavers',
    'stepping stone walkway',
    'front walkway pavers',
    'curved paver walkway',
    'walkway paver designs',
    'paver sidewalk installation',
    'walkway pavers near me',
    'paver walkway cost',
  ],
  openGraph: {
    title: 'Beautiful Paver Walkway Installation | TP Pavers California',
    description:
      'Expert paver walkway installation. Curved paths, garden walkways, stepping stones & front entries. 20+ years experience. Free estimates.',
    url: 'https://tppavers.com/paver-walkways',
    siteName: 'TP Pavers',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://tppavers.com/images/projects/walkway-brick-curved.webp',
        width: 1200,
        height: 630,
        alt: 'Beautiful Paver Walkway Installation in California',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paver Walkway Installation | TP Pavers California',
    description: 'Beautiful paver walkways — curved paths, garden walkways, stepping stones. Free estimates.',
    images: ['https://tppavers.com/images/projects/walkway-brick-curved.webp'],
  },
  alternates: {
    canonical: 'https://tppavers.com/paver-walkways',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Paver Walkway Installation',
  provider: {
    '@type': 'LocalBusiness',
    name: 'TP Pavers',
    telephone: '+1-510-650-0080',
    url: 'https://tppavers.com',
    image: 'https://tppavers.com/images/projects/walkway-brick-curved.webp',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '15',
      bestRating: '5',
    },
  },
  description:
    'Professional paver walkway installation in California. Curved walkways, garden paths, stepping stones, and front entry walkways with premium materials.',
  areaServed: {
    '@type': 'State',
    name: 'California',
  },
  serviceType: 'Paver Walkway Installation',
  url: 'https://tppavers.com/paver-walkways',
};

const designIdeas = [
  {
    title: 'Curved Walkways',
    image: '/images/projects/walkway-brick-curved.webp',
    description: 'Graceful curves add elegance and visual interest to your landscape. Curved paver walkways guide visitors naturally through your yard while creating a softer, more inviting feel than straight paths.',
  },
  {
    title: 'Straight & Formal Paths',
    image: '/images/projects/walkway-brick-wide.webp',
    description: 'Clean, straight walkways create a formal, sophisticated entrance to your home. Perfect for front yard paths, connecting the driveway to the front door with a polished, architectural look.',
  },
  {
    title: 'Stepping Stone Walkways',
    image: '/images/projects/walkway-herringbone.webp',
    description: 'Individual pavers or natural stones set into grass or gravel create a casual, charming path. Ideal for garden areas, side yards, and connecting outdoor living spaces in a relaxed style.',
  },
  {
    title: 'Garden Paths',
    image: '/images/projects/patio-curved-seatwall.webp',
    description: 'Winding paths through flower beds, around trees, and beside water features. Garden walkways with border pavers and accent stones turn your landscape into an experience to explore.',
  },
];

const patterns = [
  {
    title: 'Herringbone',
    description: 'A zigzag interlocking pattern that\'s both beautiful and incredibly strong. Herringbone prevents pavers from shifting underfoot and creates a classic, timeless look for any walkway.',
  },
  {
    title: 'Running Bond',
    description: 'A simple offset pattern similar to brick walls. Running bond is clean, versatile, and works beautifully with both modern and traditional home styles. Easy to follow curves.',
  },
  {
    title: 'Basketweave',
    description: 'Alternating pairs of pavers create a woven appearance that adds texture and interest. Basketweave works especially well for wider walkways and courtyard paths.',
  },
  {
    title: 'Circular Fan',
    description: 'A stunning radiating pattern that creates focal points within your walkway. Often used at intersections, widened areas, or landing pads to add a dramatic design element.',
  },
];

const processSteps = [
  { step: '01', title: 'Design Consultation', description: 'We walk your property together, discussing path routing, width, materials, and how the walkway connects to your home, driveway, patio, and landscape.' },
  { step: '02', title: 'Custom Layout', description: 'We create a detailed design showing the walkway route, pattern, materials, and any accent features like borders, lighting channels, or landing areas.' },
  { step: '03', title: 'Site Preparation', description: 'Excavation to proper depth, grading for drainage, and installation of landscape fabric and compacted gravel base for a solid, long-lasting foundation.' },
  { step: '04', title: 'Paver Installation', description: 'Expert placement with precision cuts for curves, borders, and accent patterns. Proper edge restraints keep everything locked in place permanently.' },
  { step: '05', title: 'Finishing & Sealing', description: 'Joint sand application, compaction, and professional sealer to protect your walkway and enhance color vibrancy. Complete cleanup and walkthrough.' },
];

const faqs = [
  {
    question: 'How much does paver walkway installation cost?',
    answer: 'Every walkway project is unique — cost depends on length, materials, and design complexity. We provide free on-site estimates with no obligation.',
  },
  {
    question: 'What are the best paver walkway designs?',
    answer: 'Popular walkway designs include curved paths for a natural feel, straight formal paths for front entries, stepping stone walkways through gardens, and wide grand walkways with border accents. The best design depends on your home style, landscape, and how the walkway connects to other outdoor spaces.',
  },
  {
    question: 'How wide should a paver walkway be?',
    answer: 'Front entry walkways should be at least 4 feet wide to allow two people to walk side by side. Garden paths can be 2–3 feet wide. Side yard walkways are typically 3 feet. We help you determine the perfect width based on traffic patterns and aesthetics.',
  },
  {
    question: 'What materials work best for walkway pavers?',
    answer: 'Concrete interlocking pavers are the most popular for their durability, slip-resistance, and variety of styles. Brick pavers offer classic charm. Natural stone (flagstone, bluestone, travertine) provides a premium, one-of-a-kind look. All materials we install are rated for outdoor foot traffic.',
  },
  {
    question: 'How long does a paver walkway last?',
    answer: 'A professionally installed paver walkway lasts 25–50+ years with minimal maintenance. The key is proper base preparation — which we never cut corners on. Our walkways come with a lifetime guarantee covering both labor and materials.',
  },
  {
    question: 'Can you build a curved paver walkway?',
    answer: 'Absolutely! Curved walkways are one of our specialties. Our experienced crews hand-cut pavers with precision saws to create smooth, flowing curves that look natural. Running bond and herringbone patterns work especially well for curved designs.',
  },
  {
    question: 'Do paver walkways need maintenance?',
    answer: 'Very little. Occasional sweeping, rinsing with a garden hose, and resealing every 2–3 years is all that\'s needed. Unlike concrete paths that crack, or gravel paths that scatter, paver walkways stay put and look great with minimal effort.',
  },
  {
    question: 'Do you install paver walkways near me in California?',
    answer: 'Yes! TP Pavers installs paver walkways throughout the Bay Area including Contra Costa, Alameda, Solano, Marin, San Mateo, and Santa Clara counties. Call (510) 650-0080 for a free design consultation and estimate.',
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

export default function PaverWalkwaysPage() {
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
            src="/images/projects/walkway-brick-curved.webp"
            alt="Beautiful paver walkway installation in California"
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
            Beautiful Paver<br />Walkway Installation
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-[700px] mx-auto">
            Create stunning pathways that connect your outdoor spaces with elegance. Curved, straight, stepping stones &amp; garden paths. 20+ years experience.
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

      {/* Walkway Design Ideas */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            DESIGN IDEAS
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-6 leading-[1.2]">
            Paver Walkway Ideas for Your Home
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            A well-designed walkway does more than connect point A to point B — it enhances your entire landscape and creates a welcoming experience for everyone who visits.
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
            Walkway Paver Patterns &amp; Materials
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            The pattern you choose gives your walkway its character. Here are the most popular options for residential walkways.
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
            How We Build Your Paver Walkway
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            From design to completion, our proven process ensures a walkway that looks beautiful and lasts a lifetime.
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

      {/* Project Photos */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            OUR WORK
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-10 leading-[1.2]">
            Recent Walkway Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: '/images/projects/walkway-brick-curved.webp', alt: 'Curved brick paver walkway' },
              { src: '/images/projects/walkway-brick-wide.webp', alt: 'Wide brick walkway with landscaping' },
              { src: '/images/projects/walkway-herringbone.webp', alt: 'Herringbone pattern paver walkway' },
            ].map((photo, i) => (
              <div key={i} className="relative h-[280px] rounded-xl overflow-hidden group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
            <div className="text-3xl md:text-4xl font-bold mb-1">800+</div>
            <div className="text-sm opacity-90">Walkways Installed</div>
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
            Paver Walkway Installation Across California
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-10 leading-relaxed">
            We install paver walkways throughout the Bay Area and surrounding California counties.
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
            Paver Walkway Installation — Common Questions
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
            Ready for a Beautiful Paver Walkway?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Get a free design consultation and estimate. Let&apos;s create the perfect path for your home.
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
