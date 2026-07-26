import { SectionHeading } from './ui/SectionHeading';
import { ServiceCard } from './ui/ServiceCard';
import { getServiceBySlug } from '../data/services';
import { getRelatedServiceSlugs } from '../config/relatedServices';

interface RelatedServicesProps {
  currentSlug: string;
  title?: string;
}

/**
 * Hizmet sayfasının sonunda gösterilen "İlgili hizmetler" bloğu.
 * İçerik src/config/relatedServices.ts'teki merkezi eşlemeden gelir;
 * sayfa başına statik JSX yazılmaz.
 */
export function RelatedServices({ currentSlug, title = 'İlgili hizmetler' }: RelatedServicesProps) {
  const relatedServices = getRelatedServiceSlugs(currentSlug)
    .map((slug) => getServiceBySlug(slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  if (relatedServices.length === 0) return null;

  return (
    <section className="bg-blue/5 py-16 md:py-20" aria-labelledby="related-services-heading">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-5 md:px-8">
        <SectionHeading id="related-services-heading" title={title} />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {relatedServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
