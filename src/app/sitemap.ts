import type { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog-posts';

const cities = [
  'livermore',
  'concord',
  'pleasanton',
  'san-ramon',
  'dublin',
  'danville',
  'alamo',
  'walnut-creek',
  'contra-costa-county',
  'pleasant-hill',
  'martinez',
  'pittsburg',
  'antioch',
  'brentwood',
  'oakley',
  'clayton',
  'lafayette',
  'orinda',
  'moraga',
  'el-cerrito',
  'richmond',
  'san-pablo',
  'pinole',
  'hercules',
  'el-sobrante',
  'bay-point',
  'discovery-bay',
  'rodeo',
  'crockett',
  'kensington',
  // Alameda County
  'alameda-county',
  'oakland',
  'berkeley',
  'fremont',
  'hayward',
  'alameda',
  'san-leandro',
  'union-city',
  'newark',
  'castro-valley',
  'san-lorenzo',
  'emeryville',
  'piedmont',
  'albany',
  // Solano County
  'solano-county',
  'vallejo',
  'benicia',
  'american-canyon',
  'fairfield',
  'vacaville',
  'suisun-city',
  'dixon',
  // San Mateo County
  'san-mateo-county',
  'redwood-city',
  'san-mateo-city',
  'daly-city',
  'south-san-francisco',
  'san-bruno',
  'burlingame',
  'san-carlos',
  'foster-city',
  'pacifica',
  'half-moon-bay',
  'belmont',
  'menlo-park',
  'millbrae',
  // Santa Clara County
  'santa-clara-county',
  'san-jose',
  'sunnyvale',
  'santa-clara-city',
  'mountain-view',
  'milpitas',
  'cupertino',
  'campbell',
  'los-gatos',
  'palo-alto',
  'saratoga',
  'morgan-hill',
  'gilroy',
  // Marin County
  'marin-county',
  'san-rafael',
  'novato',
  'mill-valley',
  'sausalito',
  'san-francisco',
  'tiburon',
  'corte-madera',
  'larkspur',
  'san-anselmo',
  'fairfax',
];

const servicePages = [
  'paver-driveways',
  'paver-patios',
  'retaining-walls',
  'synthetic-turf',
  'paver-walkways',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tppavers.com';

  const cityEntries = cities.map((city) => ({
    url: `${baseUrl}/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const serviceEntries = servicePages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.95,
  }));

  const blogIndex = {
    url: `${baseUrl}/blog`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  };

  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...serviceEntries,
    blogIndex,
    ...blogEntries,
    ...cityEntries,
  ];
}
