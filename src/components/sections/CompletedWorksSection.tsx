import { MapPin, Wrench } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ResponsiveImage } from '../ui/ResponsiveImage';
import { completedWorks } from '../../data/completedWorks';

export function CompletedWorksSection() {
  return (
    <section
      id="completed-works"
      aria-labelledby="completed-works-heading"
      className="scroll-mt-20 py-16 md:py-24"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10">
        <Container>
          <SectionHeading
            id="completed-works-heading"
            align="left"
            title="Son yapılan çalışmalar"
          />
        </Container>

        <div
          role="region"
          aria-label="Son yapılan çalışmalar, yatay kaydırmalı liste"
          tabIndex={0}
          className="scrollbar-none flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 md:px-8"
        >
          {completedWorks.map((work) => (
            <article
              key={work.id}
              className="w-[260px] shrink-0 snap-start rounded-2xl border border-border-light bg-white p-4 sm:w-[300px]"
            >
              <ResponsiveImage
                src={work.imageSrc}
                alt={work.imageAlt}
                width={400}
                height={300}
                rounded="xl"
                placeholderIcon={Wrench}
                placeholderTone="teal"
                className="w-full"
              />
              <h3 className="mt-4 text-base font-bold text-navy">{work.title}</h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-ink/60">
                <MapPin aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
                {work.area}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{work.description}</p>
            </article>
          ))}
          <div aria-hidden="true" className="w-1 shrink-0" />
        </div>
      </div>
    </section>
  );
}
