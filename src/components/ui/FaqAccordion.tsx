import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/cn';
import type { FaqItem } from '../../types/content';

interface FaqAccordionProps {
  items: FaqItem[];
  /** Unique namespace so duplicate ids across pages never collide (e.g. service slug). */
  idPrefix?: string;
}

/**
 * Erişilebilir, tek seferde bir panel açık tutan accordion. Ana sayfa,
 * hizmet ve ilçe sayfalarındaki FAQ bölümlerinin tamamı bu bileşeni
 * paylaşır.
 */
export function FaqAccordion({ items, idPrefix = 'faq' }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="mx-auto w-full max-w-3xl divide-y divide-border-light border-t border-b border-border-light">
      {items.map((item) => {
        const isOpen = item.id === openId;
        const triggerId = `${idPrefix}-trigger-${item.id}`;
        const panelId = `${idPrefix}-panel-${item.id}`;

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
  );
}
