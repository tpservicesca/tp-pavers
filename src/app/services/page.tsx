import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallNowStrip from '@/components/CallNowStrip';
import FloatingButtons from '@/components/FloatingButtons';
import Image from 'next/image';

import { ArrowRight, CheckCircle, Phone, Shield, Star, Clock, Ruler } from 'lucide-react';

/* ───────── SEO METADATA ───────── */
export const metadata: Metadata = {
  title: 'Our Services | Pavers, Retaining Walls, Turf & More | TP Pavers',
  description:
    'Explore all TP Pavers services: paver driveways, patios, walkways, retaining walls, synthetic turf, and concrete work. 20+ years experience in California. Free estimates & lifetime guarantee.',
  keywords: [
    'paver installation services',
    'paver driveway installation',
    'patio pavers',
    'walkway pavers',
    'retaining wall installation',
    'synthetic turf installation',
    'concrete work california',
    'outdoor construction services',
    'hardscape contractor california',
    'paver contractor near me',
    'landscaping services bay area',
    'outdoor living california',
  ],
  openGraph: {
    title: 'Our Services | Pavers, Retaining Walls, Turf & More | TP Pavers',
    description:
      'Professional paver installation, retaining walls, synthetic turf & concrete work. 20+ years experience. Free estimates.',
    url: 'https://tppavers.com/services',
    siteName: 'TP Pavers',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://tppavers.com/images/P1.webp',
        width: 1200,
        height: 630,
        alt: 'TP Pavers - Professional Outdoor Construction Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | TP Pavers California',
    description:
      'Paver driveways, patios, walkways, retaining walls & synthetic turf. 20+ years experience. Free estimates.',
    images: ['https://tppavers.com/images/P1.webp'],
  },
  alternates: {
    canonical: 'https://tppavers.com/services',
  },
};

/* ───────── JSON-LD SCHEMA ───────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Outdoor Construction & Paver Installation Services',
  description:
    'Full-service outdoor construction including paver driveways, patios, walkways, retaining walls, synthetic turf, and concrete work across California.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'TP Pavers',
    telephone: '+1-510-650-0080',
    url: 'https://tppavers.com',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '15',
      bestRating: '5',
    },
  },
  areaServed: {
    '@type': 'State',
    name: 'California',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Outdoor Construction Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paver Driveway Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paver Patio Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paver Walkway Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Retaining Wall Construction' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Synthetic Turf Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Concrete Work' } },
    ],
  },
};

/* ───────── SERVICES DATA ───────── */
const allServices = [
  {
    slug: '/paver-driveways',
    name: 'Paver Driveways',
    image: '/images/projects/driveway-multicolor.webp',
    alt: 'Paver driveway installation in California',
    description:
      'Transform your home\'s entrance with a stunning paver driveway. Choose from interlocking, brick, natural stone, or permeable pavers designed for California driveways.',
    highlights: [
      'Interlocking & natural stone options',
      'Permeable pavers for drainage',
      'Handles heavy vehicle traffic',
      'Boosts curb appeal & home value',
    ],
  },
  {
    slug: '/paver-patios',
    name: 'Paver Patios',
    image: '/images/projects/patio-curved-seatwall.webp',
    alt: 'Custom paver patio with seatwall',
    description:
      'Create the perfect outdoor living space with a custom paver patio. From cozy fire pit areas to full outdoor kitchens — we build patios that become the heart of your home.',
    highlights: [
      'Custom designs & patterns',
      'Fire pit & kitchen ready',
      'Curved seat walls available',
      'Multiple material choices',
    ],
  },
  {
    slug: '/paver-walkways',
    name: 'Paver Walkways',
    image: '/images/projects/walkway-brick-curved.webp',
    alt: 'Brick paver walkway installation',
    description:
      'Guide guests to your front door with elegant paver walkways. We build curved, straight, and garden paths with premium materials that last a lifetime.',
    highlights: [
      'Curved & straight designs',
      'Brick, stone & concrete options',
      'Non-slip surfaces for safety',
      'Integrates with landscaping',
    ],
  },
  {
    slug: '/retaining-walls',
    name: 'Retaining Walls',
    image: '/images/R1.webp',
    alt: 'Retaining wall construction',
    description:
      'Protect your property and create stunning landscape features with professionally engineered retaining walls. Functional, beautiful, and built to last decades.',
    highlights: [
      'Engineered for stability',
      'Prevents soil erosion',
      'Multiple materials & styles',
      'Creates usable yard space',
    ],
  },
  {
    slug: '/synthetic-turf',
    name: 'Synthetic Turf',
    image: '/images/S1.webp',
    alt: 'Synthetic turf installation',
    description:
      'Enjoy a lush, green lawn year-round without watering, mowing, or maintenance. Our premium synthetic turf is perfect for families, pets, and play areas.',
    highlights: [
      'Zero maintenance lawn',
      'Pet & child friendly',
      'Saves water & money',
      'Looks green all year',
    ],
  },
  {
    slug: '#contact',
    name: 'Concrete Work',
    image: '/images/P3.webp',
    alt: 'Professional concrete work',
    description:
      'From driveways to foundations, we deliver clean, strong concrete work. Stamped, stained, and decorative finishes available for a polished look.',
    highlights: [
      'Driveways, patios & foundations',
      'Stamped & decorative finishes',
      'Precision grading & forming',
      'Built for California climate',
    ],
  },
];

