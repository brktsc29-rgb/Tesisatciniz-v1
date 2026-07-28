import { Toilet, Droplet, Bath, Wrench, Flame } from 'lucide-react';
import type { Service } from '../types/service';

export const services: Service[] = [
  {
    slug: 'klozet-rezervuar-tamiri',
    path: '/klozet-rezervuar-tamiri',
    title: 'Klozet ve rezervuar tamiri',
    shortTitle: 'Klozet Tamiri',
    cardDescription: 'Klozet arızaları, rezervuar su kaçırma ve dolum sorunlarının giderilmesi.',
    seoTitle: 'Klozet ve Rezervuar Tamiri | Tesisatçınız',
    metaDescription:
      'Klozet akıntısı, rezervuar dolmama, su kaçırma ve sifon arızalarında servis müsaitliğini öğrenin.',
    heroTitle: 'Klozet ve Rezervuar Tamiri',
    heroDescription:
      'Rezervuarın sürekli su alması, sifonun çalışmaması veya klozete su akması gibi arızalarda servis müsaitliğini öğrenin.',
    intro:
      'Klozet ve rezervuar arızaları genellikle şamandıra, iç takım veya bağlantı noktalarındaki aşınmadan kaynaklanır. Arıza yerinde değerlendirilir ve gerekirse parça değişimi öncesinde malzeme ile işçilik bilgisi paylaşılır.',
    image: {
      src: '/images/services/toilet/hero.jpg',
      alt: 'Klozet ve rezervuar tamiri yapan tesisatçı',
      placeholderIcon: Toilet,
      placeholderTone: 'teal',
    },
    icon: Toilet,
    symptoms: [
      { label: 'Rezervuarın sürekli su alması' },
      { label: 'Klozet içine su akması' },
      { label: 'Sifonun çalışmaması' },
      { label: 'Rezervuarın dolmaması' },
      { label: 'Bağlantı noktalarında su kaçırma' },
    ],
    processSteps: [
      { title: 'Talebi iletin', description: 'Arızayı telefonla veya WhatsApp\'tan bildirin.' },
      {
        title: 'Belirtileri paylaşın',
        description: 'Rezervuar, sifon veya bağlantı noktasındaki sorunu ve konumu belirtin.',
      },
      {
        title: 'Değerlendirme yapılır',
        description: 'Şamandıra, iç takım ve bağlantı noktaları kontrol edilerek gerekli işlem netleştirilir.',
      },
      {
        title: 'Onay sonrası işlem',
        description: 'Parça değişimi gerekiyorsa malzeme ve işçilik bilgisi paylaşılıp onayınızla devam edilir.',
      },
    ],
    pricingFactors: [
      'Arızanın türü',
      'Kullanılan malzeme',
      'Ek parça gereksinimi',
      'Çalışma süresi',
    ],
    relatedServices: ['musluk-batarya-degisimi', 'lavabo-evye-tikanikligi', 'tesisat-ariza-onarim'],
    faq: [
      {
        id: 'klozet-parca-getiriliyor-mu',
        question: 'Şamandıra veya iç takım gibi parçalar yanınızda bulunuyor mu?',
        answer:
          'Sık karşılaşılan arızalara yönelik parçalar genellikle temin edilebilir; özel model bir rezervuar söz konusuysa parça teminine bağlı olarak süre değişebilir.',
      },
      {
        id: 'klozet-surekli-su-akmasi',
        question: 'Rezervuar sürekli su alıyor, bu ne anlama gelir?',
        answer:
          'Bu genellikle şamandıra veya iç takımdaki bir aşınmadan kaynaklanır. Yerinde kontrol edilerek nedeni belirlenir.',
      },
      {
        id: 'klozet-marka-fark',
        question: 'Klozet ve rezervuar markasına göre işlem değişir mi?',
        answer:
          'Evet, marka ve modele göre parça uyumluluğu değişebilir; bu durum yerinde değerlendirme sırasında netleştirilir.',
      },
      {
        id: 'klozet-degisim-mi-tamiri-mi',
        question: 'Rezervuar değişmeli mi, tamir yeterli mi?',
        answer:
          'Arızanın kapsamına göre önce onarım seçeneği değerlendirilir; gerekli değişim durumunda bu durum önceden açıklanır.',
      },
    ],
    schemaName: 'Klozet ve Rezervuar Tamiri',
    schemaDescription:
      'Kağıthane, Şişli ve Beşiktaş bölgelerinde klozet ve rezervuar arızalarına yönelik onarım hizmeti.',
    beforeServiceNotes: [
      'Arızanın ne zaman başladığını belirtmeniz değerlendirmeyi kolaylaştırır.',
      'Rezervuarın marka veya modelini biliyorsanız paylaşmanız faydalı olur.',
      'Bazı durumlarda parça teminine bağlı olarak ek süre gerekebilir.',
    ],
    afterServiceTips: [
      'İlk kullanımlarda su seviyesini gözlemleyin.',
      'Yeni takılan parçaları sert kullanmaktan kaçının.',
      'Sızıntı fark ederseniz bize bildirin.',
    ],
    commonMistakes: [
      'Klozete yabancı cisim atmak',
      'Rezervuar iç takımını uygunsuz bir parçayla değiştirmeye çalışmak',
      'Sürekli su akışını uzun süre görmezden gelmek',
    ],
    miniCallouts: [
      {
        variant: 'info',
        text: 'Rezervuarın sürekli su alması genellikle şamandıra veya iç takımdaki aşınmadan kaynaklanır.',
      },
      {
        variant: 'warning',
        text: 'Klozete ıslak mendil gibi yabancı cisimler atmak, tıkanıklığa ve rezervuar arızasına yol açabilir.',
      },
    ],
  },
  {
    slug: 'musluk-batarya-degisimi',
    path: '/musluk-batarya-degisimi',
    title: 'Musluk ve batarya değişimi',
    shortTitle: 'Musluk Değişimi',
    cardDescription: 'Damlatan veya arızalı musluk ile bataryaların onarımı ve değişimi.',
    seoTitle: 'Musluk ve Batarya Değişimi | Tesisatçınız',
    metaDescription:
      'Damlatan musluk, arızalı batarya ve bağlantı sorunlarında değişim veya onarım için servis bilgisi alın.',
    heroTitle: 'Musluk ve Batarya Değişimi',
    heroDescription:
      'Damlatan musluk, sertleşen batarya kolu veya bağlantı yerinden su kaçırma gibi durumlarda onarım ya da değişim için servis müsaitliğini öğrenin.',
    intro:
      'Musluk ve batarya arızaları çoğunlukla iç conta aşınması veya bağlantı gevşemesinden kaynaklanır. Eski parça yerinde kontrol edilir; onarım mı yoksa değişim mi gerektiği ve malzeme seçimi müşteriye açıklanır.',
    image: {
      src: '/images/services/tap/hero.jpg',
      alt: 'Musluk ve batarya değişimi yapan tesisatçı',
      placeholderIcon: Droplet,
      placeholderTone: 'blue',
    },
    icon: Droplet,
    symptoms: [
      { label: 'Musluk damlatması' },
      { label: 'Batarya kolunun sertleşmesi' },
      { label: 'Bağlantı yerinden su kaçırması' },
      { label: 'Lavabo, mutfak veya banyo bataryasında arıza' },
      { label: 'Ara musluk sorunları' },
    ],
    processSteps: [
      { title: 'Talebi iletin', description: 'Musluk veya batarya sorununu telefonla ya da WhatsApp\'tan iletin.' },
      {
        title: 'Sorunu ve modeli paylaşın',
        description: 'Damlatma, sertleşme veya kaçak gibi belirtileri ve mümkünse fotoğrafını paylaşın.',
      },
      {
        title: 'Değerlendirme yapılır',
        description: 'Eski parça yerinde kontrol edilerek onarım veya değişim seçeneği netleştirilir.',
      },
      {
        title: 'Onay sonrası işlem',
        description: 'Malzeme seçimi ve ücret bilgisi paylaşıldıktan sonra onayınızla işlem yapılır.',
      },
    ],
    pricingFactors: [
      'Arızanın türü',
      'Kullanılan malzeme',
      'Ek parça gereksinimi',
      'Çalışma süresi',
    ],
    relatedServices: ['klozet-rezervuar-tamiri', 'lavabo-evye-tikanikligi', 'tesisat-ariza-onarim'],
    faq: [
      {
        id: 'musluk-onarim-mi-degisim-mi',
        question: 'Musluk onarılabilir mi, yoksa değişim mi gerekir?',
        answer:
          'Eski parçanın durumuna göre önce onarım seçeneği değerlendirilir; iç aksamın aşınmış olması durumunda değişim önerilebilir.',
      },
      {
        id: 'musluk-malzeme-getiriyor-musunuz',
        question: 'Yeni musluk veya batarya malzemesini siz mi temin ediyorsunuz?',
        answer:
          'Genel olarak uygun malzeme temin edilebilir; özel bir marka veya model tercih ediyorsanız bu durumu önceden belirtmeniz faydalı olur.',
      },
      {
        id: 'musluk-ara-musluk',
        question: 'Ara musluk arızası için de hizmet alabilir miyim?',
        answer: 'Evet, ara musluklardaki arıza ve değişim talepleri de değerlendirilir.',
      },
      {
        id: 'musluk-ne-kadar-surer',
        question: 'Musluk değişimi ne kadar sürer?',
        answer:
          'Süre, arızanın kapsamına ve erişim koşullarına göre değişir; yerinde değerlendirme sırasında tahmini süre paylaşılır.',
      },
    ],
    schemaName: 'Musluk ve Batarya Değişimi',
    schemaDescription:
      'Kağıthane, Şişli ve Beşiktaş bölgelerinde musluk ve batarya onarım, bakım ve değişim hizmeti.',
    beforeServiceNotes: [
      'Musluğun marka veya modelini biliyorsanız belirtmeniz süreci hızlandırır.',
      'Sorunun ne zaman başladığını paylaşmanız değerlendirmeye yardımcı olur.',
      'Bazı durumlarda parça uyumluluğu için yerinde inceleme gerekebilir.',
    ],
    afterServiceTips: [
      'İlk gün bağlantı noktalarını kontrol edin.',
      'Batarya kolunu aşırı sıkmaktan kaçının.',
      'Damlama devam ederse durumu bize bildirin.',
    ],
    commonMistakes: [
      'Damlatıyor diye musluğu aşırı sıkmak',
      'Yanlış boyutta conta kullanmak',
      'Bağlantıyı uygun olmayan aletlerle sökmeye çalışmak',
    ],
    miniCallouts: [
      {
        variant: 'tip',
        text: 'Damlatan bir musluğu aşırı sıkmak yerine, iç contanın kontrol edilmesi genellikle daha etkilidir.',
      },
      {
        variant: 'info',
        text: 'Batarya kolunun sertleşmesi çoğunlukla iç mekanizmadaki aşınmadan kaynaklanır.',
      },
    ],
  },
  {
    slug: 'lavabo-evye-tikanikligi',
    path: '/lavabo-evye-tikanikligi',
    title: 'Lavabo ve evye tıkanıklığı',
    shortTitle: 'Lavabo Tıkanıklığı',
    cardDescription: 'Lavabo ve evyelerde oluşan tıkanıklıkların temizlenmesi ve giderilmesi.',
    seoTitle: 'Lavabo ve Evye Tıkanıklığı Açma | Tesisatçınız',
    metaDescription:
      'Mutfak evyesi ve lavabo tıkanıklıklarında servis müsaitliğini öğrenin, sorunun fotoğrafını WhatsApp\'tan gönderin.',
    heroTitle: 'Lavabo ve Evye Tıkanıklığı Açma',
    heroDescription:
      'Yavaş akan veya tamamen tıkanan lavabo ve evyelerde, sifon bölgesindeki tıkanıklığın giderilmesi için servis müsaitliğini öğrenin.',
    intro:
      'Lavabo ve evye tıkanıklıkları genellikle yağ, sabun veya yemek kalıntılarının sifon bölgesinde birikmesinden kaynaklanır. Tıkanıklığın konumu değerlendirildikten sonra uygun yöntemle müdahale edilir.',
    image: {
      src: '/images/services/sink/hero.jpg',
      alt: 'Lavabo ve evye tıkanıklığı açan tesisatçı',
      placeholderIcon: Bath,
      placeholderTone: 'teal',
    },
    icon: Bath,
    symptoms: [
      { label: 'Yavaş akan lavabo' },
      { label: 'Tamamen tıkanan evye' },
      { label: 'Sifon bölgesindeki tıkanıklık' },
      { label: 'Yağ ve yemek kalıntısı birikimi' },
      { label: 'Kötü koku ve geri taşma' },
    ],
    processSteps: [
      { title: 'Talebi iletin', description: 'Tıkanıklık şikayetini telefonla veya WhatsApp\'tan iletin.' },
      {
        title: 'Sorunu paylaşın',
        description: 'Lavabo mu evye mi olduğunu ve gözlemlediğiniz belirtileri belirtin.',
      },
      {
        title: 'Müsaitlik değerlendirilir',
        description: 'Sifon ve gider hattının durumu göz önünde bulundurularak servis zamanı belirlenir.',
      },
      {
        title: 'Onay sonrası müdahale',
        description: 'Müdahale yöntemi açıklandıktan sonra onayınızla işleme başlanır.',
      },
    ],
    pricingFactors: [
      'Arızanın türü',
      'Müdahalenin kapsamı',
      'Çalışma süresi',
      'Servis zamanı',
    ],
    relatedServices: ['klozet-rezervuar-tamiri', 'musluk-batarya-degisimi', 'tesisat-ariza-onarim'],
    faq: [
      {
        id: 'lavabo-yag-birikimi',
        question: 'Yağ birikimi kaynaklı tıkanıklıkta ne yapılır?',
        answer:
          'Sifon bölgesi kontrol edilir ve birikimin yapısına uygun bir yöntemle tıkanıklık giderilmeye çalışılır.',
      },
      {
        id: 'lavabo-evye-fark',
        question: 'Lavabo ve evye tıkanıklığı aynı şekilde mi çözülüyor?',
        answer:
          'Genel yaklaşım benzer olsa da, gider hattının yapısına göre yöntem farklılık gösterebilir; yerinde değerlendirilir.',
      },
      {
        id: 'lavabo-koku-var-tikanma-yok',
        question: 'Tıkanma yok ama koku var, yine de bakılır mı?',
        answer: 'Evet, koku da erken belirti olabileceğinden değerlendirmeye alınır.',
      },
      {
        id: 'lavabo-tekrarlayan-tikanma',
        question: 'Tıkanıklık sık sık tekrarlıyorsa ne önerirsiniz?',
        answer:
          'Tekrarlayan durumlarda gider hattının genel yapısı yeniden değerlendirilebilir; durumu ilettiğinizde bu konuda bilgi verilir.',
      },
    ],
    schemaName: 'Lavabo ve Evye Tıkanıklığı Açma',
    schemaDescription:
      'Kağıthane, Şişli ve Beşiktaş bölgelerinde lavabo ve evye tıkanıklıklarının giderilmesine yönelik servis hizmeti.',
    beforeServiceNotes: [
      'Tıkanıklığın lavabo mu evye mi olduğunu belirtmeniz süreci hızlandırır.',
      'Daha önce denediğiniz yöntemleri paylaşmanız değerlendirmeye yardımcı olur.',
      'Bazı durumlarda sifon bölgesi için yerinde inceleme gerekebilir.',
    ],
    afterServiceTips: [
      'İlk kullanımlarda suyu kontrollü şekilde akıtın.',
      'Yağ ve katı atık dökmekten kaçının.',
      'Tekrar tıkanma olursa durumu bize bildirin.',
    ],
    commonMistakes: [
      'Giderlere yağ dökmek',
      'Kimyasal açıcıları sık sık kullanmak',
      'Sifonu uygun olmayan aletlerle zorlamak',
    ],
    miniCallouts: [
      {
        variant: 'tip',
        text: 'Yağ ve yemek kalıntılarını lavaboya değil çöpe atmak, tıkanıklık sıklığını azaltabilir.',
      },
      {
        variant: 'info',
        text: 'Tıkanıklıklar çoğunlukla sifon bölgesinde birikim yapan kalıntılardan kaynaklanır.',
      },
    ],
  },
  {
    slug: 'tesisat-ariza-onarim',
    path: '/tesisat-ariza-onarim',
    title: 'Tesisat arıza ve onarım',
    shortTitle: 'Tesisat Onarımı',
    cardDescription: 'Boru, vana ve genel su tesisatı arızalarında onarım hizmeti.',
    seoTitle: 'Tesisat Arıza ve Onarım Hizmeti | Tesisatçınız',
    metaDescription:
      'Kağıthane, Şişli ve Beşiktaş\'ta su tesisatı arıza, bağlantı, kaçak ve onarım ihtiyaçları için servis bilgisi alın.',
    heroTitle: 'Su Tesisatı Arıza ve Onarım Hizmeti',
    heroDescription:
      'Bağlantı noktalarındaki kaçaklar, eski tesisat parçaları veya flex hortum sorunlarında arızanın yerinde değerlendirilmesi için servis müsaitliğini öğrenin.',
    intro:
      'Su tesisatındaki genel arızalar; bağlantı noktaları, flex hortumlar, ara musluklar veya sıcak-soğuk su hatlarında ortaya çıkabilir. Arıza yerinde değerlendirilir ve gerekli onarım ile küçük tesisat yenilemeleri için işlem ve malzeme bilgisi önceden paylaşılır.',
    image: {
      src: '/images/services/repair/hero.jpg',
      alt: 'Su tesisatı onarımı yapan tesisatçı',
      placeholderIcon: Wrench,
      placeholderTone: 'navy',
    },
    icon: Wrench,
    symptoms: [
      { label: 'Bağlantı noktalarındaki kaçaklar' },
      { label: 'Eski veya aşınmış tesisat parçaları' },
      { label: 'Flex hortum sorunları' },
      { label: 'Ara musluk arızaları' },
      { label: 'Sıcak ve soğuk su hattı sorunları' },
    ],
    processSteps: [
      { title: 'Talebi iletin', description: 'Arızayı telefonla veya WhatsApp\'tan bildirin.' },
      {
        title: 'Sorunu ve konumu paylaşın',
        description: 'Arızanın bulunduğu noktayı ve mümkünse görselini paylaşın.',
      },
      {
        title: 'Değerlendirme yapılır',
        description: 'Bağlantılar ve tesisat parçaları kontrol edilerek gerekli onarım kapsamı belirlenir.',
      },
      {
        title: 'Onay sonrası işlem',
        description: 'İşlem ve malzeme bilgisi paylaşıldıktan sonra onayınızla onarıma başlanır.',
      },
    ],
    pricingFactors: [
      'Arızanın türü',
      'Müdahalenin kapsamı',
      'Kullanılan malzeme',
      'Mevcut tesisatın durumu',
      'Ek parça gereksinimi',
    ],
    relatedServices: ['lavabo-evye-tikanikligi', 'klozet-rezervuar-tamiri', 'kombi-montaji'],
    faq: [
      {
        id: 'tesisat-kucuk-yenileme',
        question: 'Küçük çaplı tesisat yenilemesi de yapılıyor mu?',
        answer:
          'Evet, bağlantı noktaları ve aşınmış parçalara yönelik küçük çaplı tesisat yenilemeleri değerlendirilebilir.',
      },
      {
        id: 'tesisat-flex-hortum',
        question: 'Flex hortum değişimi için de hizmet alabilir miyim?',
        answer: 'Evet, flex hortum sorunları ve değişimi bu hizmet kapsamında değerlendirilir.',
      },
      {
        id: 'tesisat-eski-bina',
        question: 'Eski binalarda tesisat onarımı zor mu oluyor?',
        answer:
          'Eski tesisatın mevcut durumu, onarım kapsamını etkileyebilir. Bu durum yerinde değerlendirme sırasında müşteriye açıklanır.',
      },
      {
        id: 'tesisat-acil-mi',
        question: 'Tesisat arızası acil bir durumsa ne yapmalıyım?',
        answer:
          'Durumu telefonla iletmeniz, talebinizin önceliklendirilmesi açısından faydalı olur; servis zamanı yine de ustanın müsaitliğine bağlıdır.',
      },
    ],
    schemaName: 'Tesisat Arıza ve Onarım',
    schemaDescription:
      'Kağıthane, Şişli ve Beşiktaş bölgelerinde su tesisatı arıza, bağlantı ve onarım hizmeti.',
    beforeServiceNotes: [
      'Arızanın bulunduğu noktayı ve mümkünse fotoğrafını paylaşmanız süreci hızlandırır.',
      'Tesisatın yaklaşık yaşını belirtmeniz değerlendirmeye yardımcı olur.',
      'Bazı durumlarda arızanın kapsamı için yerinde inceleme gerekebilir.',
    ],
    afterServiceTips: [
      'Onarılan bölgeyi birkaç gün gözlemleyin.',
      'Ani sıcaklık değişimlerinden kaçının.',
      'Yeni bir belirti fark ederseniz bize bildirin.',
    ],
    commonMistakes: [
      'Küçük sızıntıları geciktirmek',
      'Uygun olmayan malzeme ile geçici onarım yapmaya çalışmak',
      'Bağlantıları kendi başına aşırı sıkmak',
    ],
    miniCallouts: [
      {
        variant: 'warning',
        text: 'Küçük bir sızıntının geciktirilmesi, zamanla daha kapsamlı bir onarım ihtiyacına yol açabilir.',
      },
      {
        variant: 'tip',
        text: 'Flex hortumların belirli aralıklarla kontrol edilmesi, ani su kaçaklarının önüne geçebilir.',
      },
    ],
  },
  {
    slug: 'kombi-montaji',
    path: '/kombi-montaji',
    title: 'Kombi montajı',
    shortTitle: 'Kombi Montajı',
    cardDescription:
      'Kombi sökme, yerleştirme ve mevcut tesisat bağlantılarının değerlendirilmesine yönelik montaj hizmeti.',
    seoTitle: 'Kombi Montajı ve Tesisat Bağlantısı | Tesisatçınız',
    metaDescription:
      'Kombi montajı, sökme-takma ve tesisat bağlantısı taleplerinde yapılabilecek işlemler ve servis müsaitliği hakkında bilgi alın.',
    heroTitle: 'Kombi Montajı ve Tesisat Bağlantısı',
    heroDescription:
      'Eski kombinin sökülmesi, yenisinin yerleştirilmesi ve mevcut su tesisatı bağlantılarının kontrolü için servis müsaitliğini öğrenin.',
    intro:
      'Kombi montajı; mevcut tesisatın uyumluluğunun değerlendirilmesini, su ve kalorifer tesisatı bağlantılarının kontrolünü kapsar. Baca bağlantısı, gaz hattı ve ilk çalıştırma gibi işlemler cihaz markasına ve ilgili mevzuata bağlı olarak yetkili kuruluş veya marka servisi gerektirebilir.',
    image: {
      src: '/images/services/combi/hero.jpg',
      alt: 'Kombi montajı yapan tesisatçı',
      placeholderIcon: Flame,
      placeholderTone: 'blue',
    },
    icon: Flame,
    symptoms: [
      { label: 'Eski kombinin sökülmesi gerekliliği' },
      { label: 'Yeni kombi için uygun montaj alanı ihtiyacı' },
      { label: 'Su tesisatı bağlantılarının kontrolü' },
      { label: 'Kalorifer tesisatı bağlantı ihtiyacı' },
      { label: 'Drenaj bağlantısı gerekliliği' },
    ],
    processSteps: [
      { title: 'Talebi iletin', description: 'Montaj talebinizi telefonla veya WhatsApp\'tan iletin.' },
      {
        title: 'Mevcut durumu paylaşın',
        description: 'Kombi marka/modeli, montaj alanı ve mevcut bağlantılar hakkında bilgi paylaşın.',
      },
      {
        title: 'Uygunluk değerlendirilir',
        description: 'Montaj alanı ve mevcut tesisat bağlantılarının uyumluluğu yerinde değerlendirilir.',
      },
      {
        title: 'Onay sonrası montaj',
        description: 'İşçilik, ek malzeme ve kapsam bilgisi paylaşıldıktan sonra onayınızla montaja başlanır.',
      },
    ],
    pricingFactors: [
      'Montajın kapsamı',
      'Mevcut bağlantıların uyumluluğu',
      'Ek malzeme gereksinimi',
      'Çalışma süresi',
      'Erişim koşulları',
    ],
    relatedServices: ['tesisat-ariza-onarim', 'musluk-batarya-degisimi', 'klozet-rezervuar-tamiri'],
    faq: [
      {
        id: 'kombi-gaz-acma-hizmeti-mi',
        question: 'Kombi montajı, gaz açma hizmeti anlamına mı gelir?',
        answer:
          'Hayır. Montaj hizmeti; kombinin sökülmesi, yerleştirilmesi ve mevcut su/kalorifer tesisatı bağlantılarının değerlendirilmesini kapsar. Gaz açma, baca uygunluğu ve ilk çalıştırma gibi işlemler ilgili yetkili kuruluş veya marka servisi gerektirebilir.',
      },
      {
        id: 'kombi-yetkili-servis-misiniz',
        question: 'Marka yetkili servisi misiniz?',
        answer:
          'Hayır, marka yetkili servisi olduğumuz iddia edilmemektedir. Cihazın garanti kapsamındaki işlemleri için üretici garanti şartlarının kontrol edilmesi önerilir.',
      },
      {
        id: 'kombi-ilk-calistirma-kim-yapar',
        question: 'Kombinin ilk çalıştırması kim tarafından yapılır?',
        answer:
          'İlk çalıştırma; cihaz markası, garanti koşulları ve ilgili mevzuata göre değişebilir. Bu konuda kesin bir iddia sunulmaz; gerekli hâllerde marka yetkili servisi veya yetkili kuruluşla iletişime geçilmesi gerekebilir.',
      },
      {
        id: 'kombi-mevcut-tesisat-uyumu',
        question: 'Mevcut tesisatım yeni kombiye uygun mu, nasıl anlaşılır?',
        answer:
          'Mevcut su ve kalorifer tesisatı bağlantıları yerinde değerlendirilir; uyumsuzluk veya ek malzeme ihtiyacı varsa bu durum işleme başlanmadan önce açıklanır.',
      },
    ],
    schemaName: 'Kombi Montajı',
    schemaDescription:
      'Kağıthane, Şişli ve Beşiktaş bölgelerinde kombi sökme, yerleştirme ve mevcut tesisat bağlantılarının değerlendirilmesine yönelik montaj hizmeti.',
    infoBox: {
      title: 'Kapsam hakkında bilgi',
      description:
        'Doğalgaz hattı, gaz açma, proje, baca uygunluğu ve cihazın ilk çalıştırılması gibi işlemler ilgili yetkili kuruluş veya marka servisi gerektirebilir. Hizmet kapsamı, mevcut tesisat ve cihaz koşulları değerlendirildikten sonra netleştirilir.',
    },
    beforeServiceNotes: [
      'Kombi marka ve modelini belirtmeniz süreci hızlandırır.',
      'Montaj alanının fotoğrafını paylaşmanız değerlendirmeyi kolaylaştırır.',
      'Mevcut tesisat bağlantılarının yaşını belirtmeniz faydalı olur.',
    ],
    afterServiceTips: [
      'İlk çalıştırma sonrası basınç göstergesini gözlemleyin.',
      'Cihazın kullanım kılavuzunu inceleyin.',
      'Garanti kapsamındaki işlemler için üretici ile iletişime geçin.',
    ],
    commonMistakes: [
      'Montajı uzman değerlendirmesi olmadan yaptırmak',
      'Baca ve gaz hattı kontrollerini atlamak',
      'Garanti şartlarını kontrol etmeden işlem yaptırmak',
    ],
    miniCallouts: [
      {
        variant: 'info',
        text: 'Kombi montajı; sökme, yerleştirme ve mevcut tesisat bağlantılarının değerlendirilmesini kapsar.',
      },
      {
        variant: 'warning',
        text: 'Gaz açma ve baca uygunluğu gibi işlemler, ilgili yetkili kuruluş veya marka servisi gerektirebilir.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(service: Service): Service[] {
  return service.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter((item): item is Service => Boolean(item));
}
