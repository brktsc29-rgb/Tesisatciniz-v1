import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, 'dist');
const templatePath = join(distDir, 'index.html');
const template = readFileSync(templatePath, 'utf-8');

// dist/index.html az sonra ana sayfanın kendi prerender edilmiş içeriğiyle
// değiştirilecek. Henüz prerender edilmemiş route'lar (örn. /blog, /blog/:slug)
// için nötr/boş bir shell gerekiyor — aksi hâlde vercel.json onları
// /index.html'e yönlendirdiğinde ana sayfanın içeriğini alıp yanlış
// bileşen ağacıyla hydrate etmeye çalışırlar (hydration mismatch).
// Bu yüzden orijinal boş şablon, üzerine yazılmadan önce ayrı bir dosyaya
// kopyalanır.
writeFileSync(join(distDir, 'app-shell.html'), template, 'utf-8');

const { render, PRERENDER_ROUTES, NOT_FOUND_ROUTE } = await import(
  './dist-server/entry-server.js'
);

/**
 * React 19'un yerleşik document-metadata hoisting özelliği, render
 * ağacındaki <title>/<meta>/<link>/<style>/<script async> etiketlerini
 * SSR çıktısının başına taşır (JSON-LD gibi async olmayan <script>
 * etiketleri taşınmaz, oldukları yerde — body içinde — kalır; bu Google
 * için geçerlidir, yapılandırılmış veri hem head hem body'de desteklenir).
 * Bu fonksiyon, taşınmış etiketleri baştan art arda ayrıştırıp geri kalanı
 * (gerçek sayfa içeriği) ayrı döner. Belirli bir className'e bağlı değildir,
 * bu yüzden bileşen markup'ı değişse bile kırılmaz.
 */
const HEAD_TAG_PATTERN =
  /^(?:<title>[\s\S]*?<\/title>|<(?:meta|link)\b[^>]*\/>|<style[^>]*>[\s\S]*?<\/style>|<script\b[^>]*\/>|<script\b[^>]*>[\s\S]*?<\/script>)/;

function splitHoistedHead(html) {
  let head = '';
  let rest = html;
  for (;;) {
    const match = HEAD_TAG_PATTERN.exec(rest);
    if (!match) break;
    head += match[0];
    rest = rest.slice(match[0].length);
  }
  return { hoistedHead: head, body: rest };
}

function buildPage(hoistedHead, body) {
  let html = template;
  // Statik data-default fallback etiketlerini kaldır — artık gerçek,
  // sayfaya özgü etiketler var.
  html = html.replace(/\s*<title data-default="true">[\s\S]*?<\/title>/, '');
  html = html.replace(/\s*<meta data-default="true"[^>]*\/>/g, '');
  html = html.replace('</head>', `${hoistedHead}</head>`);
  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  return html;
}

function outputPathFor(route) {
  if (route === '/') return join(distDir, 'index.html');
  if (route === NOT_FOUND_ROUTE) return join(distDir, '404.html');
  return join(distDir, route.replace(/^\//, ''), 'index.html');
}

for (const route of PRERENDER_ROUTES) {
  const html = await render(route);
  const { hoistedHead, body } = splitHoistedHead(html);
  const page = buildPage(hoistedHead, body);
  const outPath = outputPathFor(route);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, page, 'utf-8');
  console.log('prerendered', route, '->', outPath.replace(__dirname + '/', ''));
}

rmSync(join(__dirname, 'dist-server'), { recursive: true, force: true });
console.log(`\n${PRERENDER_ROUTES.length} route prerender edildi.`);
