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
  title: 'Paver Installation in Tiburon, CA | TP Pavers',
  description: 'Professional paver installation in Tiburon, California. Driveways, patios, walkways, retaining walls & synthetic turf. 20+ years experience. 10-year warranty. Free estimates.',
  keywords: ['pavers tiburon', 'tiburon pavers', 'paver installation tiburon', 'paver contractor tiburon', 'driveway pavers tiburon ca', 'patio pavers tiburon', 'retaining wall tiburon', 'hardscape tiburon ca', 'paver driveway tiburon california', 'outdoor pavers tiburon'],
  openGraph: { title: 'Paver Installation in Tiburon, CA | TP Pavers', description: 'Expert paver installation in Tiburon. Driveways, patios, walkways & retaining walls. 20+ years experience. Free estimates.', url: 'https://tppavers.com/tiburon', siteName: 'TP Pavers', locale: 'en_US', type: 'website', images: [{ url: 'https://tppavers.com/images/P1.webp', width: 1200, height: 630, alt: 'Professional Paver Installation in Tiburon, California' }] },
  twitter: { card: 'summary_large_image', title: 'Paver Installation in Tiburon | TP Pavers', description: 'Expert paver installation in Tiburon, CA. Free estimates. 10-year warranty.', images: ['https://tppavers.com/images/P1.webp'] },
  alternates: { canonical: 'https://tppavers.com/tiburon' },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'TP Pavers - Tiburon',
  description: 'Professional paver installation, retaining walls, hardscape design and synthetic turf in Tiburon, California. 20+ years experience with 10-year warranty.',
  url: 'https://tppavers.com/tiburon', telephone: '+1-510-650-0080', email: 'contact@tppavers.com', image: 'https://tppavers.com/images/P1.webp',
  address: { '@type': 'PostalAddress', addressLocality: 'Tiburon', addressRegion: 'CA', postalCode: '94920', addressCountry: 'US' },
  geo: { '@type': 'GeoCoordinates', latitude: 37.8735, longitude: -122.4567 },
  areaServed: { '@type': 'City', name: 'Tiburon' }, priceRange: '$$',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: '15', bestRating: '5' },
};

const services = [
  { image: '/images/projects/driveway-multicolor.webp', title: 'Paver Driveways', description: 'Upgrade your Tiburon home with a custom interlocking paver driveway. Built to complement the peninsula\'s elegant homes in neighborhoods like Reed Heights, Bel Aire, and Paradise Cay.' },
  { image: '/images/projects/patio-raised-house.webp', title: 'Patios & Walkways', description: 'Design the perfect outdoor living space with panoramic bay and San Francisco views. From waterfront patios to garden walkways, we create hardscapes worthy of Tiburon\'s stunning setting.' },
  { image: '/images/projects/patio-retaining-wall.webp', title: 'Retaining Walls', description: 'Tiburon\'s hillside peninsula properties often require expert retaining wall solutions. Our walls prevent erosion, create terraced spaces, and maximize your outdoor living area with views.' },
  { image: '/images/S1.webp', title: 'Synthetic Turf', description: 'Save water and keep your Tiburon lawn green year-round. Our premium artificial turf is perfect for the coastal climate and Marin County\'s eco-conscious lifestyle.' },
];

const faqs = [
  { question: 'How much do pavers cost in Tiburon, CA?', answer: 'Paver installation costs in Tiburon depend on the project size, materials chosen, and site preparation needed. Given Tiburon\'s premium properties and hillside terrain, we provide free on-site estimates with transparent pricing tailored to your specific conditions.' },
  { question: 'What neighborhoods in Tiburon do you serve?', answer: 'We serve all of Tiburon including Belvedere border, Reed Heights, Bel Aire, and Paradise Cay. We also cover neighboring cities like Sausalito, Mill Valley, Corte Madera, and all of Marin County.' },
  { question: 'How long does a paver installation take in Tiburon?', answer: 'Most residential paver projects in Tiburon — driveways, patios, or walkways — are completed in 1 to 2 weeks depending on size and complexity. A detailed timeline is provided after your free consultation.' },
  { question: 'What paver materials work best for Tiburon\'s climate?', answer: 'Tiburon\'s coastal climate with bay breezes and moderate fog makes natural stone and premium concrete pavers excellent choices. Both are moisture-resistant, slip-resistant, and complement the peninsula\'s natural beauty for decades.' },
  { question: 'Do you offer a warranty on Tiburon paver installations?', answer: 'Yes. Every paver installation in Tiburon comes with our 10-year warranty covering both labor and materials. We stand behind the quality of our work and use only premium-grade products.' },
  { question: 'Can you work on waterfront properties in Tiburon?', answer: 'Absolutely. We have extensive experience with waterfront and hillside installations in Tiburon, including proper drainage, moisture management, and materials that withstand the marine environment beautifully.' },
];

const neighborhoods = ['Belvedere border', 'Reed Heights', 'Bel Aire', 'Paradise Cay'];
const zipCodes = ['94920'];

