import { business } from './business';
import { getAbsoluteUrl } from '../lib/url';

/**
 * Merkezi SEO varsayılanları. Sayfa başına farklı olması gereken title/
 * description/canonical değerleri (hizmet, ilçe, blog sayfaları) kendi veri
 * dosyalarında kalır; burada yalnızca site genelinde paylaşılan varsayılanlar
 * bulunur.
 */
export const seo = {
  siteName: business.businessName,
  brandName: business.businessName,
  defaultTitle: 'Tesisatçınız | Kağıthane, Şişli ve Beşiktaş Su Tesisatçısı',
  defaultDescription:
    'Kağıthane, Şişli ve Beşiktaş’ta su kaçağı, gider tıkanıklığı, klozet, musluk ve tesisat onarımı için servis müsaitliğini öğrenin.',
  defaultOgImage: '/og-image.svg',
  twitterImage: '/og-image.svg',
  canonicalBase: getAbsoluteUrl('/'),
} as const;
