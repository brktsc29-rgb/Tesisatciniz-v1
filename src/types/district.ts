import type { FaqItem } from './content';

export interface District {
  slug: string;
  /** Route path, e.g. "/kagithane-su-tesisatcisi" */
  path: string;
  name: string;
  seoTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  intro: string;
  neighborhoods: string[];
  /** "Bölgede sık karşılaşılabilecek tesisat ihtiyaçları" */
  commonNeeds: string[];
  /** "Nasıl hizmet veriliyor?" paragraph(s). */
  servingDescription: string[];
  /** Slugs of related service pages to feature (defaults to all services if omitted). */
  relatedServices?: string[];
  faq: FaqItem[];
}
