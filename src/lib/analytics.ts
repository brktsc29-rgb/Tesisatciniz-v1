import { analytics } from '../config/analytics';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

let initialized = false;

/**
 * GA4'ü yalnızca production build'de başlatır. Yerel geliştirme ve
 * önizleme trafiğinin gerçek analytics verisini kirletmemesi için dev'de
 * script hiç yüklenmez, hiçbir gtag çağrısı yapılmaz.
 */
export function initAnalytics(): void {
  if (!import.meta.env.PROD || initialized) return;
  initialized = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${analytics.measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag('js', new Date());
  // SPA'da sayfa geçişlerini SEOHead (bkz. trackPageView) kendimiz
  // bildiriyor; ilk yüklemede otomatik ve tekrar sayılan bir page_view
  // oluşmasın diye burada kapatılır.
  window.gtag('config', analytics.measurementId, { send_page_view: false });
}

/**
 * SEOHead her mount/güncellemede (rota değişikliği dahil) GA4'e page_view
 * gönderir. Title, document.title yerine SEOHead'in zaten senkron olarak
 * sahip olduğu prop'tan alınır (bkz. SEOHead.tsx).
 */
export function trackPageView(path: string, title: string): void {
  if (!import.meta.env.PROD || typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: title,
  });
}
