import type { LucideIcon } from 'lucide-react';

export interface QuickProblem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TrustItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface HowItWorksStep {
  id: string;
  step: number;
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

export interface NavItem {
  label: string;
  href: string;
}
