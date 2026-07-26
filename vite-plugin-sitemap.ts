import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type { Plugin } from 'vite';
import { business } from './src/config/business';
import { services } from './src/data/services';
import { districts } from './src/data/districts';

/**
 * Production build sırasında dist/sitemap.xml üretir. Tek kaynak olarak
 * services.ts ve districts.ts kullanılır; böylece uygulamadaki gerçek
 * route listesiyle sitemap her zaman senkron kalır. 404 sayfası kasıtlı
 * olarak eklenmez. lastmod, priority ve changefreq kullanılmaz; build
 * zamanına bağlı sahte/gereksiz değişen değerler üretmemek için bilinçli
 * bir tercihtir.
 */
export function sitemapPlugin(): Plugin {
  return {
    name: 'generate-sitemap',
    apply: 'build',
    closeBundle() {
      const paths = ['/', ...services.map((s) => s.path), ...districts.map((d) => d.path)];

      const urlEntries = paths
        .map((path) => `  <url>\n    <loc>https://${business.domain}${path}</loc>\n  </url>`)
        .join('\n');

      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

      writeFileSync(resolve(import.meta.dirname, 'dist/sitemap.xml'), xml, 'utf-8');
    },
  };
}
