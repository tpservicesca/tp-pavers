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
  title: 'Paver Installation in Fairfax, CA | TP Pavers',
  description: 'Professional paver installation in Fairfax, California. Driveways, patios, walkways, retaining walls & synthetic turf. 20+ years experience. 10-year warranty. Free estimates.',
  keywords: ['pavers fairfax', 'fairfax pavers', 'paver installation fairfax', 'paver contractor fairfax', 'driveway pavers fairfax ca', 'patio pavers fairfax', 'retaining wall fairfax', 'hardscape fairfax ca', 'paver driveway fairfax california', 'outdoor pavers fairfax'],
  openGraph: { title: 'Paver Installation in Fairfax, CA | TP Pavers', description: 'Expert paver installation in Fairfax. Driveways, patios, walkways & retaining walls. 20+ years experience. Free estimates.', url: 'https://tppavers.com/fairfax', siteName: 'TP Pavers', locale: 'en_US', type: 'website', images: [{ url: 'https://tppavers.com/images/P1.webp', width: 1200, height: 630, alt: 'Professional Paver Installation in Fairfax, California' }] },
  twitter: { card: 'summary_large_image', title: 'Paver Installation in Fairfax | TP Pavers', description: 'Expert paver installation in Fairfax, CA. Free estimates. 10-year warranty.', images: ['https://tppavers.com/images/P1.webp'] },
  alternates: { canonical: 'https://tppavers.com/fairfax' },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'TP Pavers - Fairfax',
  description: 'Professional paver installation, retaining walls, hardscape design and synthetic turf in Fairfax, California. 20+ years experience with 10-year warranty.',
  url: 'https://tppavers.com/fairfax', telephone: '+1-510-650-0080', email: 'contact@tppavers.com', image: 'https://tppavers.com/images/P1.webp',
  address: { '@type': 'PostalAddress', addressLocality: 'Fairfax', addressRegion: 'CA', postalCode: '94930', addressCountry: 'US' },
  geo: { '@type': 'GeoCoordinates', latitude: 37.9871, longitude: -122.5889 },
  areaServed: { '@type': 'City', name: 'Fairfax' }, priceRange: '$$',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: '15', bestRating: '5' },
};

const services = [
  { image: '/images/projects/driveway-multicolor.webp', title: 'Paver Driveways', description: 'Upgrade your Fairfax home with a custom interlocking paver driveway. Built to enhance curb appeal in neighborhoods like Manor, Downtown, and Cascade Canyon.' },
  { image: '/images/projects/patio-raised-house.webp', title: 'Patios & Walkways', description: 'Design the perfect outdoor living space for Fairfax\'s natural, wooded setting. From backyard patios to garden walkways, we create hardscapes that blend beautifully with nature.' },
  { image: '/images/projects/patio-retaining-wall.webp', title: 'Retaining Walls', description: 'Fairfax\'s canyon and hillside properties often require structural solutions. Our retaining walls prevent erosion and create stunning, usable outdoor terraces on sloped lots.' },
  { image: '/images/S1.webp', title: 'Synthetic Turf', description: 'Save water and keep your Fairfax lawn green year-round. Our premium artificial turf is perfect for families, pets, and Marin County\'s eco-conscious lifestyle.' },
];

const faqs = [
  { question: 'How much do pavers cost in Fairfax, CA?', answer: 'Paver installation costs in Fairfax depend on the project size, materials chosen, and site preparation needed. We provide free on-site estimates with transparent pricing. Most Fairfax homeowners find pavers offer outstanding long-term value.' },
  { question: 'What neighborhoods in Fairfax do you serve?', answer: 'We serve all of Fairfax including Downtown, Manor, Cascade Canyon, and Bothin Marsh border areas. We also cover neighboring cities like San Anselmo, San Rafael, Ross, and all of Marin County.' },
  { question: 'How long does a paver installation take in Fairfax?', answer: 'Most residential paver projects in Fairfax — driveways, patios, or walkways — are completed in 1 to 2 weeks depending on size and complexity. A detailed timeline is provided after your free consultation.' },
  { question: 'What paver materials work best for Fairfax\'s climate?', answer: 'Fairfax enjoys a mild climate with shaded, wooded lots. Natural stone and concrete pavers are excellent choices — both handle moisture well, are slip-resistant, and complement the natural forest setting beautifully.' },
  { question: 'Do you offer a warranty on Fairfax paver installations?', answer: 'Yes. Every paver installation in Fairfax comes with our 10-year warranty covering both labor and materials. We stand behind the quality of our work and use only premium-grade products.' },
  { question: 'Can you work on canyon properties in Fairfax?', answer: 'Absolutely. Many Fairfax properties are nestled in canyons and on wooded hillsides. We have extensive experience with challenging terrain, proper drainage, and materials that complement the natural surroundings.' },
];

