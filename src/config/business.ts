import type { BusinessConfig } from '../types/business';

/**
 * Tek merkezi işletme ayarları dosyası.
 * Telefon/WhatsApp numarası netleşene kadar bu alanlar boş bırakılmalıdır.
 * Boş bırakıldığında ilgili bileşenler otomatik olarak kırık bağlantı üretmez.
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

  serviceAreas: [
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
  ],

  workingMessage: 'Servis zamanı ustanın mevcut programına göre belirlenir.',

  socialLinks: [],

  capabilities: {
    hasLeakDetectionDevice: false,
  },
};
