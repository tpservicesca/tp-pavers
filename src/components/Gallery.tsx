'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { galleryData } from '@/data/gallery';

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentKey, setCurrentKey] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentImages = currentKey ? galleryData[currentKey].images : [];
  const currentName = currentKey ? galleryData[currentKey].name : '';

  const openModal = (key: string) => {
    setCurrentKey(key);
    setCurrentIndex(0);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = useCallback(() => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const showNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % currentImages.length);
  }, [currentImages.length]);

  const showPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  }, [currentImages.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!modalOpen) return;
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [modalOpen, showNext, showPrev, closeModal]);

  return (
    <>
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-brand-gold text-sm font-bold uppercase tracking-[2px] mb-2 text-center font-redhat">
            GALLERY
          </div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold text-brand-black text-center mb-[50px] leading-[1.2]">
            Recent Services
          </h2>
          <div className="grid grid-cols-1 max-[480px]:grid-cols-1 max-[768px]:grid-cols-2 md:grid-cols-3 gap-5">
            {Object.keys(galleryData).map((key) => {
              const category = galleryData[key];
              return (
                <div
                  key={key}
                  onClick={() => openModal(key)}
                  className="relative rounded-xl overflow-hidden cursor-pointer shadow-[0_8px_25px_rgba(0,0,0,0.1)] transition-all duration-300 aspect-[4/3] hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(234,88,12,0.25)] group"
                >
                  <Image
                    src={category.images[0]}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-400 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                    <h3 className="text-white text-base md:text-xl font-bold drop-shadow-[1px_1px_3px_rgba(0,0,0,0.7)]">
                      {category.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[10000] bg-black/[0.92] flex justify-center items-center animate-fadeIn"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          {/* Close */}
          <button
            onClick={closeModal}
            className="fixed top-5 right-5 w-11 h-11 bg-[rgba(30,30,30,0.7)] text-white border-none rounded-full cursor-pointer text-2xl flex justify-center items-center hover:bg-brand-orange transition-colors z-10"
          >
            &times;
          </button>

          {/* Prev */}
          <button
            onClick={showPrev}
            className="fixed top-1/2 left-5 -translate-y-1/2 w-10 h-10 md:w-[50px] md:h-[50px] bg-[rgba(30,30,30,0.7)] text-white border-none rounded-full cursor-pointer text-xl md:text-2xl flex justify-center items-center hover:bg-brand-orange transition-colors z-10"
          >
            &#10094;
          </button>

          {/* Image */}
          <div className="relative max-w-[90vw] max-h-[85vh] text-center">
            <img
              src={currentImages[currentIndex]}
              alt={currentName}
              className="max-w-full max-h-[80vh] rounded-lg object-contain"
            />
            <div className="text-center text-[#ccc] mt-[15px] text-lg">
              {currentName} ({currentIndex + 1} / {currentImages.length})
            </div>
          </div>

          {/* Next */}
          <button
            onClick={showNext}
            className="fixed top-1/2 right-5 -translate-y-1/2 w-10 h-10 md:w-[50px] md:h-[50px] bg-[rgba(30,30,30,0.7)] text-white border-none rounded-full cursor-pointer text-xl md:text-2xl flex justify-center items-center hover:bg-brand-orange transition-colors z-10"
          >
            &#10095;
          </button>
        </div>
      )}
    </>
  );
}
