import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceCard } from '../ui/ServiceCard';
import { services } from '../../data/services';

export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="scroll-mt-20 py-16 md:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          id="services-heading"
          title="Hizmetlerimiz"
          description="Su tesisatı arıza, bakım ve onarım ihtiyaçlarınız için verilen temel hizmetleri inceleyin."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} exploreHref="#contact" />
          ))}
        </div>
      </Container>
    </section>
  );
}
