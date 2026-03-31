import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallNowStrip from '@/components/CallNowStrip';
import DynamicServiceAreaMap from '@/components/DynamicServiceAreaMap';
import DynamicBeforeAfterSlider from '@/components/DynamicBeforeAfterSlider';
import DynamicGallery from '@/components/DynamicGallery';
import { MapPin, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Paver Installation in South San Francisco, CA | TP Pavers',
  description:
    'Professional paver installation in South San Francisco, California. Driveways, patios, walkways, retaining walls & synthetic turf. 20+ years experience. 10-year warranty. Free estimates. Serving all South San Francisco neighborhoods.',
  keywords: [
      "pavers south san francisco",
      "south san francisco pavers",
      "paver installation south san francisco",
      "paver contractor south san francisco",
      "driveway pavers south san francisco ca",
      "patio pavers south san francisco",
      "south san francisco paver contractor",
      "pavers in south san francisco ca",
      "retaining wall south san francisco",
      "hardscape south san francisco ca",
      "paver driveway south san francisco california",
      "outdoor pavers south san francisco"
  ],
  openGraph: {
    title: 'Paver Installation in South San Francisco, CA | TP Pavers',
    description:
      'Expert paver installation in South San Francisco. Driveways, patios, walkways & retaining walls. 20+ years experience. Free estimates.',
    url: 'https://tppavers.com/south-san-francisco',
    siteName: 'TP Pavers',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://tppavers.com/images/P1.webp',
        width: 1200,
        height: 630,
        alt: 'Professional Paver Installation in South San Francisco, California',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paver Installation in South San Francisco | TP Pavers',
    description: 'Expert paver installation in South San Francisco, CA. Free estimates. 10-year warranty.',
    images: ['https://tppavers.com/images/P1.webp'],
  },
  alternates: {
    canonical: 'https://tppavers.com/south-san-francisco',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'TP Pavers - South San Francisco',
  description:
    'Professional paver installation, retaining walls, hardscape design and synthetic turf in South San Francisco, California. 20+ years experience with 10-year warranty.',
  url: 'https://tppavers.com/south-san-francisco',
  telephone: '+1-510-650-0080',
  email: 'contact@tppavers.com',
  image: 'https://tppavers.com/images/P1.webp',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'South San Francisco',
    addressRegion: 'CA',
    postalCode: '94080',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.6547,
    longitude: -122.4077,
  },
  areaServed: {
    '@type': 'City',
    name: 'South San Francisco',
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
    image: '/images/projects/driveway-multicolor.webp',
    title: 'Paver Driveways',
    description:
      "Upgrade your South San Francisco home with a custom interlocking paver driveway. Built to handle daily traffic and enhance curb appeal in neighborhoods like Downtown and Westborough.",
  },
  {
    image: '/images/projects/patio-raised-house.webp',
    title: 'Patios & Walkways',
    description:
      "Design the perfect outdoor living space for South San Francisco\'s beautiful weather. From backyard patios to front walkways, we create durable and beautiful hardscapes for every home.",
  },
  {
    image: '/images/projects/patio-retaining-wall.webp',
    title: 'Retaining Walls',
    description:
      "South San Francisco\'s varied terrain often requires structural solutions. Our retaining walls prevent erosion and add stunning landscape tiers to properties throughout Sunshine Gardens and beyond.",
  },
  {
    image: '/images/S1.webp',
    title: 'Synthetic Turf',
    description:
      "Save water and keep your South San Francisco lawn green year-round. Our premium artificial turf is perfect for families, pets, and California\'s drought-conscious lifestyle.",
  },
];

const faqs = [
  {
    question: "How much do pavers cost in South San Francisco, CA?",
    answer:
      "Paver installation costs in South San Francisco depend on the project size, materials chosen, and site preparation needed. Whether it\'s a driveway, patio, or walkway, we provide free on-site estimates with transparent pricing. Most South San Francisco homeowners are pleasantly surprised by the value compared to plain concrete.",
  },
  {
    question: "What neighborhoods in South San Francisco do you serve?",
    answer:
      "We serve all of South San Francisco including Downtown, Westborough, Sunshine Gardens, Avalon, Sign Hill. We also cover neighboring cities throughout San Mateo County.",
  },
  {
    question: "How long does a paver driveway installation take in South San Francisco?",
    answer:
      "Most residential paver projects in South San Francisco — driveways, patios, or walkways — are completed in 1 to 2 weeks depending on size and complexity. We handle everything from demo to final sealing. A detailed timeline is provided after your free consultation.",
  },
  {
    question: "What paver materials work best for South San Francisco\'s climate?",
    answer:
      "South San Francisco enjoys a mild Mediterranean climate, making concrete pavers and natural stone excellent choices. Both are durable, weather-resistant, and low-maintenance. We help you select materials that look great and last decades in the Bay Area climate.",
  },
  {
    question: "Do you offer a warranty on South San Francisco paver installations?",
    answer:
      "Yes. Every paver installation in South San Francisco comes with our 10-year warranty covering both labor and materials. We stand behind the quality of our work and use only premium-grade products.",
  },
  {
    question: "Can you replace my old concrete driveway with pavers in South San Francisco?",
    answer:
      "Absolutely. We handle full demolition and removal of existing concrete, asphalt, or old surfaces. Proper base preparation is key to a lasting install, and we never cut corners — especially for South San Francisco properties.",
  }
];

