import type { LucideIcon } from 'lucide-react';
import type { FaqItem } from './content';

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceSymptom {
  label: string;
}

export interface ServiceImage {
  /** Beklenen görsel yolu (public/images/services/**). Dosya henüz yoksa ResponsiveImage sessizce placeholder'a döner. */
  src?: string;
  alt: string;
  placeholderIcon: LucideIcon;
  placeholderTone: 'navy' | 'blue' | 'teal';
}

export interface ServiceInfoBox {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  /** Route path, e.g. "/su-kacagi-tespiti" */
  path: string;
  /** Homepage card / footer link title, e.g. "Su kaçağı tespiti" */
  title: string;
  /** Compact label for nav dropdowns and breadcrumbs, e.g. "Su Kaçağı" */
  shortTitle: string;
  /** Homepage service card description */
  cardDescription: string;
  seoTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  intro: string;
  image: ServiceImage;
  icon: LucideIcon;
  symptoms: ServiceSymptom[];
  processSteps: ServiceProcessStep[];
  pricingFactors: string[];
  /** Slugs of 3 related services. */
  relatedServices: string[];
  faq: FaqItem[];
  schemaName: string;
  schemaDescription: string;
  /** Optional callout box for services needing extra safety/scope clarification (e.g. kombi montajı). */
  infoBox?: ServiceInfoBox;
}
