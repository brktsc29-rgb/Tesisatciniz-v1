import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { blogPosts } from '../data/blogPosts';
import { buildBreadcrumbSchema, buildJsonLdGraph, buildWebSiteSchema } from '../lib/structuredData';
import type { BreadcrumbTrailItem } from '../types/seo';

const breadcrumbItems: BreadcrumbTrailItem[] = [
  { label: 'Ana Sayfa', path: '/' },
  { label: 'Blog', path: '/blog' },
];

const structuredData = [buildJsonLdGraph([buildWebSiteSchema(), buildBreadcrumbSchema(breadcrumbItems)])];

/**
 * Blog listeleme sayfası. Altyapı hazırlığı amacıyla eklendi; henüz yayına
 * alınmadığı için noindex ile işaretlenir.
 */
export function BlogListPage() {
  return (
    <>
      <SEOHead
        title="Blog | Tesisatçınız"
        description="Su tesisatı bakımı ve arızaları hakkında bilgilendirici yazılar."
        canonical="/blog"
        noIndex
        structuredData={structuredData}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <section className="py-16 md:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeading id="blog-heading" titleAs="h1" title="Blog" align="left" className="items-start text-left" />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="flex h-full flex-col rounded-2xl border border-border-light bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <time dateTime={post.publishedAt} className="text-xs font-semibold text-ink/50">
                  {new Date(post.publishedAt).toLocaleDateString('tr-TR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
                <h2 className="mt-2 text-lg font-bold text-navy">{post.title}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/75">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
