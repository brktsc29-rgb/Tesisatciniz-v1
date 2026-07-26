import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Route değişimlerinde iki davranışı yönetir:
 * 1. Hash varsa (örn. footer/breadcrumb'daki "/#section" bağlantıları),
 *    hedef bölüme kaydırır. Aynı sayfa içi düz "#section" bağlantıları
 *    tarayıcının doğal davranışıyla zaten çalışır; bu özellikle sayfa
 *    değişimiyle birlikte gelen hash'i hedefler.
 * 2. Hash yoksa, yeni sayfanın en üstünden başlaması için scroll'u sıfırlar.
 */
export function useScrollToHash(): void {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      return undefined;
    }

    const id = location.hash.slice(1);

    const scrollToTarget = () => {
      const target = document.getElementById(id);
      if (!target) return false;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return true;
    };

    if (scrollToTarget()) return undefined;

    const timeoutId = window.setTimeout(scrollToTarget, 60);
    return () => window.clearTimeout(timeoutId);
  }, [location]);
}
