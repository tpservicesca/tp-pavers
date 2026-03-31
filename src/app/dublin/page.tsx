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
  title: 'Paver Installation in Dublin, CA | TP Pavers',
  description:
    'Professional paver installation in Dublin, California. Driveways, patios, walkways, retaining walls & synthetic turf. 20+ years experience. 10-year warranty. Free estimates. Serving Dublin Ranch, Emerald Glen & all Dublin neighborhoods.',
  keywords: [
    'pavers dublin',
    'dublin pavers',
    'paver installation dublin',
    'paver contractor dublin',
    'driveway pavers dublin ca',
    'patio pavers dublin',
    'dublin paver contractor',
    'pavers in dublin ca',
    'retaining wall dublin',
    'hardscape dublin ca',
    'paver installation near me',
    'pavers patio dublin',
  ],
  openGraph: {
    title: 'Paver Installation in Dublin, CA | TP Pavers',
    description:
      'Expert paver installation in Dublin. Driveways, patios, walkways & retaining walls. 20+ years experience. Free estimates.',
    url: 'https://tppavers.com/dublin',
    siteName: 'TP Pavers',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://tppavers.com/images/P1.webp',
        width: 1200,
        height: 630,
        alt: 'Professional Paver Installation in Dublin, California',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paver Installation in Dublin | TP Pavers',
    description: 'Expert paver installation in Dublin, CA. Free estimates. 10-year warranty.',
    images: ['https://tppavers.com/images/P1.webp'],
  },
  alternates: {
    canonical: 'https://tppavers.com/dublin',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'TP Pavers - Dublin',
  description:
    'Professional paver installation, retaining walls, hardscape design and synthetic turf in Dublin, California. 20+ years experience with 10-year warranty.',
  url: 'https://tppavers.com/dublin',
  telephone: '+1-510-650-0080',
  email: 'contact@tppavers.com',
  image: 'https://tppavers.com/images/P1.webp',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dublin',
    addressRegion: 'CA',
    postalCode: '94568',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.7022,
    longitude: -121.9358,
  },
  areaServed: {
    '@type': 'City',
    name: 'Dublin',
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
      'Upgrade your Dublin home with a custom interlocking paver driveway. Built to handle daily traffic and enhance curb appeal in fast-growing communities like Dublin Ranch, Fallon Village, and Jordan Ranch.',
  },
  {
    image: '/images/projects/patio-raised-house.webp',
    title: 'Patios & Walkways',
    description:
      'Design the perfect outdoor living space for Dublin\'s warm summers. From backyard pavers near Emerald Glen Park to elegant front walkways in Positano, we create durable and beautiful hardscapes for every home.',
  },
  {
    image: '/images/projects/patio-retaining-wall.webp',
    title: 'Retaining Walls',
    description:
      'Dublin Ranch\'s hilltop properties and sloped lots often require structural solutions. Our retaining walls prevent erosion and add stunning landscape tiers — perfect for homes with panoramic Tri-Valley views.',
  },
  {
    image: '/images/S1.webp',
    title: 'Synthetic Turf',
    description:
      'Save water and keep your Dublin lawn green year-round. Our premium artificial turf is perfect for families, pets, and the warm East Bay climate — great for BART commuters who want a low-maintenance yard.',
  },
];

const faqs = [
  {
    question: 'How much does paver installation cost in Dublin, CA?',
    answer:
      'Paver installation cost in Dublin varies based on project size, materials chosen, and site preparation needed. We provide free on-site estimates with transparent pricing. Many Dublin homeowners choose pavers over concrete for the superior aesthetics and long-term value.',
  },
  {
    question: 'What neighborhoods in Dublin do you serve?',
    answer:
      'We serve all Dublin neighborhoods including Dublin Ranch, Emerald Glen, Positano, Boulevard, Dublin Village, East Dublin, Fallon Village, and Jordan Ranch. We also cover Pleasanton, San Ramon, Livermore, and Castro Valley.',
  },
  {
    question: 'What backyard paver options work best for Dublin homes?',
    answer:
      'Popular backyard pavers in Dublin include concrete interlocking pavers in contemporary colors, natural stone, and porcelain pavers. Many Dublin Ranch and Fallon Village homeowners choose modern designs that complement their newer home styles and create seamless indoor-outdoor living.',
  },
  {
    question: 'Do you install driveway pavers near me in the Dublin area?',
    answer:
      'Yes! We are a local paver contractor serving all of Dublin and the Tri-Valley. Whether you need driveway pavers, patio pavers, or a complete hardscape transformation, our team provides free estimates throughout Dublin.',
  },
  {
    question: 'What warranty do you offer on Dublin paver installations?',
    answer:
      'Every paver installation in Dublin comes with our 10-year warranty covering both labor and materials. We use premium-grade products and engineered base preparation to ensure lasting results in Dublin\'s climate.',
  },
  {
    question: 'Can you upgrade the landscaping on my new Dublin construction home?',
    answer:
      'Absolutely. Dublin is one of the fastest-growing cities in the Tri-Valley, and many new homes in Jordan Ranch and Fallon Village come with basic landscaping. We specialize in transforming builder-grade yards into stunning outdoor spaces with custom paver patios, driveways, and walkways.',
  },
];

const neighborhoods = [
  'Dublin Ranch',
  'Emerald Glen',
  'Positano',
  'Boulevard',
  'Dublin Village',
  'East Dublin',
  'Fallon Village',
  'Jordan Ranch',
];

const zipCodes = ['94568'];

export default function DublinPage() {
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
            beforeAlt="Backyard before paver installation in Dublin"
            afterAlt="Backyard after paver installation in Dublin - beautiful patio"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[1] pointer-events-none" />

        <div className="relative z-[2] text-center max-w-[900px] flex-grow flex flex-col justify-center items-center pointer-events-none">
          <div className="inline-flex items-center gap-2 bg-brand-orange/90 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <MapPin size={16} /> Serving Dublin, CA
          </div>
          <h1 className="font-oswald text-[2.2rem] sm:text-[3.5rem] lg:text-[5rem] font-bold text-white leading-[1.05] mb-5 uppercase tracking-[2px]">
            EXPERT PAVER<br />INSTALLATION<br />IN DUBLIN
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
            DUBLIN PAVERS
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-6 leading-[1.2]">
            Why Dublin Homeowners Trust TP Pavers
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            Dublin is one of the Tri-Valley&apos;s fastest-growing cities — with BART access, stunning hilltop views from Dublin Ranch, and vibrant new communities like Fallon Village and Jordan Ranch. Whether you&apos;re upgrading a new build or refreshing an established home near Emerald Glen Park, we design hardscapes that make your property stand out.
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
                    alt={`${service.title} in Dublin, CA`}
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
            Dublin Neighborhoods We Serve
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
              Also serving: Pleasanton, San Ramon, Livermore, Castro Valley &amp; surrounding Tri-Valley areas
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
            Paver Installation in Dublin — Common Questions
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
            Ready to Transform Your Dublin Home?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Get a free on-site estimate today. No obligation, no pressure — serving all Dublin neighborhoods.
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
