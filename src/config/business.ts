import type { BusinessConfig } from '../types/business';

const serviceAreas: BusinessConfig['serviceAreas'] = [
  {
    slug: 'kagithane',
    name: 'Kağıthane',
    description:
      'Çağlayan, Gültepe, Çeliktepe, Seyrantepe, Hamidiye, Nurtepe, Sultan Selim ve çevresi.',
  },
  {
    slug: 'sisli',
    name: 'Şişli',
    description:
      'Mecidiyeköy, Fulya, Esentepe, Gülbahar, Feriköy, Teşvikiye, Nişantaşı ve çevresi.',
  },
  {
    slug: 'besiktas',
    name: 'Beşiktaş',
    description: 'Etiler, Levent, Gayrettepe, Ortaköy, Ulus, Akatlar, Bebek ve çevresi.',
  },
];

/**
 * Tek merkezi işletme ayarları dosyası.
 * Telefon/WhatsApp numarası netleşene kadar bu alanlar boş bırakılmalıdır.
 * Boş bırakıldığında ilgili bileşenler otomatik olarak kırık bağlantı üretmez.
 *
 * Faz 2.2 ile eklenen workingHours/googleBusinessUrl/reviewUrl/coordinates/
 * address/city alanları aynı prensiple boş bırakılmıştır; doğrulanmadan
 * doldurulmaz ve hiçbir bileşen bunları zorunlu kullanmaz. `logo` alanı
 * onaylı marka varlığıyla (public/brand/logo.svg, şeffaf zemin) dolduruldu.
 */
export const business: BusinessConfig = {
  businessName: 'Tesisatçınız',
  domain: 'tesisatciniz.com',

  phoneDisplay: '',
  phoneHref: '',

  whatsappNumber: '',
  whatsappMessage:
    'Merhaba, tesisatciniz.com web sitesinden ulaşıyorum. Tesisat sorunum hakkında bilgi almak istiyorum.',

  email: '',

  serviceAreas,

  workingMessage: 'Servis zamanı ustanın mevcut programına göre belirlenir.',

  socialLinks: [],

  logo: '/brand/logo.svg',
  workingHours: [],
  googleBusinessUrl: '',
  reviewUrl: '',
  coordinates: null,
  address: '',
  city: '',
  districts: serviceAreas.map((area) => area.name),
};
