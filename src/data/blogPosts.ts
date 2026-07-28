import type { BlogPost } from '../types/blog';

/**
 * Blog altyapısı için örnek içerik. Bu yazılar henüz yayına alınmadı
 * (sayfalar noindex); yalnızca route, şablon ve markdown desteğinin
 * hazır olduğunu göstermek amacıyla eklenmiştir.
 */
export const blogPosts: BlogPost[] = [];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
