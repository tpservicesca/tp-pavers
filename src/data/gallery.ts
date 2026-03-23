export interface GalleryCategory {
  name: string;
  images: string[];
}

export const galleryData: Record<string, GalleryCategory> = {
  P: {
    name: 'Pavers',
    images: [
      '/images/projects/driveway-multicolor.webp',
      '/images/projects/walkway-brick-curved.webp',
      '/images/projects/walkway-brick-wide.webp',
      '/images/projects/walkway-herringbone.webp',
      '/images/projects/patio-curved-seatwall.webp',
      '/images/P1.webp',
      '/images/P2.webp',
      '/images/P5.webp',
    ],
  },
  R: {
    name: 'Retaining Walls',
    images: [
      '/images/projects/patio-retaining-wall.webp',
      '/images/projects/patio-raised-house.webp',
      '/images/R2.webp',
      '/images/R4.webp',
      '/images/R5.webp',
      '/images/R6.webp',
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
  T: {
    name: 'Our Team',
    images: [
      '/images/projects/team-working.webp',
    ],
  },
};
