import { analytics } from '../config/analytics';
import { business } from '../config/business';
import { districts } from '../data/districts';
import { services } from '../data/services';

export type AnalyticsLocation =
  | 'hero'
  | 'sticky_bar'
  | 'header'
  | 'footer'
  | 'service_page'
  | 'district_page'
  | 'other';

export type LeadType = 'phone' | 'whatsapp' | 'form';

interface PageContext {
  pagePath: string;
  pageTitle: string;
  service: string;
  district: string;
}

interface LeadContext {
  pagePath?: string;
  service?: string;
  district?: string;
}

interface ClickTrackingOptions extends LeadContext {
  pageTitle?: string;
  linkUrl?: string;
  phoneNumber?: string;
  location?: AnalyticsLocation;
}

interface FormTrackingOptions extends LeadContext {
  pageTitle?: string;
  formName: string;
}

interface LeadTrackingOptions extends LeadContext {
  leadType: LeadType;
}

type GtagCommand = [string, ...unknown[]];

let initialized = false;
let lastPageViewSignature = '';

function isAnalyticsEnabled(): boolean {
  return import.meta.env.PROD && typeof window !== 'undefined';
}

function ensureInitialized(): void {
  if (!isAnalyticsEnabled() || initialized) return;
  initialized = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${analytics.measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: GtagCommand) {
      window.dataLayer.push(args);
    };

  window.gtag('js', new Date());
  window.gtag('config', analytics.measurementId, { send_page_view: false });
}

function sendEvent(eventName: string, params: Record<string, unknown>): void {
  if (!isAnalyticsEnabled()) return;
  ensureInitialized();
  window.gtag('event', eventName, params);
}

function getCurrentPath(): string {
  return window.location.pathname || '/';
}

function getCurrentTitle(): string {
  return document.title || '';
}

function inferService(pathname: string): string {
  return services.find((service) => service.path === pathname)?.slug ?? '';
}

function inferDistrict(pathname: string): string {
  return districts.find((district) => district.path === pathname)?.slug ?? '';
}

function buildPageContext(pagePath?: string, pageTitle?: string): PageContext {
  const resolvedPagePath = pagePath ?? getCurrentPath();
  return {
    pagePath: resolvedPagePath,
    pageTitle: pageTitle ?? getCurrentTitle(),
    service: inferService(resolvedPagePath),
    district: inferDistrict(resolvedPagePath),
  };
}

function getLocationFromPathname(pathname: string): AnalyticsLocation {
  if (services.some((service) => service.path === pathname)) return 'service_page';
  if (districts.some((district) => district.path === pathname)) return 'district_page';
  return 'other';
}

function resolveClickContext(options: ClickTrackingOptions): PageContext & { location: AnalyticsLocation } {
  const context = buildPageContext(options.pagePath, options.pageTitle);
  return {
    ...context,
    location: options.location ?? getLocationFromPathname(context.pagePath),
    service: options.service ?? context.service,
    district: options.district ?? context.district,
  };
}

function trackLeadEvent(options: LeadTrackingOptions & LeadContext): void {
  const context = buildPageContext(options.pagePath);
  sendEvent('generate_lead', {
    lead_type: options.leadType,
    page_path: context.pagePath,
    service: options.service ?? context.service,
    district: options.district ?? context.district,
  });
}

export function initAnalytics(): void {
  ensureInitialized();
}

export function trackPageView(pagePath: string, pageTitle: string): void {
  if (!isAnalyticsEnabled()) return;

  const signature = `${pagePath}::${pageTitle}`;
  if (signature === lastPageViewSignature) return;
  lastPageViewSignature = signature;

  ensureInitialized();
  window.gtag('event', 'page_view', {
    page_path: pagePath,
    page_location: window.location.href,
    page_title: pageTitle,
  });
}

export function trackPhoneClick(options: ClickTrackingOptions = {}): void {
  const context = resolveClickContext(options);
  sendEvent('phone_click', {
    page_path: context.pagePath,
    page_title: context.pageTitle,
    link_url: options.linkUrl ?? business.phoneHref,
    phone_number: options.phoneNumber ?? business.phoneDisplay,
    location: context.location,
  });
  trackLeadEvent({
    leadType: 'phone',
    pagePath: context.pagePath,
    service: context.service,
    district: context.district,
  });
}

export function trackWhatsAppClick(options: ClickTrackingOptions = {}): void {
  const context = resolveClickContext(options);
  sendEvent('whatsapp_click', {
    page_path: context.pagePath,
    page_title: context.pageTitle,
    link_url: options.linkUrl ?? '',
    location: context.location,
    service: context.service,
    district: context.district,
  });
  trackLeadEvent({
    leadType: 'whatsapp',
    pagePath: context.pagePath,
    service: context.service,
    district: context.district,
  });
}

export function trackFormSubmit(options: FormTrackingOptions): void {
  const context = buildPageContext(options.pagePath, options.pageTitle);
  sendEvent('lead_form_submit', {
    page_path: context.pagePath,
    page_title: context.pageTitle,
    form_name: options.formName,
    service: options.service ?? context.service,
    district: options.district ?? context.district,
  });
  trackLeadEvent({
    leadType: 'form',
    pagePath: context.pagePath,
    service: options.service ?? context.service,
    district: options.district ?? context.district,
  });
}

export function trackLead(options: LeadTrackingOptions): void {
  if (!isAnalyticsEnabled()) return;
  trackLeadEvent(options);
}
