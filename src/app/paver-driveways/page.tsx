import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallNowStrip from '@/components/CallNowStrip';
import DynamicServiceAreaMap from '@/components/DynamicServiceAreaMap';
import DynamicGallery from '@/components/DynamicGallery';
import { MapPin, Phone, CheckCircle, ArrowRight, Shield, Droplets, Timer, Ruler } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Paver Driveway Installation in California | Expert Contractors | TP Pavers',
  description:
    'Professional paver driveway installation in California. Interlocking pavers, brick, natural stone & permeable driveways. 20+ years experience. Free estimates. Lifetime guarantee.',
  keywords: [
    'paver driveway installation',
    'paver driveway cost',
    'interlocking pavers driveway',
    'stone paver driveway',
    'driveway pavers near me',
    'paver driveway contractors',
    'brick driveway installation',
    'permeable paver driveway',
    'driveway paver design',
    'concrete paver driveway',
    'driveway pavers california',
    'custom paver driveway',
    'paver driveway replacement',
    'interlocking driveway pavers cost',
  ],
  openGraph: {
    title: 'Paver Driveway Installation in California | TP Pavers',
    description:
      'Expert paver driveway installation. Interlocking, brick, natural stone & permeable driveways. 20+ years experience. Free estimates.',
    url: 'https://tppavers.com/paver-driveways',
    siteName: 'TP Pavers',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://tppavers.com/images/projects/driveway-multicolor.webp',
        width: 1200,
        height: 630,
        alt: 'Professional Paver Driveway Installation in California',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paver Driveway Installation | TP Pavers California',
    description: 'Expert paver driveway installation. Interlocking, brick & stone pavers. Free estimates.',
    images: ['https://tppavers.com/images/projects/driveway-multicolor.webp'],
  },
  alternates: {
    canonical: 'https://tppavers.com/paver-driveways',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Paver Driveway Installation',
  provider: {
    '@type': 'LocalBusiness',
    name: 'TP Pavers',
    telephone: '+1-510-650-0080',
    url: 'https://tppavers.com',
    image: 'https://tppavers.com/images/projects/driveway-multicolor.webp',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '15',
      bestRating: '5',
    },
  },
  description:
    'Professional paver driveway installation in California. Interlocking pavers, brick, natural stone, and permeable driveways with lifetime guarantee.',
  areaServed: {
    '@type': 'State',
    name: 'California',
  },
  serviceType: 'Paver Driveway Installation',
  url: 'https://tppavers.com/paver-driveways',
};

const paverTypes = [
  {
    title: 'Interlocking Pavers',
    description: 'The most popular choice for driveways. Interlocking pavers create an incredibly strong surface that distributes weight evenly, preventing cracking and shifting. Available in dozens of shapes, colors, and patterns.',
    icon: <Shield size={28} className="text-brand-orange" />,
  },
  {
    title: 'Brick Pavers',
    description: 'Classic and timeless, brick pavers bring a warm, traditional aesthetic to your driveway. Extremely durable with natural color that won\'t fade over time. Perfect for colonial and craftsman-style homes.',
    icon: <Ruler size={28} className="text-brand-orange" />,
  },
  {
    title: 'Natural Stone Pavers',
    description: 'Travertine, bluestone, granite, and flagstone create a luxurious, one-of-a-kind driveway. Each stone is unique, offering an upscale appearance that dramatically increases your home\'s curb appeal and value.',
    icon: <CheckCircle size={28} className="text-brand-orange" />,
  },
  {
    title: 'Permeable Pavers',
    description: 'Eco-friendly pavers that allow water to drain through the surface, reducing runoff and helping meet California\'s stormwater management requirements. Ideal for environmentally conscious homeowners.',
    icon: <Droplets size={28} className="text-brand-orange" />,
  },
];

const processSteps = [
  { step: '01', title: 'Free Consultation', description: 'We visit your property, assess the site, discuss your vision, and provide a detailed estimate — completely free with no obligation.' },
  { step: '02', title: 'Custom Design', description: 'Our designers create a custom layout with your chosen materials, patterns, and colors. You\'ll see a visual preview before any work begins.' },
  { step: '03', title: 'Demolition & Removal', description: 'We remove existing concrete, asphalt, or old surfaces. Complete debris removal and site cleanup included in every project.' },
  { step: '04', title: 'Base Preparation', description: 'Proper excavation, grading, and compacted gravel base installation. This critical step ensures your driveway won\'t shift, sink, or crack.' },
  { step: '05', title: 'Paver Installation', description: 'Expert placement of each paver with precision cuts, proper spacing, and edge restraints. Our crews have 20+ years of hands-on experience.' },
  { step: '06', title: 'Sealing & Finishing', description: 'Joint sand application, compaction, and professional-grade sealer to protect your investment and enhance color vibrancy for years to come.' },
];

