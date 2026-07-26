import { business } from '../config/business';
import { getAbsoluteUrl } from './url';
import type { BreadcrumbTrailItem, StructuredData } from '../types/seo';
import type { FaqItem } from '../types/content';
import type { Service } from '../types/service';
import type { BlogPost } from '../types/blog';

/**
 * Merkezi, tip güvenli JSON-LD üretim katmanı. Doğrulanmamış hiçbir bilgi
 * (adres, koordinat, çalışma saati, fiyat aralığı, puan/yorum, sosyal profil)
 * schema içine eklenmez; business.ts'te ilgili alan boşsa schema alanı da
 * tamamen atlanır.
 */

export function buildWebSiteSchema(): StructuredData {
  return {
    '@type': 'WebSite',
    '@id': `${getAbsoluteUrl('/')}#website`,
    url: getAbsoluteUrl('/'),
    name: business.businessName,
    inLanguage: 'tr-TR',
  };
}

/**
 * LocalBusiness/Plumber şeması. business.ts'teki alanlar boşsa ilgili
 * schema.org alanı tamamen atlanır; hiçbir zaman sahte/varsayılan değer
 * üretilmez. Bugün tüm yeni alanlar (adres, koordinat, çalışma saati,
 * sosyal profil) boş olduğundan çıktı minimal kalır; ileride bu alanlar
 * doğrulanıp doldurulduğunda otomatik olarak zenginleşir.
 */
export function buildOrganizationSchema(): StructuredData {
  const schema: StructuredData = {
    '@type': 'Plumber',
    '@id': `${getAbsoluteUrl('/')}#organization`,
    name: business.businessName,
    url: getAbsoluteUrl('/'),
    areaServed: business.serviceAreas.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area.name,
    })),
  };

  if (business.phoneHref) {
    schema.telephone = business.phoneHref.replace('tel:', '');
  }

  if (business.logo) {
    schema.logo = getAbsoluteUrl(business.logo);
  }

  if (business.address) {
    schema.address = {
      '@type': 'PostalAddress',
      streetAddress: business.address,
      ...(business.city ? { addressLocality: business.city } : {}),
      addressCountry: 'TR',
    };
  }

  if (business.coordinates) {
    schema.geo = {
      '@type': 'GeoCoordinates',
      latitude: business.coordinates.lat,
      longitude: business.coordinates.lng,
    };
  }

  if (business.workingHours.length > 0) {
    schema.openingHours = business.workingHours;
  }

  const sameAs = [
    ...business.socialLinks.map((link) => link.url),
    ...(business.googleBusinessUrl ? [business.googleBusinessUrl] : []),
  ];
  if (sameAs.length > 0) {
    schema.sameAs = sameAs;
  }

  return schema;
}

export function buildBreadcrumbSchema(items: BreadcrumbTrailItem[]): StructuredData {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: getAbsoluteUrl(item.path),
    })),
  };
}

export function buildFaqSchema(faqItems: FaqItem[]): StructuredData {
  return {
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildServiceSchema(service: Service): StructuredData {
  return {
    '@type': 'Service',
    '@id': `${getAbsoluteUrl(service.path)}#service`,
    name: service.schemaName,
    description: service.schemaDescription,
    url: getAbsoluteUrl(service.path),
    provider: {
      '@id': `${getAbsoluteUrl('/')}#organization`,
    },
    areaServed: business.serviceAreas.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area.name,
    })),
  };
}

/**
 * Blog altyapısı için Article şeması. Blog henüz yayına alınmadığından
 * (noindex) bu şema fiilen indekslenmez; ilerideki yayın için altyapı
 * olarak hazırlanmıştır. Gerçek görsel olmadığından `image` alanı eklenmez.
 */
export function buildArticleSchema(post: BlogPost, path: string): StructuredData {
  return {
    '@type': 'Article',
    '@id': `${getAbsoluteUrl(path)}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    url: getAbsoluteUrl(path),
    author: {
      '@type': 'Organization',
      name: business.businessName,
    },
    publisher: {
      '@id': `${getAbsoluteUrl('/')}#organization`,
    },
  };
}

/** Bir sayfadaki birden çok şemayı tek bir @graph script'i altında birleştirir. */
export function buildJsonLdGraph(schemas: StructuredData[]): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
}
