export interface GalleryCategory {
  name: string;
  images: string[];
}

export const galleryData: Record<string, GalleryCategory> = {
  P: {
    name: 'Pavers',
    images: [
      '/images/gallery/sel-01.webp',
      '/images/gallery/sel-02.webp',
      '/images/gallery/sel-05.webp',
      '/images/gallery/sel-06.webp',
      '/images/gallery/sel-09.webp',
      '/images/gallery/sel-10.webp',
      '/images/gallery/sel-11.webp',
      '/images/gallery/sel-13.webp',
      '/images/gallery/sel-14.webp',
      '/images/gallery/sel-15.webp',
      '/images/gallery/sel-16.webp',
      '/images/gallery/sel-17.webp',
      '/images/gallery/sel-18.webp',
      '/images/gallery/sel-19.webp',
      '/images/gallery/sel-20.webp',
      '/images/gallery/sel-21.webp',
      '/images/gallery/sel-22.webp',
      '/images/gallery/sel-23.webp',
      '/images/gallery/sel-24.webp',
      '/images/gallery/sel-25.webp',
      '/images/gallery/sel-26.webp',
      '/images/gallery/sel-28.webp',
      '/images/gallery/sel-29.webp',
      '/images/gallery/sel-30.webp',
      '/images/gallery/sel-31.webp',
      '/images/gallery/sel-32.webp',
      '/images/gallery/gen-01.webp',
      '/images/gallery/gen-02.webp',
      '/images/gallery/gen-03.webp',
      '/images/gallery/gen-06.webp',
      '/images/gallery/gen-07.webp',
      '/images/gallery/gen-08.webp',
      '/images/gallery/gen-09.webp',
      '/images/gallery/gen-10.webp',
    ],
  },
  R: {
    name: 'Retaining Walls',
    images: [
      '/images/gallery/sel-03.webp',
      '/images/gallery/sel-07.webp',
      '/images/gallery/gen-04.webp',
      '/images/gallery/gen2-04.webp',
      '/images/gallery/gen2-05.webp',
      '/images/gallery/gen2-06.webp',
    ],
  },
  S: {
    name: 'Synthetic Turf',
    images: [
      '/images/gallery/sel-04.webp',
      '/images/gallery/sel-27.webp',
      '/images/gallery/gen-05.webp',
      '/images/gallery/gen2-01.webp',
      '/images/gallery/gen2-02.webp',
      '/images/gallery/gen2-03.webp',
    ],
  },
  C: {
    name: 'Concrete Work',
    images: [
      '/images/gallery/gen2-07.webp',
      '/images/gallery/gen2-08.webp',
      '/images/gallery/gen2-09.webp',
      '/images/gallery/gen2-10.webp',
    ],
  },
  T: {
    name: 'Our Team',
    images: [
      '/images/projects/team-working.webp',
    ],
  },
};
