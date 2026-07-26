import { Helmet } from 'react-helmet-async';
import { getAbsoluteUrl } from '../../lib/url';
import type { StructuredData } from '../../types/seo';

interface SEOHeadProps {
  title: string;
  description: string;
  /** Site-relative path, e.g. "/su-kacagi-tespiti". Converted to an absolute canonical URL. */
  canonical: string;
  /** Site-relative image path. Defaults to the shared OG placeholder. */
  ogImage?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
  /** One or more JSON-LD schema objects (already built via lib/structuredData). */
  structuredData?: StructuredData[];
}

const DEFAULT_OG_IMAGE = '/og-image.svg';

export function SEOHead({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  type = 'website',
  noIndex = false,
  structuredData,
}: SEOHeadProps) {
  const canonicalUrl = getAbsoluteUrl(canonical);
  const ogImageUrl = getAbsoluteUrl(ogImage);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex ? <meta name="robots" content="noindex, nofollow" /> : null}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {structuredData?.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
