import type { LucideIcon } from 'lucide-react';

export interface QuickProblem {
  id: string;
  label: string;
  icon: LucideIcon;
  /** Route path this problem should route the user to. */
  href: string;
}

export interface TrustItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CompletedWork {
  id: string;
  title: string;
  area: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavMenuItem {
  label: string;
  /** Present for simple (non-dropdown) nav items. */
  href?: string;
  /** Present for dropdown nav items (e.g. Hizmetler, Hizmet Bölgeleri). */
  children?: NavLink[];
}
