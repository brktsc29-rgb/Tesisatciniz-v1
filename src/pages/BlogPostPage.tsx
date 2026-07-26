import { Link, useParams } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';
import { Container } from '../components/ui/Container';
import { NotFoundPage } from './NotFoundPage';
import { getBlogPostBySlug } from '../data/blogPosts';
import { renderMarkdown } from '../lib/markdown';
import { buildArticleSchema, buildJsonLdGraph, buildWebSiteSchema } from '../lib/structuredData';
import { getRelatedLinks } from '../utils/getRelatedLinks';
import type { BreadcrumbTrailItem } from '../types/seo';

/**
 * Blog yazısı detay sayfası. `/blog/:slug` — bilinmeyen bir slug için
 * 404 içeriği gösterilir. Henüz yayına alınmadığından noindex'tir.
 */
export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <NotFoundPage />;
  }

  const path = `/blog/${post.slug}`;
  const breadcrumbItems: BreadcrumbTrailItem[] = [
    { label: 'Ana Sayfa', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: post.title, path },
  ];

  const structuredData = [
    buildJsonLdGraph([buildWebSiteSchema(), buildArticleSchema(post, path)]),
  ];

  const relatedLinks = getRelatedLinks({ type: 'generic' });

  return (
    <>
      <SEOHead
        title={`${post.title} | Tesisatçınız Blog`}
        description={post.excerpt}
        canonical={path}
        noIndex
        structuredData={structuredData}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <section className="py-16 md:py-20">
        <Container className="max-w-2xl">
          <time dateTime={post.publishedAt} className="text-xs font-semibold text-ink/50">
            {new Date(post.publishedAt).toLocaleDateString('tr-TR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
          <h1 className="mt-2 text-[28px] leading-tight font-extrabold text-navy md:text-[36px]">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-col gap-4">{renderMarkdown(post.content)}</div>

          <div className="mt-10 border-t border-border-light pt-8">
            <h2 className="text-sm font-bold tracking-wide text-navy uppercase">İlgili bağlantılar</h2>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {[relatedLinks.home, ...relatedLinks.relatedServices, ...relatedLinks.relatedDistricts].map(
                (link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm font-semibold text-teal transition-colors hover:text-blue"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
