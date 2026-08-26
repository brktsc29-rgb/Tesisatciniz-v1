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
    'Kağıthane, Şişli ve Beşiktaş’ta su ve doğalgaz tesisatı, klozet, musluk, kombi montajı ve onarım hizmetleri için servis bilgisi alın.',
  defaultOgImage: '/og-image.png',
  twitterImage: '/og-image.png',
  canonicalBase: getAbsoluteUrl('/'),
} as const;
