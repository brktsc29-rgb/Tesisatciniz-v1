import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ProcessSteps } from '../ui/ProcessSteps';
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
        <ProcessSteps steps={howItWorksSteps} />
      </Container>
    </section>
  );
}
