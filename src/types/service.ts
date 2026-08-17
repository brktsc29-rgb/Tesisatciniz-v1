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
  /** Gerçek bir fotoğraf sağlanırsa public/images/services/** altındaki yolu; yoksa ikon tabanlı illüstrasyon gösterilir. */
  src?: string;
  alt: string;
  placeholderIcon: LucideIcon;
  placeholderTone: 'navy' | 'blue' | 'teal';
}

export interface ServiceInfoBox {
  title: string;
  description: string;
}

export interface ServiceMiniCallout {
  variant: 'info' | 'tip' | 'warning';
  text: string;
}

export interface Service {
  slug: string;
  /** Route path, e.g. "/klozet-rezervuar-tamiri" */
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
  /** "Hizmet öncesinde bilmeniz gerekenler" — servise özel hazırlık notları. */
  beforeServiceNotes: string[];
  /** "Hizmet sonrası öneriler" — sayfa sonunda gösterilir. */
  afterServiceTips: string[];
  /** "Kullanıcıların en sık yaptığı hatalar" */
  commonMistakes: string[];
  /** Sayfa içine doğal şekilde dağıtılan küçük bilgi kutuları. */
  miniCallouts: ServiceMiniCallout[];
}
