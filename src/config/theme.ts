/**
 * Merkezi tasarım token'ları. Tailwind v4 CSS-first `@theme` bloğu
 * (src/index.css) renk, font ve container ölçeğini yönetir ve tasarım
 * dilinin tek kaynağıdır; bu dosya değiştirilmez. `theme.ts` bunun yerine
 * JS/inline-style tarafında ihtiyaç duyulan sayısal değerleri (gecikme
 * süreleri, piksel senkronizasyonu, z-index katmanları) tek noktadan
 * yönetmek için var — Tailwind class'ları derleme zamanında sabittir ve
 * bir JS sabitinden okunamaz, bu yüzden var olan class değerleri (örn.
 * `rounded-xl`, `duration-150`, `z-50`) kasıtlı olarak değiştirilmedi.
 * Aşağıdaki sayılar, mevcut Tailwind class'larıyla birebir eşleşecek
 * şekilde belgelenmiştir; yeni bir yerde aynı değer gerektiğinde JS
 * tarafında buradan okunmalıdır.
 */
export const theme = {
  radius: {
    md: 12, // rounded-xl
    lg: 16, // rounded-2xl
    full: 9999,
  },
  spacing: {
    sectionYMobile: 64, // py-16
    sectionYDesktop: 96, // md:py-24
    /** MobileStickyContactBar yüksekliği; Layout'taki boşluk div'i ile birebir senkronize tutulur. */
    mobileStickyBarHeight: 56,
  },
  shadow: {
    sm: '0 1px 2px rgba(16, 42, 67, 0.06)',
    md: '0 4px 12px rgba(16, 42, 67, 0.08)',
    stickyBar: '0 -6px 20px rgba(16, 42, 67, 0.14)',
  },
  duration: {
    fast: 150,
    base: 200,
    /** ContactNoticeToast'ın ekranda kalma süresi. */
    toast: 3500,
  },
  zIndex: {
    dropdown: 30,
    header: 40,
    stickyBar: 40,
    modal: 50,
    skipLink: 100,
  },
  layout: {
    headerHeightMobile: 64,
    headerHeightDesktop: 72,
    containerMaxWidth: 1200,
  },
} as const;
