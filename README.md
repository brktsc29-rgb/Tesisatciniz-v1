# Tesisatçınız

Kağıthane, Şişli ve Beşiktaş bölgelerinde su tesisatı arıza, bakım ve onarım hizmeti sunan
Tesisatçınız için mobil öncelikli, tamamen responsive kurumsal web sitesi.

Ana sayfanın yanında hizmet ve ilçe detay sayfaları, site içi arama, özel 404 sayfası ve
henüz `noindex` durumundaki blog altyapısı bulunur. Yönetim paneli, Supabase entegrasyonu,
kullanıcı girişi ve komisyon sistemi kapsam dışındadır.

## Teknoloji

- React + TypeScript (strict)
- Vite
- Tailwind CSS v4
- React Router
- Lucide React
- React Helmet Async

## Geliştirme

```bash
npm install
npm run dev       # geliştirme sunucusu
npm run build     # tip kontrolü + production build
npm run lint      # oxlint
npm run test      # Vitest birim ve veri bütünlüğü testleri
```

## İşletme bilgileri

Tüm işletme bilgileri (`businessName`, telefon, WhatsApp numarası, hizmet bölgeleri vb.)
`src/config/business.ts` dosyasından yönetilir. Telefon ve WhatsApp numarası netleşene kadar
bu dosyadaki `phoneDisplay`, `phoneHref` ve `whatsappNumber` alanları boş bırakılmalıdır;
ilgili bileşenler bu durumda kırık bağlantı üretmek yerine kullanıcıya bir bildirim gösterir.

## Klasör yapısı

```
src/
  components/
    layout/     TopBar, Header, MobileMenu, Footer, MobileStickyContactBar
    sections/   Ana sayfa bölümleri (Hero, Hizmetler, SSS vb.)
    ui/         Yeniden kullanılabilir arayüz bileşenleri
  config/       Merkezi işletme ayarları
  data/         Statik içerik verileri (hizmetler, SSS, bölgeler vb.)
  hooks/        Paylaşılan React hook'ları
  lib/          Bağımsız yardımcı fonksiyonlar
  pages/        Rota bileşenleri
  types/        Paylaşılan TypeScript tipleri
```
