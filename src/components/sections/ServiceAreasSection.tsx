import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { DistrictCard } from '../ui/DistrictCard';
import { districts } from '../../data/districts';

export function ServiceAreasSection() {
  return (
    <section
      id="service-areas"
      aria-labelledby="service-areas-heading"
      className="scroll-mt-20 py-16 md:py-24"
    >
      <Container className="flex flex-col gap-10">
        <SectionHeading id="service-areas-heading" title="Hizmet Bölgelerimiz" />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {districts.map((district) => (
            <DistrictCard
              key={district.slug}
              name={district.name}
              description={district.intro}
              href={district.path}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
