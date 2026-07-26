/**
 * Statik/yardımcı route path'lerinin tek kaynağı. Hizmet ve ilçe path'leri
 * zaten services.ts / districts.ts içinde tek noktadan tanımlıdır ve
 * `service.path` / `district.path` üzerinden referanslanır; burada tekrar
 * edilmez. Bu dosya yalnızca birden çok dosyada literal string olarak
 * tekrarlanan sabit route'ları (ana sayfa, blog, 404, ana sayfa çapa
 * linkleri) merkezileştirir.
 */
export const ROUTES = {
  home: '/',
  blog: '/blog',
  blogPost: (slug: string) => `/blog/${slug}`,
  notFound: '/404',
  wildcard: '*',
  homeSection: {
    services: '/#services',
    howItWorks: '/#how-it-works',
    about: '/#about',
    contact: '/#contact',
    serviceAreas: '/#service-areas',
  },
} as const;
