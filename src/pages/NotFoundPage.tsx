import { Link } from 'react-router-dom';
import { MapPinOff } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { Container } from '../components/ui/Container';
import { ContactButton } from '../components/ui/ContactButton';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ServiceCard } from '../components/ui/ServiceCard';
import { DistrictCard } from '../components/ui/DistrictCard';
import { InlineSiteSearch } from '../components/SiteSearch';
import { services } from '../data/services';
import { districts } from '../data/districts';
import { ROUTES } from '../config/routes';

const POPULAR_SERVICES = services.slice(0, 4);

export function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="Sayfa Bulunamadı | Tesisatçınız"
        description="Aradığınız sayfa bulunamadı. Bağlantı değişmiş veya sayfa kaldırılmış olabilir."
        canonical={ROUTES.notFound}
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

          <div className="w-full max-w-lg">
            <InlineSiteSearch />
          </div>

          <div className="mt-2 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <Link
              to={ROUTES.home}
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-navy px-6 font-semibold text-white transition-colors hover:bg-navy/90"
            >
              Ana Sayfaya Dön
            </Link>
            <Link
              to={ROUTES.homeSection.services}
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-border-light bg-white px-6 font-semibold text-navy transition-colors hover:border-blue hover:text-blue"
            >
              Hizmetleri İncele
            </Link>
            <ContactButton kind="whatsapp" label="WhatsApp" />
          </div>
        </Container>
      </section>

      <section className="bg-blue/5 py-16 md:py-20" aria-labelledby="notfound-services-heading">
        <Container className="flex flex-col gap-10">
          <SectionHeading id="notfound-services-heading" title="Popüler hizmetler" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {POPULAR_SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20" aria-labelledby="notfound-districts-heading">
        <Container className="flex flex-col gap-10">
          <SectionHeading id="notfound-districts-heading" title="Hizmet bölgeleri" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {districts.map((district) => (
              <DistrictCard
                key={district.slug}
                slug={district.slug}
                name={district.name}
                description={district.intro}
                href={district.path}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