const neighborhoods = ["Downtown","Westborough","Sunshine Gardens","Avalon","Sign Hill"];

const zipCodes = ["94080"];

export default function SouthSanFranciscoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* Hero with Before/After Slider */}
      <section
        id="home"
        className="relative min-h-[85vh] flex flex-col justify-center items-center pt-[100px] px-5 pb-0 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <DynamicBeforeAfterSlider
            beforeSrc="/images/hero-before.jpg"
            afterSrc="/images/hero-after.jpg"
            beforeSrcMobile="/images/hero-before-mobile.jpg"
            afterSrcMobile="/images/hero-after-mobile.jpg"
            beforeAlt="Backyard before paver installation in South San Francisco"
            afterAlt="Backyard after paver installation in South San Francisco - beautiful patio"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[1] pointer-events-none" />

        <div className="relative z-[2] text-center max-w-[900px] flex-grow flex flex-col justify-center items-center pointer-events-none">
          <div className="inline-flex items-center gap-2 bg-brand-orange/90 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <MapPin size={16} /> Serving South San Francisco, CA
          </div>
          <h1 className="font-oswald text-[2.2rem] sm:text-[3.5rem] lg:text-[5rem] font-bold text-white leading-[1.05] mb-5 uppercase tracking-[2px]">
            EXPERT PAVER<br />INSTALLATION<br />IN SOUTH SAN FRANCISCO
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-[700px] mx-auto">
            Transform your outdoor spaces with premium paver installation.<br />
            Driveways, patios, walkways &amp; retaining walls.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
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
              Request a Quote <ArrowRight size={20} />
            </a>
          </div>
        </div>

        <div className="relative z-[2] mb-4 text-white/70 text-xs sm:text-sm font-medium animate-pulse pointer-events-none">
          ← Drag to compare Before &amp; After →
        </div>
      </section>

      <CallNowStrip />

      {/* Services with Images */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            SOUTH SAN FRANCISCO PAVERS
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-6 leading-[1.2]">
            Why South San Francisco Homeowners Trust TP Pavers
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            South San Francisco — 'The Industrial City' — has evolved into a thriving biotech hub with charming residential neighborhoods. From the hillside homes of Sign Hill to the family streets of Westborough, we install premium pavers that add lasting beauty and value.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} in South San Francisco, CA`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 text-xl font-bold text-white drop-shadow-lg">
                    {service.title}
                  </h3>
                </div>
                <div className="p-5">
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
            <div className="text-3xl md:text-4xl font-bold mb-1">500+</div>
            <div className="text-sm opacity-90">Projects Completed</div>
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

      {/* Project Photos */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            OUR WORK
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-10 leading-[1.2]">
            Recent Paver Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: '/images/projects/walkway-brick-curved.webp', alt: 'Curved red brick paver walkway' },
              { src: '/images/projects/walkway-brick-wide.webp', alt: 'Red brick walkway with landscaping' },
              { src: '/images/projects/patio-retaining-wall.webp', alt: 'Paver patio with retaining wall' },
              { src: '/images/projects/patio-raised-house.webp', alt: 'Raised paver patio with seat wall' },
              { src: '/images/projects/walkway-herringbone.webp', alt: 'Herringbone pattern paver walkway' },
              { src: '/images/projects/team-working.webp', alt: 'TP Pavers team at work' },
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

      {/* Neighborhoods */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            SERVICE AREA
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-10 leading-[1.2]">
            South San Francisco Neighborhoods We Serve
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {neighborhoods.map((hood) => (
              <span
                key={hood}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-slate-50 rounded-full text-sm font-semibold text-brand-black border border-slate-200 hover:border-brand-orange transition-colors"
              >
                <MapPin size={14} className="text-brand-orange" /> {hood}
              </span>
            ))}
          </div>
          <div className="text-center">
            <p className="text-slate-500 text-sm mb-2">ZIP Codes: {zipCodes.join(', ')}</p>
            <p className="text-slate-500 text-sm">
              Also serving: San Bruno, Daly City, Brisbane, Colma & surrounding Peninsula areas
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <DynamicGallery />

      {/* FAQs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[900px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            FAQ
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-10 leading-[1.2]">
            Paver Installation in South San Francisco — Common Questions
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
            Ready to Transform Your South San Francisco Home?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Get a free on-site estimate today. No obligation, no pressure.
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
