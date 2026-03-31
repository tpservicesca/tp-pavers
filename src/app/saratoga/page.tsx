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
  title: 'Paver Installation in Saratoga, CA | TP Pavers',
  description:
    'Professional paver installation in Saratoga, California. Driveways, patios, walkways, retaining walls & synthetic turf. 20+ years experience. 10-year warranty. Free estimates. Serving all Saratoga neighborhoods.',
  keywords: [
    'pavers saratoga',
    'saratoga pavers',
    'paver installation saratoga',
    'paver contractor saratoga',
    'driveway pavers saratoga ca',
    'patio pavers saratoga',
    'saratoga paver contractor',
    'pavers in saratoga ca',
    'retaining wall saratoga',
    'hardscape saratoga ca',
    'paver driveway saratoga california',
    'outdoor pavers saratoga',
  ],
  openGraph: {
    title: 'Paver Installation in Saratoga, CA | TP Pavers',
    description:
      'Expert paver installation in Saratoga. Driveways, patios, walkways & retaining walls. 20+ years experience. Free estimates.',
    url: 'https://tppavers.com/saratoga',
    siteName: 'TP Pavers',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://tppavers.com/images/P1.webp',
        width: 1200,
        height: 630,
        alt: 'Professional Paver Installation in Saratoga, California',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paver Installation in Saratoga | TP Pavers',
    description: 'Expert paver installation in Saratoga, CA. Free estimates. 10-year warranty.',
    images: ['https://tppavers.com/images/P1.webp'],
  },
  alternates: {
    canonical: 'https://tppavers.com/saratoga',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'TP Pavers - Saratoga',
  description:
    'Professional paver installation, retaining walls, hardscape design and synthetic turf in Saratoga, California. 20+ years experience with 10-year warranty.',
  url: 'https://tppavers.com/saratoga',
  telephone: '+1-510-650-2083',
  email: 'contact@tppavers.com',
  image: 'https://tppavers.com/images/P1.webp',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Saratoga',
    addressRegion: 'CA',
    postalCode: '95070',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.2638,
    longitude: -122.023,
  },
  areaServed: {
    '@type': 'City',
    name: 'Saratoga',
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
      'Make a grand entrance with a custom paver driveway worthy of Saratoga&apos;s estate-style homes. From the vineyard properties of Congress Springs to the wooded retreats of Saratoga Woods, we create driveways that reflect this city&apos;s refined elegance.',
  },
  {
    image: '/images/projects/patio-raised-house.webp',
    title: 'Patios & Walkways',
    description:
      'Saratoga&apos;s wine country ambiance and warm climate make it ideal for outdoor entertaining. Our custom patios and walkways are designed to complement the lush gardens and mature landscapes that define this prestigious foothill community.',
  },
  {
    image: '/images/projects/patio-retaining-wall.webp',
    title: 'Retaining Walls',
    description:
      'Saratoga&apos;s hillside terrain and generous lot sizes often call for retaining walls. We build structurally sound, visually stunning walls that manage slopes, create terraced gardens, and maximize usable outdoor space.',
  },
  {
    image: '/images/S1.webp',
    title: 'Synthetic Turf',
    description:
      'Maintain a picture-perfect lawn on your Saratoga estate without the water consumption. Our premium synthetic turf blends seamlessly with the natural beauty of the surrounding foothills and is perfect for families and outdoor entertaining.',
  },
];

const faqs = [
  {
    question: 'How much do pavers cost in Saratoga, CA?',
    answer:
      'Paver installation costs in Saratoga vary based on the project scope, premium materials chosen, and site preparation. Saratoga homeowners typically select high-end natural stone or custom paver designs. We provide free on-site estimates with detailed, transparent pricing.',
  },
  {
    question: 'What neighborhoods in Saratoga do you serve?',
    answer:
      'We serve all of Saratoga including Downtown Saratoga, Congress Springs, Saratoga Woods, Brookglen, Azule, and Golden Triangle. We also cover neighboring Los Gatos, Cupertino, Campbell, and Monte Sereno.',
  },
  {
    question: 'How long does a paver project take in Saratoga?',
    answer:
      'Most residential paver projects in Saratoga are completed in 1 to 3 weeks depending on the scope and complexity. Saratoga&apos;s larger lots often allow for more expansive designs. We provide a detailed timeline after your free consultation.',
  },
  {
    question: 'What paver styles complement Saratoga&apos;s architecture?',
    answer:
      'Saratoga&apos;s diverse architecture — from Mediterranean villas to contemporary estates — pairs beautifully with natural stone, travertine, and premium concrete pavers. We help you select materials that enhance your home&apos;s character and complement the surrounding foothill landscape.',
  },
  {
    question: 'Do you offer a warranty on Saratoga paver installations?',
    answer:
      'Yes. Every paver installation in Saratoga comes with our 10-year warranty covering both labor and materials. We stand behind the quality of our work and use only premium-grade products.',
  },
  {
    question: 'Can you create a wine country-style patio in Saratoga?',
    answer:
      'Absolutely. Saratoga&apos;s proximity to the Santa Cruz Mountains wine region inspires many homeowners to create Tuscan or vineyard-style outdoor spaces. We specialize in natural stone patios, rustic paver courtyards, and elegant entertaining areas that capture that wine country charm.',
  },
];

const neighborhoods = ['Downtown Saratoga', 'Congress Springs', 'Saratoga Woods', 'Brookglen', 'Azule', 'Golden Triangle'];

const zipCodes = ['95070', '95071'];

export default function SaratogaPage() {
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
            beforeAlt="Backyard before paver installation in Saratoga"
            afterAlt="Backyard after paver installation in Saratoga - beautiful patio"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[1] pointer-events-none" />

        <div className="relative z-[2] text-center max-w-[900px] flex-grow flex flex-col justify-center items-center pointer-events-none">
          <div className="inline-flex items-center gap-2 bg-brand-orange/90 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <MapPin size={16} /> Serving Saratoga, CA
          </div>
          <h1 className="font-oswald text-[2.2rem] sm:text-[3.5rem] lg:text-[5rem] font-bold text-white leading-[1.05] mb-5 uppercase tracking-[2px]">
            EXPERT PAVER<br />INSTALLATION<br />IN SARATOGA
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-[700px] mx-auto">
            Transform your outdoor spaces with premium paver installation.<br />
            Driveways, patios, walkways &amp; retaining walls.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
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

        <div className="relative z-[2] mb-4 text-white/70 text-xs sm:text-sm font-medium animate-pulse pointer-events-none">
          ← Drag to compare Before &amp; After →
        </div>
      </section>

      <CallNowStrip />

      {/* Services with Images */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            SARATOGA PAVERS
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-6 leading-[1.2]">
            Why Saratoga Homeowners Trust TP Pavers
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            Saratoga — nestled in the foothills of the Santa Cruz Mountains — is one of Silicon Valley&apos;s most exclusive communities, known for its wine country charm, sprawling estates, and Hakone Gardens. From the vineyard properties of Congress Springs to the wooded retreats along Saratoga Creek, we create hardscapes that honor this city&apos;s unique blend of luxury and natural beauty.
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
                    alt={`${service.title} in Saratoga, CA`}
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
            Saratoga Neighborhoods We Serve
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
              Also serving: Los Gatos, Cupertino, Campbell, Monte Sereno &amp; surrounding South Bay areas
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
            Paver Installation in Saratoga — Common Questions
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
            Ready to Transform Your Saratoga Home?
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

      <DynamicServiceAreaMap />
      <Footer />
    </>
  );
}