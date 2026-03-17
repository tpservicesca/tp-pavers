'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { galleryData } from '@/data/gallery';

// Flatten all images with their category name
const allSlides = Object.values(galleryData).flatMap((cat) =>
  cat.images.map((src) => ({ src, category: cat.name }))
);

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = allSlides.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrent(((index % total) + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Autoplay
  useEffect(() => {
    if (isHovered) return;
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [next, prev]);

  // Touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    setTouchStart(null);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
          GALLERY
        </div>
        <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-[50px] leading-[1.2]">
          Recent Services
        </h2>

        {/* Carousel container */}
        <div
          className="relative w-full overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides */}
          <div className="relative w-full aspect-[16/9] md:aspect-[16/8]">
            {allSlides.map((slide, i) => (
              <div
                key={`${slide.category}-${i}`}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <Image
                  src={slide.src}
                  alt={`${slide.category} project ${i + 1}`}
                  fill
                  className="object-cover"
                  loading={i < 3 ? 'eager' : 'lazy'}
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
                {/* Category label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 md:p-8">
                  <span className="inline-block bg-brand-orange/90 text-white text-xs md:text-sm font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {slide.category}
                  </span>
                  <p className="text-white/80 text-sm mt-2">
                    {current + 1} / {total}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Prev button */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute top-1/2 left-3 md:left-5 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-black/40 hover:bg-brand-orange text-white border-none rounded-full cursor-pointer text-lg md:text-xl flex justify-center items-center transition-all duration-300 backdrop-blur-sm"
          >
            &#10094;
          </button>

          {/* Next button */}
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute top-1/2 right-3 md:right-5 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-black/40 hover:bg-brand-orange text-white border-none rounded-full cursor-pointer text-lg md:text-xl flex justify-center items-center transition-all duration-300 backdrop-blur-sm"
          >
            &#10095;
          </button>
        </div>

        {/* Dot indicators - grouped by category */}
        <div className="flex justify-center items-center gap-1.5 mt-6 flex-wrap">
          {allSlides.map((slide, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}: ${slide.category}`}
              className={`w-2.5 h-2.5 rounded-full border-none cursor-pointer transition-all duration-300 ${
                i === current
                  ? 'bg-brand-orange scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
