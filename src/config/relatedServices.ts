import { services } from '../data/services';

/**
 * Merkezi "ilgili hizmet" eşlemesi: her hizmet slug'ı için önerilecek
 * hizmet slug'larının sırasını tutar. services.ts'teki `relatedServices`
 * alanından türetilir; böylece tek bir kaynaktan besleniyor ve iki ayrı
 * listenin birbirinden sapması (drift) mümkün olmuyor.
 */
export const relatedServicesConfig: Record<string, string[]> = Object.fromEntries(
  services.map((service) => [service.slug, service.relatedServices]),
);

export function getRelatedServiceSlugs(slug: string): string[] {
  return relatedServicesConfig[slug] ?? [];
}
