import type { BlogPost } from '../types/blog';

/**
 * Blog altyapısı için örnek içerik. Bu yazılar henüz yayına alınmadı
 * (sayfalar noindex); yalnızca route, şablon ve markdown desteğinin
 * hazır olduğunu göstermek amacıyla eklenmiştir.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: 'su-kacagi-belirtileri-nelerdir',
    title: 'Su kaçağı belirtileri nelerdir?',
    excerpt:
      'Duvarda nem, su faturasında artış ve diğer belirtilerin ne anlama gelebileceğine dair genel bilgiler.',
    publishedAt: '2026-01-15',
    content: `
Su kaçağı, evlerde ve iş yerlerinde fark edilmesi zaman alabilen bir tesisat sorunudur.

## Yaygın belirtiler

- Duvar veya tavanda nemlenme
- Su faturasında beklenmeyen artış
- Su sayacının kullanılmadığı hâlde hareket etmesi
- Tesisatta basınç kaybı

## Ne yapılmalı?

Bu belirtilerden birini fark ettiğinizde, durumu erken değerlendirmek ilerleyen hasarları önlemeye yardımcı olabilir. **Kesin tespit**, yerinde yapılan değerlendirme sonucunda netleşir.

Daha fazla bilgi için [Su Kaçağı Tespiti](/su-kacagi-tespiti) hizmet sayfamıza göz atabilirsiniz.
    `.trim(),
  },
  {
    slug: 'gider-tikanikliginda-yapilmasi-gerekenler',
    title: 'Gider tıkanıklığında yapılması gerekenler',
    excerpt: 'Mutfak ve banyo giderlerindeki tıkanıklıklarda dikkat edilmesi gereken noktalar.',
    publishedAt: '2026-01-22',
    content: `
Gider tıkanıklığı, günlük hayatı en çok etkileyen tesisat sorunlarından biridir.

## Tıkanıklığın olası nedenleri

- Yağ ve yemek kalıntıları
- Sabun birikintileri
- Sifon bölgesindeki tıkanıklıklar

## Değerlendirme süreci

Tıkanıklığın nedeni ve konumu değerlendirildikten sonra, boruya zarar vermeyi önceleyen bir yöntemle müdahale planlanır.

Detaylı bilgi için [Gider Tıkanıklığı Açma](/gider-tikanikligi-acma) sayfamızı inceleyebilirsiniz.
    `.trim(),
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
