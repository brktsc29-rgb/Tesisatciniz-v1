/// <reference types="node" />
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Writable } from 'node:stream';
import { ContactNoticeProvider } from './hooks/ContactNoticeProvider';
import { AppRoutes } from './AppRoutes';
import { services } from './data/services';
import { districts } from './data/districts';
import { ROUTES } from './config/routes';

/**
 * Build-time statik olarak ön render edilecek bilinen route'lar.
 * services.ts/districts.ts'ten türetilir; ayrı bir liste tutulmaz.
 */
export const PRERENDER_ROUTES: string[] = [
  ROUTES.home,
  ...services.map((service) => service.path),
  ...districts.map((district) => district.path),
  ROUTES.notFound,
];

export const NOT_FOUND_ROUTE = ROUTES.notFound;

/**
 * Build-time statik ön render (SSG) için sunucu tarafı giriş noktası.
 * prerender.mjs tarafından her bilinen route için çağrılır ve tam HTML
 * string'i döner.
 *
 * react-helmet-async'in eski context-tabanlı sunucu API'si (context.helmet)
 * kullanılmaz: proje React 19 kullandığından, react-helmet-async içeride
 * React19Dispatcher'a geçiyor ve <title>/<meta>/<link> etiketlerini gerçek
 * JSX elemanı olarak render ediyor — React 19'un yerleşik "document metadata
 * hoisting" özelliği bu etiketleri renderToPipeableStream çıktısının başına
 * otomatik olarak taşıyor. prerender.mjs bu taşınmış etiketleri çıktı
 * string'inin başından ayrıştırıp gerçek <head>'e enjekte ediyor.
 *
 * renderToPipeableStream + onAllReady kasıtlı olarak kullanılır (renderToString
 * yerine): AppRoutes içindeki React.lazy sayfa bileşenleri, renderToString ile
 * senkron olarak çözülemez ve yalnızca Suspense fallback'i (skeleton) render
 * edilirdi. onAllReady, tüm lazy import'lar çözülüp gerçek sayfa içeriği hazır
 * olana kadar bekler.
 */
export function render(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];

    const collector = new Writable({
      write(chunk: Buffer, _encoding: BufferEncoding, callback: (error?: Error | null) => void) {
        chunks.push(chunk);
        callback();
      },
    });

    const { pipe } = renderToPipeableStream(
      <HelmetProvider>
        <ContactNoticeProvider>
          <StaticRouter location={url}>
            <AppRoutes />
          </StaticRouter>
        </ContactNoticeProvider>
      </HelmetProvider>,
      {
        onAllReady() {
          pipe(collector);
          collector.on('finish', () => {
            resolve(Buffer.concat(chunks).toString('utf-8'));
          });
        },
        onError(error) {
          reject(error);
        },
      },
    );
  });
}