const neighborhoods = ['Downtown', 'Manor', 'Cascade Canyon', 'Bothin Marsh border'];
const zipCodes = ['94930'];

export default function FairfaxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <section id="home" className="relative min-h-[85vh] flex flex-col justify-center items-center pt-[100px] px-5 pb-0 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <DynamicBeforeAfterSlider beforeSrc="/images/hero-before.jpg" afterSrc="/images/hero-after.jpg" beforeSrcMobile="/images/hero-before-mobile.jpg" afterSrcMobile="/images/hero-after-mobile.jpg" beforeAlt="Backyard before paver installation in Fairfax" afterAlt="Backyard after paver installation in Fairfax - beautiful patio" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-[1] pointer-events-none" />
        <div className="relative z-[2] text-center max-w-[900px] flex-grow flex flex-col justify-center items-center pointer-events-none">
          <div className="inline-flex items-center gap-2 bg-brand-orange/90 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm"><MapPin size={16} /> Serving Fairfax, CA</div>
          <h1 className="font-oswald text-[2.2rem] sm:text-[3.5rem] lg:text-[5rem] font-bold text-white leading-[1.05] mb-5 uppercase tracking-[2px]">EXPERT PAVER<br />INSTALLATION<br />IN FAIRFAX</h1>
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
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">FAIRFAX PAVERS</div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-6 leading-[1.2]">Why Fairfax Homeowners Trust TP Pavers</h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">Fairfax is Marin County\'s most bohemian and nature-loving community — nestled in the western Ross Valley with redwood canyons, hiking trails, and an independent spirit. We design hardscapes that respect the natural beauty while adding lasting value and functionality to your property.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="relative h-[220px] overflow-hidden">
                  <Image src={service.image} alt={`${service.title} in Fairfax, CA`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
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
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-10 leading-[1.2]">Fairfax Neighborhoods We Serve</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {neighborhoods.map((hood) => (
              <span key={hood} className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-slate-50 rounded-full text-sm font-semibold text-brand-black border border-slate-200 hover:border-brand-orange transition-colors"><MapPin size={14} className="text-brand-orange" /> {hood}</span>
            ))}
          </div>
          <div className="text-center">
            <p className="text-slate-500 text-sm mb-2">ZIP Codes: {zipCodes.join(', ')}</p>
            <p className="text-slate-500 text-sm">Also serving: San Anselmo, San Rafael, Ross &amp; surrounding Marin County areas</p>
          </div>
        </div>
      </section>

      <DynamicGallery />

      <section className="py-20 bg-slate-50">
        <div className="max-w-[900px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">FAQ</div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-10 leading-[1.2]">Paver Installation in Fairfax — Common Questions</h2>
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
          <h2 className="text-[1.8rem] md:text-[2.2rem] font-bold text-white mb-4">Ready to Transform Your Fairfax Home?</h2>
          <p className="text-white/70 mb-8 text-lg">Get a free on-site estimate today. No obligation, no pressure.</p>
          <a href="tel:+15106500080" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-lg font-bold bg-brand-orange text-white hover:bg-brand-orange-dark transition-all duration-300 shadow-lg hover:-translate-y-0.5"><Phone size={20} /> (510) 650-0080</a>
        </div>
      </section>

      <DynamicServiceAreaMap />
      <Footer />
    </>
  );
}
