import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { FaqAccordion } from '../ui/FaqAccordion';
import { faqItems } from '../../data/faqs';

export function FAQSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-20 py-16 md:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading id="faq-heading" title="Sık sorulan sorular" />
        <FaqAccordion items={faqItems} idPrefix="home-faq" />
      </Container>
    </section>
  );
}
