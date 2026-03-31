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
  title: 'Paver Installation in Santa Clara County, CA | TP Pavers',
  description:
    'Professional paver installation across 8+ cities in Santa Clara County. Driveways, patios, walkways, retaining walls & synthetic turf. 20+ years experience, 10-year warranty. Serving San Jose, Sunnyvale, Cupertino, Mountain View & more. Call (510) 650-0080.',
  keywords: [
    'pavers santa clara county',
    'paver contractor santa clara county',
    'paver installation santa clara county',
    'driveway pavers santa clara county',
    'patio pavers santa clara county',
    'hardscape contractor santa clara county',
    'retaining wall santa clara county',
    'synthetic turf santa clara county',
    'concrete pavers santa clara county',
    'walkway pavers santa clara county ca',
    'outdoor pavers santa clara county ca',
    'paver company santa clara county',
    'best paver contractor santa clara county',
    'interlocking pavers santa clara county',
    'pavers san jose',
    'hardscape san jose',
    'pavers sunnyvale',
  ],
  openGraph: {
    title: 'Paver Installation in Santa Clara County, CA | TP Pavers',
    description:
      'Serving 8+ cities across Santa Clara County & Silicon Valley. Premium paver installation for driveways, patios, walkways & retaining walls. 20+ years experience. Free estimates.',
    url: 'https://tppavers.com/santa-clara-county',
    siteName: 'TP Pavers',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://tppavers.com/images/P1.webp',
        width: 1200,
        height: 630,
        alt: 'Professional Paver Installation in Santa Clara County, California',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paver Installation in Santa Clara County | TP Pavers',
    description:
      'Expert paver installation across Santa Clara County & Silicon Valley. 8+ cities served. Free estimates. 10-year warranty.',
    images: ['https://tppavers.com/images/P1.webp'],
  },
  alternates: {
    canonical: 'https://tppavers.com/santa-clara-county',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
};

const CITIES_WITH_PAGES = [
  { name: 'San Jose', slug: 'san-jose', tagline: 'Capital of Silicon Valley' },
  { name: 'Sunnyvale', slug: 'sunnyvale', tagline: 'Heart of the Valley' },
  { name: 'Santa Clara', slug: 'santa-clara-city', tagline: 'Mission City' },
  { name: 'Mountain View', slug: 'mountain-view', tagline: 'Tech Hub' },
  { name: 'Milpitas', slug: 'milpitas', tagline: 'Crossroads City' },
  { name: 'Cupertino', slug: 'cupertino', tagline: 'Top-Rated Schools' },
  { name: 'Campbell', slug: 'campbell', tagline: 'Downtown Charm' },
  { name: 'Los Gatos', slug: 'los-gatos', tagline: 'Hillside Luxury' },
  { name: 'Palo Alto', slug: 'palo-alto', tagline: 'Birthplace of Silicon Valley' },
  { name: 'Saratoga', slug: 'saratoga', tagline: 'Wine Country Estates' },
  { name: 'Morgan Hill', slug: 'morgan-hill', tagline: 'South Valley Charm' },
  { name: 'Gilroy', slug: 'gilroy', tagline: 'Garlic Capital' },
];

const ALL_CITIES = CITIES_WITH_PAGES.map((c) => c.name);

const services = [
  {
    image: '/images/projects/driveway-multicolor.webp',
    title: 'Paver Driveways',
    description:
      'Upgrade your Santa Clara County home with a custom interlocking paver driveway. Durable, beautiful, and built to handle daily traffic across every Silicon Valley neighborhood.',
  },
  {
    image: '/images/projects/patio-curved-seatwall.webp',
    title: 'Patios & Walkways',
    description:
      'Design the perfect outdoor living space for Santa Clara County\'s warm, sunny climate. From backyard patios to front walkways, we create hardscapes that maximize your outdoor enjoyment year-round.',
  },
  {
    image: '/images/R2.webp',
    title: 'Retaining Walls',
    description:
      'Santa Clara County\'s varied terrain — from valley floors to foothill properties — often requires structural solutions. Our retaining walls prevent erosion, add usable space, and create stunning landscape tiers.',
  },
  {
    image: '/images/S1.webp',
    title: 'Synthetic Turf',
    description:
      'Save water and keep your lawn green year-round. Our premium artificial turf is perfect for families, pets, and California\'s drought-conscious lifestyle throughout Silicon Valley.',
  },
];