/* whyUs rendered inline to avoid dynamic component pattern */

export default function ServicesPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="pt-[90px]">
        {/* ───── HERO ───── */}
        <section className="relative bg-brand-black text-white py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-brand-orange/20" />
          <div className="relative max-w-6xl mx-auto px-4 text-center">
            <p className="text-brand-orange font-bold uppercase tracking-[3px] text-sm mb-4">
              What We Do
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From paver driveways and patios to retaining walls and synthetic turf — we build
              beautiful, durable outdoor spaces that transform your property and increase its value.
            </p>
          </div>
        </section>

        <CallNowStrip />

        {/* ───── SERVICES GRID ───── */}
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-14">
            <p className="text-brand-orange font-bold uppercase tracking-[2px] text-sm mb-3">
              Expert Craftsmanship
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-brand-black mb-4">
              Everything You Need for Your Outdoor Project
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each service comes with a free on-site estimate, premium materials, expert installation,
              and our lifetime guarantee.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service) => (
              <a
                key={service.slug}
                href={service.slug}
                className="group bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(234,88,12,0.15)] no-underline"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    width={500}
                    height={300}
                    className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-brand-black mb-2 group-hover:text-brand-orange transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-2 text-brand-orange font-bold text-sm group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ───── WHY CHOOSE US ───── */}
        <section className="bg-slate-50 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-brand-orange font-bold uppercase tracking-[2px] text-sm mb-3">
                Why TP Pavers
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-brand-black mb-4">
                California&apos;s Trusted Outdoor Experts
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-brand-orange w-7 h-7" />
                </div>
                <h3 className="font-bold text-brand-black mb-2">Lifetime Guarantee</h3>
                <p className="text-gray-600 text-sm leading-relaxed">We stand behind every project. Our work is guaranteed for the lifetime of your installation.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="text-brand-orange w-7 h-7" />
                </div>
                <h3 className="font-bold text-brand-black mb-2">20+ Years Experience</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Family-owned business with two decades of expert craftsmanship across California.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-brand-orange w-7 h-7" />
                </div>
                <h3 className="font-bold text-brand-black mb-2">Free Estimates</h3>
                <p className="text-gray-600 text-sm leading-relaxed">No pressure, no obligation. We provide detailed quotes so you know exactly what to expect.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Ruler className="text-brand-orange w-7 h-7" />
                </div>
                <h3 className="font-bold text-brand-black mb-2">Custom Designs</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Every project is unique. We work with you to create the perfect design for your space.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ───── PROCESS ───── */}
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-14">
            <p className="text-brand-orange font-bold uppercase tracking-[2px] text-sm mb-3">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-brand-black mb-4">
              From Idea to Reality in 4 Simple Steps
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Free Consultation',
                desc: 'Call us or fill out our contact form. We\'ll discuss your project and schedule an on-site visit.',
              },
              {
                step: '02',
                title: 'Custom Design',
                desc: 'Our team creates a detailed plan with material options, layout, and a transparent quote.',
              },
              {
                step: '03',
                title: 'Expert Installation',
                desc: 'Our experienced crew brings your vision to life with precision craftsmanship and premium materials.',
              },
              {
                step: '04',
                title: 'Final Walkthrough',
                desc: 'We walk you through the finished project, ensure your satisfaction, and activate your lifetime guarantee.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-brand-orange text-white flex items-center justify-center mx-auto mb-4 text-xl font-black">
                  {item.step}
                </div>
                <h3 className="font-bold text-brand-black mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ───── CTA ───── */}
        <section className="bg-brand-orange text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Ready to Transform Your Outdoor Space?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation estimate today. Our team will visit your property, discuss your
              vision, and provide a detailed quote — all at no cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-orange hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                Get Your Free Estimate
              </a>
              <a
                href="tel:+15106500080"
                className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-brand-orange font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                <Phone className="w-5 h-5" /> (510) 650-0080
              </a>
            </div>
          </div>
        </section>

        {/* ───── SEO CONTENT ───── */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-brand-black mb-6">
            Professional Outdoor Construction Services in California
          </h2>
          <div className="prose prose-gray max-w-none text-sm leading-relaxed text-gray-600 space-y-4">
            <p>
              TP Pavers is a family-owned outdoor construction company with over 20 years of experience
              serving homeowners across California. We specialize in paver installation for driveways,
              patios, and walkways, as well as retaining wall construction, synthetic turf installation,
              and professional concrete work. Every project is backed by our lifetime guarantee and built
              with premium materials sourced from the industry&apos;s top manufacturers.
            </p>
            <p>
              Our team of expert installers works directly with you to design custom outdoor spaces that
              match your vision and budget. Whether you want a classic brick driveway, a modern patio with
              a built-in fire pit, a curved garden walkway, or a maintenance-free synthetic lawn, we have
              the skills and experience to deliver exceptional results. We serve cities throughout the
              Bay Area including San Ramon, Dublin, Pleasanton, Livermore, Danville, Alamo, Walnut Creek,
              Concord, and many more across Contra Costa, Alameda, and surrounding counties.
            </p>
            <p>
              Ready to get started? Contact us today for a free on-site consultation and estimate.
              Call <a href="tel:+15106500080" className="text-brand-orange font-semibold hover:underline">(510) 650-0080</a> or
              fill out our online form. We look forward to transforming your outdoor space.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
