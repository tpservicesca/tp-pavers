import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallNowStrip from '@/components/CallNowStrip';
import ServiceAreaMap from '@/components/ServiceAreaMap';
import { MapPin, Phone, CheckCircle, Star, ArrowRight, Shield, Clock, Hammer } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Paver Installation in Livermore, CA | TP Services California',
  description:
    'Professional paver installation in Livermore, California. Driveways, patios, walkways, retaining walls & synthetic turf. 20+ years experience. 10-year warranty. Free estimates. Serving Livermore and Tri-Valley.',
  keywords: [
    'pavers livermore',
    'livermore pavers',
    'paver installation livermore',
    'paver contractor livermore',
    'driveway pavers livermore',
    'patio pavers livermore',
    'livermore paver contractor',
    'pavers in livermore',
    'retaining wall livermore',
    'hardscape livermore ca',
  ],
  openGraph: {
    title: 'Paver Installation in Livermore, CA | TP Services',
    description:
      'Expert paver installation in Livermore. Driveways, patios, walkways & retaining walls. 20+ years experience. Free estimates.',
    url: 'https://tppavers.com/livermore',
    siteName: 'TP Services California',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://tppavers.com/images/P1.webp',
        width: 1200,
        height: 630,
        alt: 'Professional Paver Installation in Livermore, California',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paver Installation in Livermore | TP Services',
    description: 'Expert paver installation in Livermore, CA. Free estimates. 10-year warranty.',
    images: ['https://tppavers.com/images/P1.webp'],
  },
  alternates: {
    canonical: 'https://tppavers.com/livermore',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'TP Services California - Livermore',
  description:
    'Professional paver installation, retaining walls, hardscape design and synthetic turf in Livermore, California. 20+ years experience with 10-year warranty.',
  url: 'https://tppavers.com/livermore',
  telephone: '+1-510-650-2083',
  email: 'dumpster@tpservicesca.com',
  image: 'https://tppavers.com/images/P1.webp',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Livermore',
    addressRegion: 'CA',
    postalCode: '94550',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.6819,
    longitude: -121.768,
  },
  areaServed: {
    '@type': 'City',
    name: 'Livermore',
    '@id': 'https://en.wikipedia.org/wiki/Livermore,_California',
  },
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '15',
    bestRating: '5',
  },
};

const services = [
  {
    icon: <Hammer size={28} />,
    title: 'Paver Driveways',
    description: 'Custom interlocking paver driveways designed to enhance your Livermore home\'s curb appeal and withstand heavy use.',
  },
  {
    icon: <Star size={28} />,
    title: 'Patios & Walkways',
    description: 'Beautiful outdoor living spaces with premium pavers, perfect for Livermore\'s warm climate and wine country lifestyle.',
  },
  {
    icon: <Shield size={28} />,
    title: 'Retaining Walls',
    description: 'Engineered retaining walls for Livermore\'s varied terrain. Prevent erosion and create stunning tiered landscapes.',
  },
  {
    icon: <Clock size={28} />,
    title: 'Synthetic Turf',
    description: 'Drought-resistant artificial turf installation. Save water and maintenance costs while keeping a green lawn year-round.',
  },
];

const faqs = [
  {
    question: 'How much does paver installation cost in Livermore?',
    answer: 'Paver installation costs in Livermore vary depending on the size, materials, and complexity of your project. On average, homeowners invest in custom patio, driveway, or backyard paver installations based on design and surface preparation needs. We offer free on-site estimates to give you an accurate price.',
  },
  {
    question: 'Do you serve all areas of Livermore?',
    answer: 'Yes! We serve all neighborhoods in Livermore including Downtown Livermore, Sunset West, Sunset East, South Livermore wine country, Springtown, and areas near Lawrence Livermore National Laboratory. We also serve nearby cities like Pleasanton, Dublin, and San Ramon.',
  },
  {
    question: 'How long does paver installation take in Livermore?',
    answer: 'Most residential paver installations in Livermore (patios, driveways, or walkways) are completed within 1 to 2 weeks, depending on project size and site conditions. We provide a detailed timeline after your free consultation.',
  },
  {
    question: 'What materials do you use for Livermore paver projects?',
    answer: 'We use high-quality materials including concrete pavers, natural stone, brick, and premium artificial turf — all designed for durability and long-lasting performance in Livermore\'s climate.',
  },
  {
    question: 'Do you offer a warranty on paver installation in Livermore?',
    answer: 'Yes, we stand behind our work with a 10-year warranty on both labor and materials. Full details are provided during your free estimate.',
  },
  {
    question: 'Can you remove my existing concrete driveway in Livermore?',
    answer: 'Absolutely. We handle full site preparation including demolition and removal of existing concrete, grass, or previous installations to ensure a solid foundation for your new pavers.',
  },
];

