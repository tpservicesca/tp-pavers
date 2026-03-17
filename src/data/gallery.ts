export interface GalleryCategory {
  name: string;
  images: string[];
}

export const galleryData: Record<string, GalleryCategory> = {
  P: {
    name: 'Pavers',
    images: [
      '/images/P1.png',
      '/images/P2.png',
      '/images/P3.png',
      '/images/P5.png',
      '/images/P6.png',
      '/images/P8.png',
      '/images/P9.png',
      '/images/P10.png',
    ],
  },
  R: {
    name: 'Retaining Walls',
    images: [
      '/images/R1.png',
      '/images/R2.png',
      '/images/R3.png',
      '/images/R4.png',
      '/images/R5.png',
      '/images/R6.png',
      '/images/R7.png',
      '/images/R8.png',
      '/images/R9.png',
      '/images/R10.png',
    ],
  },
  S: {
    name: 'Synthetic Turf',
    images: [
      '/images/S1.png',
      '/images/S2.png',
      '/images/S3.png',
      '/images/S4.png',
    ],
  },
};
