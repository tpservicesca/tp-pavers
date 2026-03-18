export interface GalleryCategory {
  name: string;
  images: string[];
}

export const galleryData: Record<string, GalleryCategory> = {
  P: {
    name: 'Pavers',
    images: [
      '/images/P1.webp',
      '/images/P2.webp',
      '/images/P3.webp',
      '/images/P5.webp',
      '/images/P6.webp',
      '/images/P8.webp',
      '/images/P9.webp',
      '/images/P10.webp',
    ],
  },
  R: {
    name: 'Retaining Walls',
    images: [
      '/images/R1.png',
      '/images/R2.webp',
      '/images/R3.webp',
      '/images/R4.webp',
      '/images/R5.webp',
      '/images/R6.webp',
      '/images/R7.webp',
      '/images/R8.webp',
      '/images/R9.webp',
      '/images/R10.webp',
    ],
  },
  S: {
    name: 'Synthetic Turf',
    images: [
      '/images/S1.png',
      '/images/S2.webp',
      '/images/S3.webp',
      '/images/S4.webp',
    ],
  },
};