const faqs = [
  {
    question: 'How much does a paver driveway installation cost?',
    answer: 'Paver driveway costs vary based on size, material choice, and site preparation needs. The cost depends on your project size, material selection, and site conditions. We provide free, detailed on-site estimates for every project so you know exactly what to expect.',
  },
  {
    question: 'Are paver driveways better than concrete driveways?',
    answer: 'Yes, in most cases. Paver driveways are stronger (8,000+ PSI vs 3,000 PSI for poured concrete), more flexible (they won\'t crack from ground movement), easier to repair (replace individual pavers vs. patching), and significantly more attractive. They also last 25–50 years compared to 10–15 for plain concrete.',
  },
  {
    question: 'How long does a paver driveway installation take?',
    answer: 'Most residential paver driveway installations take 3–7 days depending on the size and complexity of the project. This includes demolition, base preparation, paver installation, and sealing. We provide a detailed timeline during your free consultation.',
  },
  {
    question: 'What are interlocking pavers for driveways?',
    answer: 'Interlocking pavers are specially shaped concrete or stone units that fit together like puzzle pieces. This interlocking design creates an incredibly strong surface that distributes vehicle weight evenly, prevents shifting, and allows for easy repairs. They\'re the most popular choice for residential driveways.',
  },
  {
    question: 'Do paver driveways increase home value?',
    answer: 'Absolutely. A professionally installed paver driveway can increase your home\'s value by 5–10%. They dramatically improve curb appeal, which is one of the most important factors in home valuation. Many real estate agents consider paver driveways one of the best exterior upgrades for ROI.',
  },
  {
    question: 'Can you install pavers over my existing driveway?',
    answer: 'In most cases, we recommend removing the existing surface for the best results. However, in some situations pavers can be installed over a stable concrete base using an overlay system. We\'ll assess your current driveway during the free consultation and recommend the best approach.',
  },
  {
    question: 'What maintenance do paver driveways require?',
    answer: 'Paver driveways are very low maintenance. Occasional sweeping, rinsing with a garden hose, and resealing every 2–3 years is all that\'s needed. If a paver cracks or stains, you can replace just that one paver — no need to redo the entire driveway.',
  },
  {
    question: 'Do you offer driveway paver installation near me in California?',
    answer: 'Yes! TP Pavers serves the entire Bay Area and surrounding California counties including Contra Costa, Alameda, Solano, Marin, San Mateo, and Santa Clara counties. Contact us for a free estimate at your location.',
  },
];

const counties = [
  { name: 'Contra Costa County', slug: '/contra-costa-county' },
  { name: 'Alameda County', slug: '/alameda-county' },
  { name: 'Solano County', slug: '/solano-county' },
  { name: 'Marin County', slug: '/marin-county' },
  { name: 'San Mateo County', slug: '/san-mateo-county' },
  { name: 'Santa Clara County', slug: '/santa-clara-county' },
];

