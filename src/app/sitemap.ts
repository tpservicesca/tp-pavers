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
