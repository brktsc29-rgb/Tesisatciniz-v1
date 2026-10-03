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
  defaultTitle: 'Kağıthane, Şişli ve Beşiktaş Su Tesisatçısı | Tesisatçınız',
  defaultDescription:
    'Kağıthane, Şişli ve Beşiktaş’ta klozet, rezervuar, musluk ve su tesisatı arızaları için servis bilgisini telefonla alın veya WhatsApp’tan fotoğraf gönderin.',
  defaultOgImage: '/og-image.png',
  twitterImage: '/og-image.png',
  canonicalBase: getAbsoluteUrl('/'),
} as const;
