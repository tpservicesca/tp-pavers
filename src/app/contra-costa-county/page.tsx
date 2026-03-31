import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallNowStrip from '@/components/CallNowStrip';
import DynamicServiceAreaMap from '@/components/DynamicServiceAreaMap';
import DynamicGallery from '@/components/DynamicGallery';
import { MapPin, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// ── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Paver Installation in Contra Costa County, CA | TP Pavers',
  description:
    'Professional paver installation across 25+ cities in Contra Costa County. Driveways, patios, walkways, retaining walls & synthetic turf. 20+ years experience, 10-year warranty. Serving Concord, Walnut Creek, Danville, San Ramon & more. Call (510) 650-0080.',
  keywords: [
    'pavers contra costa county',
    'paver contractor contra costa',
    'paver installation contra costa county',
    'driveway pavers contra costa county',
    'patio pavers contra costa',
    'hardscape contractor contra costa county',
    'retaining wall contra costa county',
    'synthetic turf contra costa county',
    'concrete pavers contra costa',
    'walkway pavers contra costa ca',
    'outdoor pavers contra costa county ca',
    'paver company contra costa county',
    'best paver contractor contra costa',
    'interlocking pavers contra costa county',
  ],
  openGraph: {
    title: 'Paver Installation in Contra Costa County, CA | TP Pavers',
    description:
      'Serving 25+ cities across Contra Costa County. Premium paver installation for driveways, patios, walkways & retaining walls. 20+ years experience. Free estimates.',
    url: 'https://tppavers.com/contra-costa-county',
    siteName: 'TP Pavers',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://tppavers.com/images/P1.webp',
        width: 1200,
        height: 630,
        alt: 'Professional Paver Installation in Contra Costa County, California',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paver Installation in Contra Costa County | TP Pavers',
    description:
      'Expert paver installation across Contra Costa County. 25+ cities served. Free estimates. 10-year warranty.',
    images: ['https://tppavers.com/images/P1.webp'],
  },
  alternates: {
    canonical: 'https://tppavers.com/contra-costa-county',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
};

// ── City Data ───────────────────────────────────────────────────────────────
const CITIES_WITH_PAGES = [
  { name: 'Concord', slug: 'concord', tagline: 'Largest City' },
  { name: 'Danville', slug: 'danville', tagline: 'Historic Town' },
  { name: 'Alamo', slug: 'alamo', tagline: 'San Ramon Valley' },
  { name: 'Walnut Creek', slug: 'walnut-creek', tagline: 'Downtown Hub' },
  { name: 'San Ramon', slug: 'san-ramon', tagline: 'Tri-Valley' },
  { name: 'Pleasant Hill', slug: 'pleasant-hill', tagline: 'Central County' },
  { name: 'Martinez', slug: 'martinez', tagline: 'County Seat' },
  { name: 'Pittsburg', slug: 'pittsburg', tagline: 'Delta Gateway' },
  { name: 'Antioch', slug: 'antioch', tagline: 'East County' },
  { name: 'Brentwood', slug: 'brentwood', tagline: 'Growing Community' },
  { name: 'Oakley', slug: 'oakley', tagline: 'East County' },
  { name: 'Clayton', slug: 'clayton', tagline: 'Mt. Diablo Foothills' },
  { name: 'Lafayette', slug: 'lafayette', tagline: 'Lamorinda' },
  { name: 'Orinda', slug: 'orinda', tagline: 'Lamorinda' },
  { name: 'Moraga', slug: 'moraga', tagline: 'Lamorinda' },
  { name: 'El Cerrito', slug: 'el-cerrito', tagline: 'West County' },
  { name: 'Richmond', slug: 'richmond', tagline: 'West County' },
  { name: 'San Pablo', slug: 'san-pablo', tagline: 'West County' },
  { name: 'Pinole', slug: 'pinole', tagline: 'North County' },
  { name: 'Hercules', slug: 'hercules', tagline: 'Waterfront City' },
  { name: 'El Sobrante', slug: 'el-sobrante', tagline: 'West County' },
  { name: 'Bay Point', slug: 'bay-point', tagline: 'Central County' },
  { name: 'Discovery Bay', slug: 'discovery-bay', tagline: 'Delta Community' },
  { name: 'Rodeo', slug: 'rodeo', tagline: 'North County' },
  { name: 'Crockett', slug: 'crockett', tagline: 'Carquinez Strait' },
  { name: 'Kensington', slug: 'kensington', tagline: 'West County' },
];

const CITIES_WITHOUT_PAGES = [
  { name: 'Pacheco', tagline: 'Central County' },
  { name: 'Port Costa', tagline: 'Carquinez Strait' },
];

const ALL_CITIES = [
  ...CITIES_WITH_PAGES.map((c) => c.name),
  ...CITIES_WITHOUT_PAGES.map((c) => c.name),
];

// ── Services ────────────────────────────────────────────────────────────────
const services = [
  {
    image: '/images/projects/driveway-multicolor.webp',
    title: 'Paver Driveways',
    description:
      'Upgrade your Contra Costa County home with a custom interlocking paver driveway. Durable, beautiful, and built to handle daily traffic across every neighborhood.',
  },
  {
    image: '/images/projects/patio-curved-seatwall.webp',
    title: 'Patios & Walkways',
    description:
      'Design the perfect outdoor living space for Contra Costa County\'s warm Mediterranean climate. From backyard patios to front walkways, we create hardscapes that last.',
  },
  {
    image: '/images/R2.webp',
    title: 'Retaining Walls',
    description:
      'Contra Costa County\'s hilly terrain often requires structural solutions. Our retaining walls prevent erosion, add usable space, and create stunning landscape tiers.',
  },
  {
    image: '/images/S1.webp',
    title: 'Synthetic Turf',
    description:
      'Save water and keep your lawn green year-round. Our premium artificial turf is perfect for families, pets, and California\'s drought-conscious lifestyle.',
  },
];

// ── FAQs ────────────────────────────────────────────────────────────────────
const faqs = [
  {
    question: 'How much do pavers cost in Contra Costa County?',
    answer:
      'Paver installation costs in Contra Costa County depend on project size, materials chosen, and site preparation needed. We provide free on-site estimates with transparent pricing for driveways, patios, walkways, and retaining walls. Most homeowners find pavers offer excellent long-term value compared to poured concrete.',
  },
  {
    question: 'What cities in Contra Costa County do you serve?',
    answer:
      'We serve all 25+ cities and communities across Contra Costa County, including Concord, Walnut Creek, Danville, San Ramon, Alamo, Pleasant Hill, Martinez, Lafayette, Orinda, Moraga, Richmond, Antioch, Pittsburg, Brentwood, Oakley, Clayton, El Cerrito, Pinole, Hercules, and many more.',
  },
  {
    question: 'What paver materials work best for Contra Costa County\'s climate?',
    answer:
      'Contra Costa County experiences hot, dry summers and mild, wet winters. Concrete pavers and natural stone are excellent choices — both are heat-resistant, freeze-thaw durable, and low-maintenance. We help you select materials that perform well and look beautiful in the East Bay climate for decades.',
  },
  {
    question: 'Do you offer a warranty on paver installations in Contra Costa County?',
    answer:
      'Yes. Every paver installation across Contra Costa County comes with our 10-year warranty covering both labor and materials. We stand behind our workmanship and use only premium-grade products from trusted manufacturers.',
  },
  {
    question: 'How long does a typical paver installation take?',
    answer:
      'Most residential paver projects — driveways, patios, or walkways — are completed in 1 to 2 weeks depending on size and complexity. We handle everything from demolition to final sealing. A detailed timeline is provided after your free on-site consultation.',
  },
  {
    question: 'Are pavers a good investment for Contra Costa County homes?',
    answer:
      'Absolutely. Pavers increase curb appeal and property value in Contra Costa County\'s competitive real estate market. They\'re more durable than concrete, require less maintenance, and can be individually replaced if damaged. With our 10-year warranty, it\'s a smart investment for any homeowner.',
  },
];

// ── JSON-LD ─────────────────────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'TP Pavers - Contra Costa County',
  description:
    'Professional paver installation across 25+ cities in Contra Costa County. Driveways, patios, walkways, retaining walls & synthetic turf. 20+ years experience.',
  url: 'https://tppavers.com/contra-costa-county',
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
    latitude: 37.9,
    longitude: -122.0,
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
        itemOffered: { '@type': 'Service', name: 'Paver Driveway Installation', description: 'Custom interlocking paver driveways for Contra Costa County homes.' },
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



// ── Page Component ──────────────────────────────────────────────────────────
export default function ContraCostaCountyPage() {
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
            alt="Professional paver installation in Contra Costa County"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/65 z-[1]" />

        <div className="relative z-[2] text-center max-w-[900px] flex-grow flex flex-col justify-center items-center">
          <div className="inline-flex items-center gap-2 bg-brand-orange/90 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <MapPin size={16} /> Serving 25+ Cities in Contra Costa County
          </div>
          <h1 className="font-oswald text-[2rem] sm:text-[3rem] lg:text-[4.5rem] font-bold text-white leading-[1.05] mb-5 uppercase tracking-[2px]">
            PROFESSIONAL PAVER<br />INSTALLATION IN<br />CONTRA COSTA COUNTY
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-[700px] mx-auto">
            Serving 25+ cities across Contra Costa County.<br />
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
            Cities We Serve in Contra Costa County
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            From the hills of Danville to the waterfront communities of Richmond and Hercules, TP Pavers delivers expert paver installation across every corner of Contra Costa County.
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
            {CITIES_WITHOUT_PAGES.map((city) => (
              <div
                key={city.name}
                className="flex flex-col items-center justify-center p-5 rounded-xl bg-slate-50 border border-slate-200 transition-all duration-300"
              >
                <MapPin size={20} className="text-slate-400 mb-2" />
                <span className="font-bold text-brand-black text-sm text-center">{city.name}</span>
                <span className="text-xs text-slate-500 mt-1">{city.tagline}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INTERACTIVE MAP (existing component) ═══ */}
      <DynamicServiceAreaMap />

      {/* ═══ SERVICES ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            OUR SERVICES
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-6 leading-[1.2]">
            Paver Services Across Contra Costa County
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            From elegant driveways in Danville to functional retaining walls in the hills of Orinda, we offer a full range of hardscape solutions tailored to Contra Costa County homes.
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
                    alt={`${service.title} in Contra Costa County, CA`}
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
            Recent Projects in Contra Costa County
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: '/images/projects/walkway-brick-curved.webp', alt: 'Curved brick paver walkway in Contra Costa County' },
              { src: '/images/projects/walkway-brick-wide.webp', alt: 'Red brick walkway with landscaping' },
              { src: '/images/projects/patio-retaining-wall.webp', alt: 'Paver patio with retaining wall' },
              { src: '/images/projects/patio-raised-house.webp', alt: 'Raised paver patio with seat wall' },
              { src: '/images/projects/walkway-herringbone.webp', alt: 'Herringbone pattern paver walkway' },
              { src: '/images/projects/team-working.webp', alt: 'TP Pavers team at work in Contra Costa County' },
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
            Paver Installation in Contra Costa County — Common Questions
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
            Get a free on-site estimate anywhere in Contra Costa County. No obligation, no pressure.
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