const faqs = [
  {
    question: 'How much do pavers cost in Santa Clara County?',
    answer:
      'Paver installation costs in Santa Clara County depend on project size, materials chosen, and site preparation needed. We provide free on-site estimates with transparent pricing for driveways, patios, walkways, and retaining walls. Most Silicon Valley homeowners find pavers offer excellent long-term value compared to poured concrete.',
  },
  {
    question: 'What cities in Santa Clara County do you serve?',
    answer:
      'We serve all major cities across Santa Clara County, including San Jose, Sunnyvale, Santa Clara, Mountain View, Milpitas, Cupertino, Campbell, Los Gatos, Saratoga, and surrounding communities throughout Silicon Valley.',
  },
  {
    question: 'What paver materials work best for Santa Clara County\'s climate?',
    answer:
      'Santa Clara County enjoys a warm, dry Mediterranean climate with over 300 days of sunshine. Concrete pavers and natural stone are excellent choices — both are heat-resistant, durable, and low-maintenance. We help you select materials that perform beautifully in Silicon Valley\'s sunny climate for decades.',
  },
  {
    question: 'Do you offer a warranty on paver installations in Santa Clara County?',
    answer:
      'Yes. Every paver installation across Santa Clara County comes with our 10-year warranty covering both labor and materials. We stand behind our workmanship and use only premium-grade products from trusted manufacturers.',
  },
  {
    question: 'How long does a typical paver installation take?',
    answer:
      'Most residential paver projects — driveways, patios, or walkways — are completed in 1 to 2 weeks depending on size and complexity. We handle everything from demolition to final sealing. A detailed timeline is provided after your free on-site consultation.',
  },
  {
    question: 'Are pavers a good investment for Santa Clara County homes?',
    answer:
      'Absolutely. Pavers increase curb appeal and property value in Santa Clara County\'s competitive real estate market — one of the most valuable in the nation. They\'re more durable than concrete, require less maintenance, and can be individually replaced if damaged. With our 10-year warranty, it\'s a smart investment for any homeowner.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'TP Pavers - Santa Clara County',
  description:
    'Professional paver installation across 8+ cities in Santa Clara County & Silicon Valley. Driveways, patios, walkways, retaining walls & synthetic turf. 20+ years experience.',
  url: 'https://tppavers.com/santa-clara-county',
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
    latitude: 37.35,
    longitude: -121.95,
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
        itemOffered: { '@type': 'Service', name: 'Paver Driveway Installation', description: 'Custom interlocking paver driveways for Santa Clara County homes.' },
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

export default function SantaClaraCountyPage() {
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
            alt="Professional paver installation in Santa Clara County"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/65 z-[1]" />

        <div className="relative z-[2] text-center max-w-[900px] flex-grow flex flex-col justify-center items-center">
          <div className="inline-flex items-center gap-2 bg-brand-orange/90 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <MapPin size={16} /> Serving 8+ Cities in Santa Clara County
          </div>
          <h1 className="font-oswald text-[2rem] sm:text-[3rem] lg:text-[4.5rem] font-bold text-white leading-[1.05] mb-5 uppercase tracking-[2px]">
            PROFESSIONAL PAVER<br />INSTALLATION IN<br />SANTA CLARA COUNTY
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-[700px] mx-auto">
            Serving 8+ cities across Santa Clara County &amp; Silicon Valley.<br />
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
            Cities We Serve in Santa Clara County
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            From the sprawling neighborhoods of San Jose to the hillside luxury of Los Gatos, TP Pavers delivers expert paver installation across every corner of Santa Clara County and Silicon Valley.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
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
            Paver Services Across Santa Clara County
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            From elegant driveways in Los Gatos to modern patios in Sunnyvale, we offer a full range of hardscape solutions tailored to Silicon Valley homes.
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
                    alt={`${service.title} in Santa Clara County, CA`}
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
            Recent Projects in Santa Clara County
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: '/images/projects/walkway-brick-curved.webp', alt: 'Curved brick paver walkway in Santa Clara County' },
              { src: '/images/projects/walkway-brick-wide.webp', alt: 'Red brick walkway with landscaping' },
              { src: '/images/projects/patio-retaining-wall.webp', alt: 'Paver patio with retaining wall' },
              { src: '/images/projects/patio-raised-house.webp', alt: 'Raised paver patio with seat wall' },
              { src: '/images/projects/walkway-herringbone.webp', alt: 'Herringbone pattern paver walkway' },
              { src: '/images/projects/team-working.webp', alt: 'TP Pavers team at work in Santa Clara County' },
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
            Paver Installation in Santa Clara County — Common Questions
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
            Get a free on-site estimate anywhere in Santa Clara County. No obligation, no pressure.
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
