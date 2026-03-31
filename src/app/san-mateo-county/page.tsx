import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallNowStrip from '@/components/CallNowStrip';
import DynamicServiceAreaMap from '@/components/DynamicServiceAreaMap';
import DynamicGallery from '@/components/DynamicGallery';
import { MapPin, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Paver Installation in San Mateo County, CA | TP Pavers',
  description:
    'Professional paver installation across 10+ cities in San Mateo County. Driveways, patios, walkways, retaining walls & synthetic turf. 20+ years experience, 10-year warranty. Serving Redwood City, San Mateo, Burlingame, Foster City & more. Call (510) 650-0080.',
  keywords: [
    'pavers san mateo county',
    'paver contractor san mateo county',
    'paver installation san mateo county',
    'driveway pavers san mateo county',
    'patio pavers san mateo county',
    'hardscape contractor san mateo county',
    'retaining wall san mateo county',
    'synthetic turf san mateo county',
    'concrete pavers san mateo county',
    'walkway pavers san mateo county ca',
    'outdoor pavers san mateo county ca',
    'paver company san mateo county',
    'best paver contractor san mateo county',
    'interlocking pavers san mateo county',
  ],
  openGraph: {
    title: 'Paver Installation in San Mateo County, CA | TP Pavers',
    description:
      'Serving 10+ cities across San Mateo County. Premium paver installation for driveways, patios, walkways & retaining walls. 20+ years experience. Free estimates.',
    url: 'https://tppavers.com/san-mateo-county',
    siteName: 'TP Pavers',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://tppavers.com/images/P1.webp',
        width: 1200,
        height: 630,
        alt: 'Professional Paver Installation in San Mateo County, California',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paver Installation in San Mateo County | TP Pavers',
    description:
      'Expert paver installation across San Mateo County. 10+ cities served. Free estimates. 10-year warranty.',
    images: ['https://tppavers.com/images/P1.webp'],
  },
  alternates: {
    canonical: 'https://tppavers.com/san-mateo-county',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
};

const CITIES_WITH_PAGES = [
  { name: 'Redwood City', slug: 'redwood-city', tagline: 'County Seat' },
  { name: 'San Mateo', slug: 'san-mateo-city', tagline: 'Central Peninsula' },
  { name: 'Daly City', slug: 'daly-city', tagline: 'Gateway to the Peninsula' },
  { name: 'South San Francisco', slug: 'south-san-francisco', tagline: 'The Industrial City' },
  { name: 'San Bruno', slug: 'san-bruno', tagline: 'Heart of the Peninsula' },
  { name: 'Burlingame', slug: 'burlingame', tagline: 'City of Trees' },
  { name: 'San Carlos', slug: 'san-carlos', tagline: 'City of Good Living' },
  { name: 'Foster City', slug: 'foster-city', tagline: 'Planned Community' },
  { name: 'Pacifica', slug: 'pacifica', tagline: 'Coastal Charm' },
  { name: 'Half Moon Bay', slug: 'half-moon-bay', tagline: 'Coastside Living' },
  { name: 'Belmont', slug: 'belmont', tagline: 'Hillside Living' },
  { name: 'Menlo Park', slug: 'menlo-park', tagline: 'Venture Capital Hub' },
  { name: 'Millbrae', slug: 'millbrae', tagline: 'Transit Gateway' },
];

const ALL_CITIES = CITIES_WITH_PAGES.map((c) => c.name);

const services = [
  {
    image: '/images/projects/driveway-multicolor.webp',
    title: 'Paver Driveways',
    description:
      'Upgrade your San Mateo County home with a custom interlocking paver driveway. Durable, beautiful, and built to handle daily traffic across every Peninsula neighborhood.',
  },
  {
    image: '/images/projects/patio-curved-seatwall.webp',
    title: 'Patios & Walkways',
    description:
      'Design the perfect outdoor living space for San Mateo County\'s mild coastal climate. From backyard patios to front walkways, we create hardscapes that last.',
  },
  {
    image: '/images/R2.webp',
    title: 'Retaining Walls',
    description:
      'San Mateo County\'s hilly terrain from the coast to the bay often requires structural solutions. Our retaining walls prevent erosion, add usable space, and create stunning landscape tiers.',
  },
  {
    image: '/images/S1.webp',
    title: 'Synthetic Turf',
    description:
      'Save water and keep your lawn green year-round. Our premium artificial turf is perfect for families, pets, and California\'s drought-conscious lifestyle.',
  },
];

const faqs = [
  {
    question: 'How much do pavers cost in San Mateo County?',
    answer:
      'Paver installation costs in San Mateo County depend on project size, materials chosen, and site preparation needed. We provide free on-site estimates with transparent pricing for driveways, patios, walkways, and retaining walls. Most homeowners find pavers offer excellent long-term value compared to poured concrete.',
  },
  {
    question: 'What cities in San Mateo County do you serve?',
    answer:
      'We serve all major cities across San Mateo County, including Redwood City, San Mateo, Daly City, South San Francisco, San Bruno, Burlingame, San Carlos, Foster City, Pacifica, Half Moon Bay, and surrounding communities.',
  },
  {
    question: 'What paver materials work best for San Mateo County\'s climate?',
    answer:
      'San Mateo County enjoys a mild, Mediterranean climate with coastal fog and moderate temperatures year-round. Concrete pavers and natural stone are excellent choices — both are moisture-resistant, durable, and low-maintenance. We help you select materials that perform well in the Peninsula climate for decades.',
  },
  {
    question: 'Do you offer a warranty on paver installations in San Mateo County?',
    answer:
      'Yes. Every paver installation across San Mateo County comes with our 10-year warranty covering both labor and materials. We stand behind our workmanship and use only premium-grade products from trusted manufacturers.',
  },
  {
    question: 'How long does a typical paver installation take?',
    answer:
      'Most residential paver projects — driveways, patios, or walkways — are completed in 1 to 2 weeks depending on size and complexity. We handle everything from demolition to final sealing. A detailed timeline is provided after your free on-site consultation.',
  },
  {
    question: 'Are pavers a good investment for San Mateo County homes?',
    answer:
      'Absolutely. Pavers increase curb appeal and property value in San Mateo County\'s competitive real estate market. They\'re more durable than concrete, require less maintenance, and can be individually replaced if damaged. With our 10-year warranty, it\'s a smart investment for any homeowner.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'TP Pavers - San Mateo County',
  description:
    'Professional paver installation across 10+ cities in San Mateo County. Driveways, patios, walkways, retaining walls & synthetic turf. 20+ years experience.',
  url: 'https://tppavers.com/san-mateo-county',
  telephone: '+1-510-650-0080',
  email: 'contact@tppavers.com',
  image: 'https://tppavers.com/images/P1.webp',
  logo: 'https://tppavers.com/images/P1.webp',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.56,
    longitude: -122.33,
  },
  areaServed: ALL_CITIES.map((name) => ({ '@type': 'City', name })),
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '50',
    bestRating: '5',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '07:00',
    closes: '18:00',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Paver Installation Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Paver Driveway Installation', description: 'Custom interlocking paver driveways for San Mateo County homes.' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Patio & Walkway Installation', description: 'Beautiful paver patios and walkways designed for outdoor living.' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Retaining Wall Construction', description: 'Structural and decorative retaining walls for sloped properties.' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Synthetic Turf Installation', description: 'Premium artificial turf for water-efficient, low-maintenance lawns.' },
      },
    ],
  },
};

