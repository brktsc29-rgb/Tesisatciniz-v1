import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { howItWorksSteps } from '../../data/howItWorks';

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="scroll-mt-20 py-16 md:py-24"
    >
      <Container className="flex flex-col gap-10">
        <SectionHeading id="how-it-works-heading" title="Nasıl çalışıyoruz?" />

        <ol className="relative grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-4 md:gap-6">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[18px] hidden border-t-2 border-dashed border-border-light md:block"
          />
          {howItWorksSteps.map((step) => {
            const Icon = step.icon;
            return (
              <li key={step.id} className="relative flex flex-col items-start gap-3">
                <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
                  {step.step}
                </span>
                <Icon aria-hidden="true" className="h-6 w-6 text-navy" />
                <h3 className="text-[15px] font-bold text-navy">{step.title}</h3>
                <p className="text-sm leading-relaxed text-ink/75">{step.description}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
