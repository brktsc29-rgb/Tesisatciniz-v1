import { Link } from 'react-router-dom';
import { MapPinOff } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { Container } from '../components/ui/Container';
import { ContactButton } from '../components/ui/ContactButton';

export function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="Sayfa Bulunamadı | Tesisatçınız"
        description="Aradığınız sayfa bulunamadı. Bağlantı değişmiş veya sayfa kaldırılmış olabilir."
        canonical="/404"
        noIndex
      />

      <section className="flex flex-col items-center justify-center py-20 text-center md:py-28">
        <Container className="flex flex-col items-center gap-6">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-blue/10 text-blue">
            <MapPinOff aria-hidden="true" className="h-8 w-8" />
          </span>

          <h1 className="text-[28px] leading-tight font-extrabold text-navy md:text-[36px]">
            Aradığınız sayfayı bulamadık
          </h1>

          <p className="max-w-md text-base leading-relaxed text-ink/75">
            Bağlantı değişmiş veya sayfa kaldırılmış olabilir.
          </p>

          <div className="mt-2 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <Link
              to="/"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-navy px-6 font-semibold text-white transition-colors hover:bg-navy/90"
            >
              Ana Sayfaya Dön
            </Link>
            <Link
              to="/#services"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-border-light bg-white px-6 font-semibold text-navy transition-colors hover:border-blue hover:text-blue"
            >
              Hizmetleri İncele
            </Link>
            <ContactButton kind="whatsapp" label="WhatsApp" />
          </div>
        </Container>
      </section>
    </>
  );
}