export default function SanMateoCountyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* ═══ HERO ═══ */}
      <section
        id="home"
        className="relative min-h-[85vh] flex flex-col justify-center items-center pt-[100px] px-5 pb-10 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/P1.webp"
            alt="Professional paver installation in San Mateo County"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/65 z-[1]" />

        <div className="relative z-[2] text-center max-w-[900px] flex-grow flex flex-col justify-center items-center">
          <div className="inline-flex items-center gap-2 bg-brand-orange/90 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <MapPin size={16} /> Serving 10+ Cities in San Mateo County
          </div>
          <h1 className="font-oswald text-[2rem] sm:text-[3rem] lg:text-[4.5rem] font-bold text-white leading-[1.05] mb-5 uppercase tracking-[2px]">
            PROFESSIONAL PAVER<br />INSTALLATION IN<br />SAN MATEO COUNTY
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-[700px] mx-auto">
            Serving 10+ cities across San Mateo County&apos;s Peninsula.<br />
            Driveways, patios, walkways, retaining walls &amp; synthetic turf.
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
              Request a Quote <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <CallNowStrip />

      {/* ═══ CITIES GRID (desktop only) ═══ */}
      <section className="hidden md:block py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            SERVICE AREAS
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-4 leading-[1.2]">
            Cities We Serve in San Mateo County
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            From the coastal charm of Pacifica and Half Moon Bay to the vibrant communities of Redwood City and Burlingame, TP Pavers delivers expert paver installation across every corner of San Mateo County.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {CITIES_WITH_PAGES.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="group flex flex-col items-center justify-center p-5 rounded-xl bg-white border-2 border-brand-orange/20 hover:border-brand-orange hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <MapPin size={20} className="text-brand-orange mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-brand-black text-sm text-center">{city.name}</span>
                <span className="text-xs text-slate-500 mt-1">{city.tagline}</span>
                <span className="text-xs text-brand-orange font-semibold mt-2 flex items-center gap-1">
                  View Page <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INTERACTIVE MAP ═══ */}
      <DynamicServiceAreaMap />

      {/* ═══ SERVICES ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            OUR SERVICES
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-6 leading-[1.2]">
            Paver Services Across San Mateo County
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            From elegant driveways in Burlingame to coastal hardscapes in Half Moon Bay, we offer a full range of paver solutions tailored to San Mateo County homes.
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
                    alt={`${service.title} in San Mateo County, CA`}
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

      {/* ═══ STATS ═══ */}
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

      {/* ═══ PROJECT PHOTOS ═══ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            OUR WORK
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-10 leading-[1.2]">
            Recent Projects in San Mateo County
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: '/images/projects/walkway-brick-curved.webp', alt: 'Curved brick paver walkway in San Mateo County' },
              { src: '/images/projects/walkway-brick-wide.webp', alt: 'Red brick walkway with landscaping' },
              { src: '/images/projects/patio-retaining-wall.webp', alt: 'Paver patio with retaining wall' },
              { src: '/images/projects/patio-raised-house.webp', alt: 'Raised paver patio with seat wall' },
              { src: '/images/projects/walkway-herringbone.webp', alt: 'Herringbone pattern paver walkway' },
              { src: '/images/projects/team-working.webp', alt: 'TP Pavers team at work in San Mateo County' },
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

      {/* ═══ GALLERY ═══ */}
      <DynamicGallery />

      {/* ═══ FAQs ═══ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[900px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            FAQ
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-10 leading-[1.2]">
            Paver Installation in San Mateo County — Common Questions
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

      {/* ═══ CTA ═══ */}
      <section className="py-16 bg-brand-black">
        <div className="max-w-[800px] mx-auto px-5 text-center">
          <h2 className="text-[1.8rem] md:text-[2.2rem] font-bold text-white mb-4">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Get a free on-site estimate anywhere in San Mateo County. No obligation, no pressure.
          </p>
          <a
            href="tel:+15106500080"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-lg font-bold bg-brand-orange text-white hover:bg-brand-orange-dark transition-all duration-300 shadow-lg hover:-translate-y-0.5"
          >
            <Phone size={20} /> (510) 650-0080
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
