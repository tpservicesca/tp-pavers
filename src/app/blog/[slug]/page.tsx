'use client';

import { use } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowLeft, Clock, Calendar, ChevronRight, Star, Shield, CheckCircle } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';

/* ───── blog content registry ───── */
import RetainingWallIdeas from '../_articles/retaining-wall-ideas';
import PermeablePaversGuide from '../_articles/permeable-pavers-guide';
import BackyardPatioIdeas from '../_articles/backyard-patio-ideas';
import PaverSealerGuide from '../_articles/paver-sealer-guide';
import PaverPatioDesignIdeas from '../_articles/paver-patio-design-ideas';
import DrivewayIdeasCurbAppeal from '../_articles/driveway-ideas-curb-appeal';
import CurbAppealIdeas from '../_articles/curb-appeal-ideas';
import PaversVsConcrete from '../_articles/pavers-vs-concrete';
import PaverMaintenanceGuide from '../_articles/paver-maintenance-guide';
import HowMuchDoPaversCost from '../_articles/how-much-do-pavers-cost';

const articleComponents: Record<string, React.ComponentType> = {
  'retaining-wall-ideas': RetainingWallIdeas,
  'permeable-pavers-guide': PermeablePaversGuide,
  'backyard-patio-ideas': BackyardPatioIdeas,
  'paver-sealer-guide': PaverSealerGuide,
  'paver-patio-design-ideas': PaverPatioDesignIdeas,
  'driveway-ideas-curb-appeal': DrivewayIdeasCurbAppeal,
  'curb-appeal-ideas': CurbAppealIdeas,
  'pavers-vs-concrete': PaversVsConcrete,
  'paver-maintenance-guide': PaverMaintenanceGuide,
  'how-much-do-pavers-cost': HowMuchDoPaversCost,
};

/* ───── CTA components ───── */
function CallNowMobile() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-brand-orange p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
      <a
        href="tel:+15106500080"
        className="flex items-center justify-center gap-2 bg-white text-brand-orange font-bold py-3 rounded-full text-lg"
      >
        <Phone size={20} /> Call Now — Free Estimate
      </a>
    </div>
  );
}

function InlineCTA({ variant = 'primary' }: { variant?: 'primary' | 'secondary' }) {
  if (variant === 'secondary') {
    return (
      <div className="my-10 bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-center">
        <p className="text-lg text-gray-700 mb-2">
          <strong>Not sure where to start?</strong>
        </p>
        <p className="text-gray-600 mb-5">
          Our team has 20+ years of experience helping California homeowners. We&apos;ll walk you through your options — no pressure, no obligation.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:+15106500080"
            className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white font-bold px-6 py-3 rounded-full hover:bg-brand-orange-dark transition-all"
          >
            <Phone size={18} /> Call for Free Estimate
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-orange font-bold px-6 py-3 rounded-full border-2 border-brand-orange hover:bg-orange-50 transition-all"
          >
            Request a Quote Online
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="my-10 bg-gradient-to-r from-brand-orange to-orange-600 rounded-2xl p-6 md:p-8 text-center text-white">
      <h3 className="font-oswald text-2xl md:text-3xl font-bold mb-3">
        Ready to Transform Your Outdoor Space?
      </h3>
      <p className="text-white/90 mb-5 max-w-lg mx-auto">
        Get a free, no-obligation estimate from our expert team. 20+ years of experience, lifetime guarantee on all installations.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="tel:+15106500080"
          className="inline-flex items-center justify-center gap-2 bg-white text-brand-orange font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-all"
        >
          <Phone size={18} /> (510) 650-0080
        </a>
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-bold px-6 py-3 rounded-full border-2 border-white hover:bg-white/10 transition-all"
        >
          Get Your Free Quote <ChevronRight size={18} />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-4 mt-4 text-sm text-white/80">
        <span className="flex items-center gap-1"><Star size={14} /> 5.0 Rating</span>
        <span className="flex items-center gap-1"><Shield size={14} /> Lifetime Guarantee</span>
        <span className="flex items-center gap-1"><CheckCircle size={14} /> Licensed &amp; Insured</span>
      </div>
    </div>
  );
}

function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const related = blogPosts.filter((p) => p.slug !== currentSlug).slice(0, 3);
  return (
    <div className="mt-16 border-t border-gray-200 pt-12">
      <h2 className="font-oswald text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
        More Articles You Might Like
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                {post.category}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-oswald text-lg font-bold text-gray-900 group-hover:text-brand-orange transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">{post.readTime}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ───── main page ───── */
export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return null;

  const ArticleContent = articleComponents[slug];

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end pt-[100px]">
        <div className="absolute inset-0 z-0">
          <Image src={post.image} alt={post.title} fill className="object-cover object-center" sizes="100vw" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-[1]" />
        <div className="relative z-[2] w-full max-w-[900px] mx-auto px-5 pb-10 md:pb-16">
          <div className="flex items-center gap-3 mb-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-white/80 hover:text-white text-sm transition-colors"
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>
          </div>
          <div className="inline-block bg-brand-orange text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            {post.category}
          </div>
          <h1 className="font-oswald text-[2rem] sm:text-[2.8rem] lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-white/80 text-sm">
            <span className="flex items-center gap-1">
              <Calendar size={14} /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="max-w-[800px] mx-auto px-6 py-14 md:py-20">
        <div className="prose prose-lg max-w-none
          prose-headings:font-oswald prose-headings:text-gray-900 prose-headings:font-bold
          prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-5
          prose-p:text-gray-700 prose-p:leading-[1.8] prose-p:text-base prose-p:md:text-lg prose-p:mb-5
          prose-li:text-gray-700 prose-li:text-base prose-li:md:text-lg prose-li:leading-[1.8]
          prose-strong:text-gray-900
          prose-a:text-brand-orange prose-a:no-underline hover:prose-a:underline
          prose-img:rounded-2xl prose-img:shadow-lg
        ">
        {ArticleContent ? (
          <ArticleContent />
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500 mb-6">This article is coming soon!</p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-brand-orange text-white font-bold px-6 py-3 rounded-full hover:bg-brand-orange-dark transition-all"
            >
              <ArrowLeft size={18} /> Back to Blog
            </Link>
          </div>
        )}

        </div>
        {ArticleContent && (
          <RelatedPosts currentSlug={slug} />
        )}
      </article>

      <div className="pb-16 md:pb-0">
        <Footer />
      </div>
    </>
  );
}

export { InlineCTA };
