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
  L: {
    name: 'Landscaping Projects',
    images: [
      '/images/L1.png',
      '/images/L2.png',
      '/images/L3.png',
      '/images/L4.png',
      '/images/L5.png',
      '/images/L7.png',
    ],
  },
  D: {
    name: 'Drainage System',
    images: [
      '/images/D1.png',
      '/images/D2.png',
      '/images/D3.png',
      '/images/D5.png',
      '/images/D6.png',
    ],
  },
  E: {
    name: 'Demolition & Excavation',
    images: [
      '/images/E1.png',
      '/images/E2.png',
      '/images/E3.png',
      '/images/E4.png',
      '/images/E5.png',
      '/images/E6.png',
      '/images/E7.png',
      '/images/E8.png',
      '/images/E9.png',
      '/images/E10.png',
      '/images/E11.png',
    ],
  },
};
