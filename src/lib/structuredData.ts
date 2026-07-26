import { business } from '../config/business';
import { getAbsoluteUrl } from './url';
import type { BreadcrumbTrailItem, StructuredData } from '../types/seo';
import type { FaqItem } from '../types/content';
import type { Service } from '../types/service';

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

/** Bir sayfadaki birden çok şemayı tek bir @graph script'i altında birleştirir. */
export function buildJsonLdGraph(schemas: StructuredData[]): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
}
