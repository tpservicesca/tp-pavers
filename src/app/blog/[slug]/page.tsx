import { blogPosts } from '@/data/blog-posts';
import ArticleClient from './ArticleClient';

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <ArticleClient params={params} />;
}
