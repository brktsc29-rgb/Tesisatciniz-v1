import { ArrowRight, MapPinned } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { business } from '../../config/business';

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
          {business.serviceAreas.map((area) => (
            <div
              key={area.slug}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[3/4]"
            >
              <ResponsiveImage
                alt={`${area.name} bölgesi`}
                width={400}
                height={500}
                rounded="2xl"
                placeholderIcon={MapPinned}
                placeholderTone="navy"
                className="absolute inset-0 h-full w-full"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-navy/10"
              />
              <div className="relative flex h-full flex-col justify-end gap-2 p-5">
                <h3 className="text-lg font-bold text-white">{area.name}</h3>
                <p className="text-sm leading-relaxed text-white/85">{area.description}</p>
                <a
                  href="#contact"
                  aria-label={`${area.name} bölgesini incele`}
                  className="mt-2 flex h-10 w-10 items-center justify-center self-end rounded-full bg-white text-navy transition-transform duration-150 hover:scale-105"
                >
                  <ArrowRight aria-hidden="true" className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
