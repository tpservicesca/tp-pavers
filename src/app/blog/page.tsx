'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallNowStrip from '@/components/CallNowStrip';
import { blogPosts } from '@/data/blog-posts';
import { Clock, ArrowRight } from 'lucide-react';

const categories = [
  'All',
  'Driveways',
  'Patios',
  'Retaining Walls',
  'Synthetic Turf',
  'Tips & Guides',
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-brand-black py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-gray-900 to-brand-black opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wide">
            TP Pavers <span className="text-brand-orange">Blog</span>
          </h1>
          <p className="font-redhat mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Expert tips, design inspiration &amp; guides for your outdoor projects
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex gap-2 md:gap-3 min-w-max md:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-oswald px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wide transition-all duration-300 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-redhat text-gray-500 text-lg">
                No posts found in this category yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="font-oswald bg-brand-orange text-white text-xs font-bold uppercase px-3 py-1.5 rounded-full tracking-wide">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-oswald text-xl font-bold text-brand-black group-hover:text-brand-orange transition-colors duration-300 mb-3 line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="font-redhat text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-1.5 font-oswald text-brand-orange font-semibold text-sm uppercase tracking-wide group-hover:gap-3 transition-all duration-300">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CallNowStrip />
      <Footer />
    </>
  );
}
