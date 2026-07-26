import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { faqItems } from '../../data/faq';
import { cn } from '../../lib/cn';

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-20 py-16 md:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading id="faq-heading" title="Sık sorulan sorular" />

        <div className="mx-auto w-full max-w-3xl divide-y divide-border-light border-t border-b border-border-light">
          {faqItems.map((item) => {
            const isOpen = item.id === openId;
            const triggerId = `faq-trigger-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div key={item.id}>
                <h3>
                  <button
                    type="button"
                    id={triggerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-[15px] font-semibold text-navy sm:text-base">
                      {item.question}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={cn(
                        'h-5 w-5 shrink-0 text-blue transition-transform duration-200',
                        isOpen && 'rotate-180',
                      )}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={cn(
                    'grid transition-[grid-template-rows] duration-200 ease-in-out',
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm leading-relaxed text-ink/75 sm:text-[15px]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