const neighborhoods = [
  'Downtown Livermore',
  'Sunset West',
  'Sunset East',
  'South Livermore',
  'Springtown',
  'Portola Meadows',
  'Altamont Creek',
  'Cayetano Creek',
];

const zipCodes = ['94550', '94551'];

export default function LivermorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-brand-black via-slate-800 to-brand-black pt-24 pb-16 px-5">
        <div className="absolute inset-0 bg-[url('/images/P1.webp')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 text-center max-w-[900px]">
          <div className="inline-flex items-center gap-2 bg-brand-orange/90 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <MapPin size={16} /> Serving Livermore, CA
          </div>
          <h1 className="font-oswald text-[2.2rem] sm:text-[3.5rem] lg:text-[4.5rem] font-bold text-white leading-[1.05] mb-5 uppercase tracking-[1px]">
            Expert Paver Installation<br />in Livermore
          </h1>
          <p className="text-lg sm:text-xl text-white/85 mb-8 leading-relaxed max-w-[700px] mx-auto">
            Transform your outdoor spaces with premium paver installation. Driveways, patios, walkways & retaining walls. 20+ years of experience in the Tri-Valley.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15106502083"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-bold bg-brand-orange text-white hover:bg-brand-orange-dark transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              <Phone size={20} /> Call for Free Estimate
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-bold bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              Request a Quote <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <CallNowStrip />

      {/* Why Livermore Trusts Us */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            LIVERMORE PAVERS
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-6 leading-[1.2]">
            Why Livermore Homeowners Trust TP Services
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            Livermore is known for its beautiful wine country landscapes and warm Tri-Valley climate. Our team understands the unique needs of Livermore properties — from drought-resistant solutions to designs that complement the area&apos;s natural beauty.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex gap-5 p-6 rounded-2xl bg-slate-50 hover:bg-brand-orange/5 transition-colors duration-300 border border-slate-100"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-black mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                </div>
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
            <div className="text-3xl md:text-4xl font-bold mb-1">15+</div>
            <div className="text-sm opacity-90">Livermore Projects</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-1">10yr</div>
            <div className="text-sm opacity-90">Warranty</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-1">5★</div>
            <div className="text-sm opacity-90">Customer Rating</div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            SERVICE AREA
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-10 leading-[1.2]">
            Livermore Neighborhoods We Serve
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {neighborhoods.map((hood) => (
              <span
                key={hood}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white rounded-full text-sm font-semibold text-brand-black border border-slate-200 hover:border-brand-orange transition-colors"
              >
                <MapPin size={14} className="text-brand-orange" /> {hood}
              </span>
            ))}
          </div>
          <div className="text-center">
            <p className="text-slate-500 text-sm mb-2">ZIP Codes: {zipCodes.join(', ')}</p>
            <p className="text-slate-500 text-sm">Also serving: Pleasanton, Dublin, San Ramon, Danville & surrounding Tri-Valley areas</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            FAQ
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-10 leading-[1.2]">
            Paver Installation in Livermore — Common Questions
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
                  <CheckCircle size={18} className="text-brand-orange flex-shrink-0 ml-3 group-open:rotate-180 transition-transform" />
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
            Ready to Transform Your Livermore Home?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Get a free on-site estimate today. No obligation, no pressure.
          </p>
          <a
            href="tel:+15106502083"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-lg font-bold bg-brand-orange text-white hover:bg-brand-orange-dark transition-all duration-300 shadow-lg hover:-translate-y-0.5"
          >
            <Phone size={20} /> (510) 650-2083
          </a>
        </div>
      </section>

      <ServiceAreaMap />
      <Footer />
    </>
  );
}