export default function TiburonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <section id="home" className="relative min-h-[85vh] flex flex-col justify-center items-center pt-[100px] px-5 pb-0 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <DynamicBeforeAfterSlider beforeSrc="/images/hero-before.jpg" afterSrc="/images/hero-after.jpg" beforeSrcMobile="/images/hero-before-mobile.jpg" afterSrcMobile="/images/hero-after-mobile.jpg" beforeAlt="Backyard before paver installation in Tiburon" afterAlt="Backyard after paver installation in Tiburon - beautiful patio" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[1] pointer-events-none" />
        <div className="relative z-[2] text-center max-w-[900px] flex-grow flex flex-col justify-center items-center pointer-events-none">
          <div className="inline-flex items-center gap-2 bg-brand-orange/90 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm"><MapPin size={16} /> Serving Tiburon, CA</div>
          <h1 className="font-oswald text-[2.2rem] sm:text-[3.5rem] lg:text-[5rem] font-bold text-white leading-[1.05] mb-5 uppercase tracking-[2px]">EXPERT PAVER<br />INSTALLATION<br />IN TIBURON</h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-[700px] mx-auto">Transform your outdoor spaces with premium paver installation.<br />Driveways, patios, walkways &amp; retaining walls.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
            <a href="tel:+15106500080" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-bold bg-brand-orange text-white hover:bg-brand-orange-dark transition-all duration-300 shadow-lg hover:-translate-y-0.5"><Phone size={20} /> Call for Free Estimate</a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-bold bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">Request a Quote <ArrowRight size={20} /></a>
          </div>
        </div>
        <div className="relative z-[2] mb-4 text-white/70 text-xs sm:text-sm font-medium animate-pulse pointer-events-none">← Drag to compare Before &amp; After →</div>
      </section>

      <CallNowStrip />

      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">TIBURON PAVERS</div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-6 leading-[1.2]">Why Tiburon Homeowners Trust TP Pavers</h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">Tiburon is one of Marin County\'s most prestigious communities — a scenic peninsula with panoramic views of San Francisco, Angel Island, and the Golden Gate Bridge. We design hardscapes that complement the elegance and natural beauty that make Tiburon so special.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="relative h-[220px] overflow-hidden">
                  <Image src={service.image} alt={`${service.title} in Tiburon, CA`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 text-xl font-bold text-white drop-shadow-lg">{service.title}</h3>
                </div>
                <div className="p-5"><p className="text-slate-600 text-sm leading-relaxed">{service.description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-brand-orange">
        <div className="max-w-[1100px] mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div><div className="text-3xl md:text-4xl font-bold mb-1">20+</div><div className="text-sm opacity-90">Years Experience</div></div>
          <div><div className="text-3xl md:text-4xl font-bold mb-1">500+</div><div className="text-sm opacity-90">Projects Completed</div></div>
          <div><div className="text-3xl md:text-4xl font-bold mb-1">10yr</div><div className="text-sm opacity-90">Warranty</div></div>
          <div><div className="text-3xl md:text-4xl font-bold mb-1">5★</div><div className="text-sm opacity-90">Customer Rating</div></div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">OUR WORK</div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-10 leading-[1.2]">Recent Paver Projects</h2>
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
                <Image src={photo.src} alt={photo.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">SERVICE AREA</div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-10 leading-[1.2]">Tiburon Neighborhoods We Serve</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {neighborhoods.map((hood) => (
              <span key={hood} className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-slate-50 rounded-full text-sm font-semibold text-brand-black border border-slate-200 hover:border-brand-orange transition-colors"><MapPin size={14} className="text-brand-orange" /> {hood}</span>
            ))}
          </div>
          <div className="text-center">
            <p className="text-slate-500 text-sm mb-2">ZIP Codes: {zipCodes.join(', ')}</p>
            <p className="text-slate-500 text-sm">Also serving: Sausalito, Mill Valley, Corte Madera &amp; surrounding Marin County areas</p>
          </div>
        </div>
      </section>

      <DynamicGallery />

      <section className="py-20 bg-slate-50">
        <div className="max-w-[900px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">FAQ</div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-10 leading-[1.2]">Paver Installation in Tiburon — Common Questions</h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border-2 border-brand-orange/20 rounded-xl overflow-hidden hover:border-brand-orange/40 transition-colors" {...(i === 0 ? { open: true } : {})}>
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer bg-white hover:bg-slate-50 transition-colors font-semibold text-brand-black text-[15px]">{faq.question}<CheckCircle size={18} className="text-brand-orange flex-shrink-0 ml-3" /></summary>
                <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-black">
        <div className="max-w-[800px] mx-auto px-5 text-center">
          <h2 className="text-[1.8rem] md:text-[2.2rem] font-bold text-white mb-4">Ready to Transform Your Tiburon Home?</h2>
          <p className="text-white/70 mb-8 text-lg">Get a free on-site estimate today. No obligation, no pressure.</p>
          <a href="tel:+15106500080" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-lg font-bold bg-brand-orange text-white hover:bg-brand-orange-dark transition-all duration-300 shadow-lg hover:-translate-y-0.5"><Phone size={20} /> (510) 650-0080</a>
        </div>
      </section>

      <DynamicServiceAreaMap />
      <Footer />
    </>
  );
}
