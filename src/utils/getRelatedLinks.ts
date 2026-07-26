import { services, getServiceBySlug } from '../data/services';
import { districts } from '../data/districts';
import { getRelatedServiceSlugs } from '../config/relatedServices';

export interface RelatedLink {
  label: string;
  path: string;
}

export interface RelatedLinksResult {
  relatedServices: RelatedLink[];
  relatedDistricts: RelatedLink[];
  home: RelatedLink;
}

export type RelatedLinksContext =
  | { type: 'service'; slug: string }
  | { type: 'district'; slug: string }
  | { type: 'generic' };

const HOME_LINK: RelatedLink = { label: 'Ana Sayfa', path: '/' };

/**
 * Her sayfa türü için ilgili hizmet/ilçe/ana sayfa bağlantılarını otomatik
 * üretir. Hiçbir yerde hardcoded link yazılmaz; tüm sonuçlar services.ts
 * ve districts.ts'teki tek kaynaktan hesaplanır.
 */
export function getRelatedLinks(context: RelatedLinksContext): RelatedLinksResult {
  if (context.type === 'service') {
    const relatedSlugs = getRelatedServiceSlugs(context.slug);
    return {
      relatedServices: relatedSlugs
        .map((slug) => getServiceBySlug(slug))
        .filter((service): service is NonNullable<typeof service> => Boolean(service))
        .map((service) => ({ label: service.shortTitle, path: service.path })),
      relatedDistricts: districts.map((district) => ({
        label: district.name,
        path: district.path,
      })),
      home: HOME_LINK,
    };
  }

  if (context.type === 'district') {
    return {
      relatedServices: services
        .slice(0, 3)
        .map((service) => ({ label: service.shortTitle, path: service.path })),
      relatedDistricts: districts
        .filter((district) => district.slug !== context.slug)
        .map((district) => ({ label: district.name, path: district.path })),
      home: HOME_LINK,
    };
  }

  return {
    relatedServices: services
      .slice(0, 4)
      .map((service) => ({ label: service.shortTitle, path: service.path })),
    relatedDistricts: districts.map((district) => ({ label: district.name, path: district.path })),
    home: HOME_LINK,
  };
}
