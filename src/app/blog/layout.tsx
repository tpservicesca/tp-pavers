import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | TP Pavers — Tips, Ideas & Guides for Pavers & Outdoor Living',
  description:
    'Expert tips, design inspiration, and comprehensive guides for paver driveways, patios, retaining walls, and outdoor projects in California. By TP Pavers.',
  keywords: [
    'paver blog',
    'paver ideas',
    'driveway ideas',
    'patio design ideas',
    'retaining wall ideas',
    'paver maintenance',
    'pavers vs concrete',
    'paver cost california',
    'artificial turf pros cons',
    'permeable pavers',
    'paver sealer guide',
    'outdoor living blog',
  ],
  openGraph: {
    title: 'TP Pavers Blog — Tips, Ideas & Guides',
    description:
      'Expert tips, design inspiration, and comprehensive guides for paver driveways, patios, retaining walls, and outdoor projects in California.',
    url: 'https://tppavers.com/blog',
    siteName: 'TP Pavers',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://tppavers.com/images/P1.webp',
        width: 1200,
        height: 630,
        alt: 'TP Pavers Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TP Pavers Blog — Tips, Ideas & Guides',
    description:
      'Expert tips, design inspiration, and comprehensive guides for paver driveways, patios, retaining walls, and outdoor projects.',
    images: ['https://tppavers.com/images/P1.webp'],
  },
  alternates: {
    canonical: 'https://tppavers.com/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
