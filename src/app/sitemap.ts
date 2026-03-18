import type { MetadataRoute } from 'next';

const cities = ['livermore'];

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
