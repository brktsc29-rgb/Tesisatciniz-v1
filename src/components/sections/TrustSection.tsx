import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { trustItems } from '../../data/trust';

export function TrustSection() {
  return (
    <section id="about" aria-labelledby="trust-heading" className="scroll-mt-20 bg-blue/5 py-16 md:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading id="trust-heading" title="Neden Bizi Tercih Etmelisiniz?" />
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id} className="flex flex-col items-start gap-3 rounded-2xl bg-white p-5 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <h3 className="text-[15px] font-bold text-navy">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink/75">{item.description}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
