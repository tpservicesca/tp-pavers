import type { MetadataRoute } from 'next';

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
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tppavers.com';

  const cityPages = cities.map((city) => ({
    url: `${baseUrl}/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...cityPages,
  ];
}
