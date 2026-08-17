import { business } from '../config/business';
import type { District } from '../types/district';

function areaDescription(slug: string): string {
  const area = business.serviceAreas.find((item) => item.slug === slug);
  if (!area) {
    throw new Error(`Bilinmeyen hizmet bölgesi slug'ı: ${slug}`);
  }
  return area.description;
}

export const districts: District[] = [
  {
    slug: 'kagithane',
    path: '/kagithane-su-tesisatcisi',
    name: 'Kağıthane',
    coordinates: { lat: 41.0819, lng: 28.9647 },
    seoTitle: 'Kağıthane Su Tesisatçısı | Tesisatçınız',
    metaDescription:
      'Kağıthane ve mahallelerinde klozet, musluk, kombi montajı ve tesisat onarım talepleri için servis müsaitliğini öğrenin.',
    heroTitle: 'Kağıthane Su Tesisatçısı',
    heroDescription:
      'Kağıthane genelinde klozet arızası, musluk ve kombi montajı ile tesisat onarımı ihtiyaçlarında servis durumunu öğrenmek için arayın veya fotoğraf gönderin.',
    intro: areaDescription('kagithane'),
    neighborhoods: [
      'Çağlayan',
      'Gültepe',
      'Çeliktepe',
      'Seyrantepe',
      'Hamidiye',
      'Nurtepe',
      'Sultan Selim',
      'Emniyet Evleri',
      'Merkez',
      'Ortabayır',
      'Şirintepe',
      'Yeşilce',
    ],
    commonNeeds: [
      'Apartman ve site su tesisatında kaçak kontrolü',
      'Mutfak ve banyo giderlerinde tıkanıklık',
      'Eski yapı stoğuna bağlı tesisat arızaları',
      'Klozet ve rezervuar bakımı',
      'Kombi montajı ve tesisat bağlantısı',
    ],
    servingDescription: [
      'Kağıthane\'nin tüm mahallelerine hizmet verilebilmektedir. Talebiniz alındıktan sonra servis zamanı, ustanın o anki programı ve bölgedeki müsaitliğine göre belirlenir.',
      'Arıza türü ve konum bilgisi paylaşıldığında, müdahale kapsamı ve olası ücret hakkında işleme başlanmadan önce bilgi verilir.',
    ],
    faq: [
      {
        id: 'kagithane-tum-mahalleler',
        question: 'Kağıthane\'nin her mahallesine hizmet veriyor musunuz?',
        answer:
          'Evet, Kağıthane\'nin tüm mahallelerine hizmet verilebilmektedir. Servis zamanı, ustanın o anki programına ve bölgedeki müsaitliğe göre değişebilir.',
      },
      {
        id: 'kagithane-ne-kadar-surede',
        question: 'Kağıthane\'de servis talebine ne kadar sürede dönüş yapılır?',
        answer:
          'Talebiniz iletildikten sonra mümkün olan en kısa sürede dönüş yapılmaya çalışılır. Kesin zaman, ustanın o anki programına bağlıdır.',
      },
      {
        id: 'kagithane-eski-bina',
        question: 'Eski binalarda tesisat arızası için de hizmet alabilir miyim?',
        answer:
          'Evet. Eski tesisat yapısına sahip binalarda görülen arıza, kaçak ve tıkanıklık talepleri için de servis müsaitliği değerlendirilir.',
      },
      {
        id: 'kagithane-kombi',
        question: 'Kağıthane\'de kombi montajı için de destek alabilir miyim?',
        answer:
          'Evet, kombi montajı ve tesisat bağlantısı talepleri değerlendirilir. Baca, gaz hattı ve ilk çalıştırma gibi işlemler ilgili yetkili kuruluş veya marka servisi gerektirebilir.',
      },
    ],
  },
  {
    slug: 'sisli',
    path: '/sisli-su-tesisatcisi',
    name: 'Şişli',
    coordinates: { lat: 41.0602, lng: 28.9877 },
    seoTitle: 'Şişli Su Tesisatçısı | Tesisatçınız',
    metaDescription:
      'Şişli ve çevresinde klozet, musluk, kombi montajı ve tesisat onarımı için servis bilgisi alın.',
    heroTitle: 'Şişli Su Tesisatçısı',
    heroDescription:
      'Şişli ve çevresindeki semtlerde su tesisatı arıza, tıkanıklık ve onarım taleplerinde servis müsaitliğini öğrenmek için arayın veya WhatsApp\'tan fotoğraf gönderin.',
    intro: areaDescription('sisli'),
    neighborhoods: [
      'Mecidiyeköy',
      'Fulya',
      'Esentepe',
      'Gülbahar',
      '19 Mayıs',
      'Feriköy',
      'Teşvikiye',
      'Nişantaşı',
      'Osmanbey',
      'Bomonti',
      'Kurtuluş',
      'Harbiye',
    ],
    commonNeeds: [
      'Yoğun yerleşim bölgelerinde gider tıkanıklığı',
      'İş yeri ve konut tesisatında su kaçağı kontrolü',
      'Musluk ve batarya değişimi',
      'Klozet ve rezervuar tamiri',
      'Kombi montajı ve tesisat uyumluluğu değerlendirmesi',
    ],
    servingDescription: [
      'Şişli\'nin merkez ve çevre semtlerinde hizmet verilmektedir. Nişantaşı, Osmanbey, Bomonti ve Kurtuluş gibi semt isimleri de aynı hizmet bölgesi kapsamında değerlendirilir.',
      'Servis zamanı, talebin niteliği ve ustanın o anki müsaitliğine göre belirlenir; sabit bir adres veya şube üzerinden değil, talep bazlı olarak planlanır.',
    ],
    faq: [
      {
        id: 'sisli-nisantasi-osmanbey',
        question: 'Nişantaşı veya Osmanbey\'de de hizmet alabilir miyim?',
        answer:
          'Evet. Nişantaşı, Osmanbey, Bomonti ve Kurtuluş gibi semtler Şişli hizmet bölgesi kapsamında değerlendirilir.',
      },
      {
        id: 'sisli-is-yeri',
        question: 'İş yerlerinde de tesisat hizmeti veriyor musunuz?',
        answer:
          'Evet, konut dışında iş yerlerindeki su tesisatı arıza ve tıkanıklık talepleri de değerlendirilir.',
      },
      {
        id: 'sisli-randevu',
        question: 'Şişli\'de servis için nasıl randevu alınır?',
        answer:
          'Telefonla arayarak veya WhatsApp\'tan sorununuzun fotoğrafını göndererek talebinizi iletebilirsiniz. Müsaitlik değerlendirildikten sonra size dönüş yapılır.',
      },
      {
        id: 'sisli-sube',
        question: 'Şişli\'de sabit bir ofisiniz veya şubeniz var mı?',
        answer:
          'Hizmet, sabit bir ofis veya şube üzerinden değil, talep bazlı servis planlaması ile yürütülmektedir.',
      },
    ],
  },
  {
    slug: 'besiktas',
    path: '/besiktas-su-tesisatcisi',
    name: 'Beşiktaş',
    coordinates: { lat: 41.0430, lng: 29.0061 },
    seoTitle: 'Beşiktaş Su Tesisatçısı | Tesisatçınız',
    metaDescription:
      'Beşiktaş, Etiler, Levent, Gayrettepe ve çevresinde tesisat arıza, klozet, musluk ve kombi montajı için servis müsaitliğini öğrenin.',
    heroTitle: 'Beşiktaş Su Tesisatçısı',
    heroDescription:
      'Beşiktaş ve çevresinde su tesisatı arıza, kaçak ve tıkanıklık ihtiyaçlarında temiz ve kontrollü bir müdahale için servis müsaitliğini öğrenin.',
    intro: areaDescription('besiktas'),
    neighborhoods: [
      'Etiler',
      'Levent',
      'Gayrettepe',
      'Dikilitaş',
      'Ortaköy',
      'Ulus',
      'Akat',
      'Bebek',
      'Nisbetiye',
      'Balmumcu',
      'Arnavutköy',
      'Kuruçeşme',
    ],
    commonNeeds: [
      'Site ve apartman yönetimlerinde randevulu servis ihtiyacı',
      'Su kaçağı ve nem şikayetleri',
      'Klozet, rezervuar ve batarya bakımı',
      'Mutfak ve banyo gideri tıkanıklığı',
      'Kombi montajı ve tesisat bağlantı kontrolü',
    ],
    servingDescription: [
      'Beşiktaş\'ın merkez ve çevre mahallelerinde, randevu düzenine uygun şekilde hizmet verilmektedir. Müdahale öncesinde mülkün korunmasına ve temiz çalışmaya özen gösterilir.',
      'Servis zamanı ustanın o anki müsaitliğine göre belirlenir; talep türü ve konum bilgisi paylaşıldıktan sonra yapılacak işlem ve ücret hakkında önceden bilgi verilir.',
    ],
    faq: [
      {
        id: 'besiktas-site-yonetimi',
        question: 'Site veya apartman yönetimleri için randevulu servis mümkün mü?',
        answer:
          'Evet, site ve apartman yönetimlerinin talepleri de değerlendirilir. Randevu zamanı ustanın müsaitliğine göre birlikte planlanır.',
      },
      {
        id: 'besiktas-etiler-levent',
        question: 'Etiler ve Levent bölgesinde de hizmet veriyor musunuz?',
        answer:
          'Evet, Etiler, Levent, Gayrettepe ve Beşiktaş\'ın diğer mahalleleri aynı hizmet bölgesi kapsamındadır.',
      },
      {
        id: 'besiktas-temiz-calisma',
        question: 'Müdahale sırasında mülk nasıl korunur?',
        answer:
          'Çalışma alanı mümkün olduğunca korunur ve işlem sonrasında temiz bırakılır. İşleme başlanmadan önce yapılacak müdahale hakkında bilgi verilir.',
      },
      {
        id: 'besiktas-fiyat',
        question: 'Beşiktaş\'ta hizmet bedeli farklı mı oluyor?',
        answer:
          'Ücret, bölgeye göre değil; arızanın türüne, müdahalenin kapsamına ve kullanılan malzemeye göre belirlenir ve işlem öncesinde açıklanır.',
      },
    ],
  },
];
