import { business } from '../config/business';

/**
 * Verilen path'ten mutlak (absolute) site URL'si üretir.
 * Canonical, Open Graph ve JSON-LD alanlarında tutarlılık için tek kaynak.
 */
export function getAbsoluteUrl(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `https://${business.domain}${normalizedPath}`;
}