export default function PaverDrivewaysPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-center items-center pt-[100px] px-5 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects/driveway-multicolor.webp"
            alt="Professional paver driveway installation in California"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-[1]" />
        <div className="relative z-[2] text-center max-w-[900px]">
          <div className="inline-flex items-center gap-2 bg-brand-orange/90 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <MapPin size={16} /> Serving All of California
          </div>
          <h1 className="font-oswald text-[2.2rem] sm:text-[3.5rem] lg:text-[4.5rem] font-bold text-white leading-[1.05] mb-5 uppercase tracking-[2px]">
            Expert Paver Driveway<br />Installation in California
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-[700px] mx-auto">
            Transform your home&apos;s curb appeal with a stunning paver driveway. Interlocking, brick, natural stone &amp; permeable options. 20+ years experience &amp; lifetime guarantee.
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
              Get a Quote <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      <CallNowStrip />

      {/* Why Choose Pavers Over Concrete */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            PAVERS VS CONCRETE
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-6 leading-[1.2]">
            Why Choose Pavers Over Concrete for Your Driveway?
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            When it comes to driveway materials, pavers outperform poured concrete in virtually every category. Here&apos;s why California homeowners are making the switch.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-brand-black mb-4 flex items-center gap-2">
                <Shield size={22} className="text-brand-orange" /> Paver Driveways
              </h3>
              <ul className="space-y-3">
                {[
                  'Strength: 8,000+ PSI — 3x stronger than concrete',
                  'Lifespan: 25–50 years with minimal maintenance',
                  'Flexible: Won\'t crack from ground movement or tree roots',
                  'Repairable: Replace individual pavers, not the whole surface',
                  'Design: Hundreds of colors, patterns, and styles',
                  'Value: Increases home value by 5–10%',
                  'Drainage: Permeable options reduce water runoff',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-brand-black mb-4">Poured Concrete</h3>
              <ul className="space-y-3">
                {[
                  'Strength: ~3,000 PSI — prone to cracking',
                  'Lifespan: 10–15 years before major repairs needed',
                  'Rigid: Cracks from settling, temperature changes, roots',
                  'Repairs: Must patch or replace entire sections',
                  'Design: Limited to grey or basic stamped patterns',
                  'Value: Minimal impact on home value',
                  'Drainage: Impervious — contributes to runoff',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Driveway Paver Types */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            MATERIALS
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-6 leading-[1.2]">
            Driveway Paver Types We Install
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            From classic interlocking pavers to luxurious natural stone, we offer a full range of driveway paver materials to match your home&apos;s style and your budget.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paverTypes.map((type, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="mb-4">{type.icon}</div>
                <h3 className="text-lg font-bold text-brand-black mb-3">{type.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            OUR PROCESS
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-6 leading-[1.2]">
            How We Install Your Paver Driveway
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            Every paver driveway installation follows our proven 6-step process, ensuring a flawless result that lasts decades.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="relative bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="text-4xl font-bold text-brand-orange/20 mb-2">{step.step}</div>
                <h3 className="text-lg font-bold text-brand-black mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Guide */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            PRICING
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-6 leading-[1.2]">
            Paver Driveway Cost Guide
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-12 leading-relaxed">
            Paver driveway costs depend on materials, project size, and site conditions. Here are general ranges to help you plan your budget.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { material: 'Interlocking Concrete Pavers', range: 'Contact for pricing', note: 'Most popular — great value and durability' },
              { material: 'Brick Pavers', range: 'Contact for pricing', note: 'Classic look with lifetime color' },
              { material: 'Natural Stone Pavers', range: 'Contact for pricing', note: 'Premium luxury — travertine, bluestone, granite' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-brand-black mb-2">{item.material}</h3>
                <div className="text-2xl font-bold text-brand-orange mb-2">{item.range}</div>
                <p className="text-slate-500 text-sm">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm">
            * Prices include materials, labor, and base preparation. Exact pricing depends on project specifics.{' '}
            <a href="tel:+15106500080" className="text-brand-orange font-semibold hover:underline">Call for a free estimate</a>.
          </p>
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
            <div className="text-sm opacity-90">Driveways Installed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-1">Lifetime</div>
            <div className="text-sm opacity-90">Guarantee</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-1">5★</div>
            <div className="text-sm opacity-90">Customer Rating</div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <DynamicGallery />

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            SERVICE AREAS
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-6 leading-[1.2]">
            Paver Driveway Installation Across California
          </h2>
          <p className="text-slate-600 text-center max-w-[750px] mx-auto mb-10 leading-relaxed">
            We install paver driveways throughout the Bay Area and surrounding counties. Click your county to see the cities we serve.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-[700px] mx-auto">
            {counties.map((county) => (
              <Link
                key={county.slug}
                href={county.slug}
                className="flex items-center gap-2 px-5 py-4 bg-slate-50 rounded-xl text-sm font-semibold text-brand-black border border-slate-200 hover:border-brand-orange hover:bg-brand-orange/5 transition-all group"
              >
                <MapPin size={16} className="text-brand-orange" />
                {county.name}
                <ArrowRight size={14} className="ml-auto text-slate-400 group-hover:text-brand-orange transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[900px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            FAQ
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-10 leading-[1.2]">
            Paver Driveway Installation — Common Questions
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
            Ready for a Stunning Paver Driveway?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Get a free on-site estimate today. No obligation, no pressure — just honest advice from California&apos;s trusted paver experts.
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
