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
  title: 'Paver Installation in Menlo Park, CA | TP Pavers',
  description:
    'Professional paver installation in Menlo Park, California. Driveways, patios, walkways, retaining walls & synthetic turf. 20+ years experience. 10-year warranty. Free estimates. Serving all Menlo Park neighborhoods.',
  keywords: [
    'pavers menlo park',
    'menlo park pavers',
    'paver installation menlo park',
    'paver contractor menlo park',
    'driveway pavers menlo park ca',
    'patio pavers menlo park',
    'menlo park paver contractor',
    'pavers in menlo park ca',
    'retaining wall menlo park',
    'hardscape menlo park ca',
    'paver driveway menlo park california',
    'outdoor pavers menlo park',
  ],
  openGraph: {
    title: 'Paver Installation in Menlo Park, CA | TP Pavers',
    description:
      'Expert paver installation in Menlo Park. Driveways, patios, walkways & retaining walls. 20+ years experience. Free estimates.',
    url: 'https://tppavers.com/menlo-park',
    siteName: 'TP Pavers',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://tppavers.com/images/P1.webp',
        width: 1200,
        height: 630,
        alt: 'Professional Paver Installation in Menlo Park, California',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paver Installation in Menlo Park | TP Pavers',
    description: 'Expert paver installation in Menlo Park, CA. Free estimates. 10-year warranty.',
    images: ['https://tppavers.com/images/P1.webp'],
  },
  alternates: {
    canonical: 'https://tppavers.com/menlo-park',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'TP Pavers - Menlo Park',
  description:
    'Professional paver installation, retaining walls, hardscape design and synthetic turf in Menlo Park, California. 20+ years experience with 10-year warranty.',
  url: 'https://tppavers.com/menlo-park',
  telephone: '+1-510-650-2083',
  email: 'contact@tppavers.com',
  image: 'https://tppavers.com/images/P1.webp',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Menlo Park',
    addressRegion: 'CA',
    postalCode: '94025',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.453,
    longitude: -122.1817,
  },
  areaServed: {
    '@type': 'City',
    name: 'Menlo Park',
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
      'Make a statement with a custom paver driveway worthy of Menlo Park&apos;s prestigious homes. From the grand estates of Sharon Heights to the classic charm of Allied Arts, we create driveways that match the neighborhood&apos;s elegance.',
  },
  {
    image: '/images/projects/patio-raised-house.webp',
    title: 'Patios & Walkways',
    description:
      'Design the perfect outdoor entertaining space for Menlo Park&apos;s renowned year-round weather. Our patios and walkways complement the lush landscapes and mature oak trees that define this Silicon Valley community.',
  },
  {
    image: '/images/projects/patio-retaining-wall.webp',
    title: 'Retaining Walls',
    description:
      'From the gentle slopes of Felton Gables to the varied terrain throughout Menlo Park, our retaining walls provide structural integrity while adding architectural beauty to your landscape.',
  },
  {
    image: '/images/S1.webp',
    title: 'Synthetic Turf',
    description:
      'Maintain a pristine lawn in Menlo Park without the water waste. Our premium synthetic turf is perfect for the eco-conscious homeowner and provides a beautiful, low-maintenance alternative year-round.',
  },
];

const faqs = [
  {
    question: 'How much do pavers cost in Menlo Park, CA?',
    answer:
      'Paver installation costs in Menlo Park depend on the project size, materials chosen, and site preparation needed. Menlo Park homeowners typically invest in premium materials to complement their properties. We provide free on-site estimates with transparent pricing for every project.',
  },
  {
    question: 'What neighborhoods in Menlo Park do you serve?',
    answer:
      'We serve all of Menlo Park including Downtown Menlo Park, Belle Haven, Sharon Heights, The Willows, Felton Gables, and Allied Arts. We also serve neighboring Atherton, Palo Alto, Redwood City, and East Palo Alto.',
  },
  {
    question: 'How long does a paver installation take in Menlo Park?',
    answer:
      'Most residential paver projects in Menlo Park are completed in 1 to 2 weeks depending on size and complexity. We handle everything from demolition to final sealing and provide a detailed timeline after your free consultation.',
  },
  {
    question: 'What paver styles work best for Menlo Park homes?',
    answer:
      'Menlo Park&apos;s diverse architecture — from Spanish Colonial to modern Silicon Valley estates — pairs beautifully with a range of paver styles. Natural stone, tumbled pavers, and contemporary large-format options all work wonderfully. We help you select materials that complement your home&apos;s character.',
  },
  {
    question: 'Do you offer a warranty on Menlo Park paver installations?',
    answer:
      'Yes. Every paver installation in Menlo Park comes with our 10-year warranty covering both labor and materials. We stand behind the quality of our work and use only premium-grade products.',
  },
  {
    question: 'Can you work with my landscape architect in Menlo Park?',
    answer:
      'Absolutely. We frequently collaborate with landscape architects and designers throughout Menlo Park. Whether you have existing plans or need design guidance, we work seamlessly with your team to achieve exceptional results.',
  },
];

const neighborhoods = ['Downtown Menlo Park', 'Belle Haven', 'Sharon Heights', 'The Willows', 'Felton Gables', 'Allied Arts'];

const zipCodes = ['94025', '94026'];

export default function MenloParkPage() {
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
            beforeAlt="Backyard before paver installation in Menlo Park"
            afterAlt="Backyard after paver installation in Menlo Park - beautiful patio"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[1] pointer-events-none" />

        <div className="relative z-[2] text-center max-w-[900px] flex-grow flex flex-col justify-center items-center pointer-events-none">
          <div className="inline-flex items-center gap-2 bg-brand-orange/90 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <MapPin size={16} /> Serving Menlo Park, CA
          </div>
          <h1 className="font-oswald text-[2.2rem] sm:text-[3.5rem] lg:text-[5rem] font-bold text-white leading-[1.05] mb-5 uppercase tracking-[2px]">
            EXPERT PAVER<br />INSTALLATION<br />IN MENLO PARK
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
            MENLO PARK PAVERS
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-6 leading-[1.2]">
            Why Menlo Park Homeowners Trust TP Pavers
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            Menlo Park — the heart of Silicon Valley&apos;s venture capital corridor — is home to some of the Peninsula&apos;s most stunning properties. From the tree-canopied streets of The Willows to the grand estates of Sharon Heights, this community demands exceptional craftsmanship. We design hardscapes that honor Menlo Park&apos;s legacy of elegance and innovation.
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
                    alt={`${service.title} in Menlo Park, CA`}
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
            Menlo Park Neighborhoods We Serve
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
              Also serving: Atherton, Palo Alto, Redwood City, East Palo Alto &amp; surrounding Peninsula areas
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
            Paver Installation in Menlo Park — Common Questions
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
            Ready to Transform Your Menlo Park Home?
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