import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Container } from '../ui/Container';
import type { BreadcrumbTrailItem } from '../../types/seo';

interface BreadcrumbsProps {
  items: BreadcrumbTrailItem[];
}

/**
 * Görsel breadcrumb navigasyonu. JSON-LD BreadcrumbList şeması aynı `items`
 * dizisinden lib/structuredData.ts içindeki buildBreadcrumbSchema ile
 * sayfa bileşeninde ayrıca üretilir; veri tekrarı olmaması için tek kaynak
 * budur.
 */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Sayfa içi konum" className="border-b border-border-light bg-surface">
      <Container>
        <ol className="flex flex-wrap items-center gap-1.5 py-3 text-[13px] text-ink/60">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-1.5">
                {index > 0 ? (
                  <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-ink/30" />
                ) : null}
                {isLast ? (
                  <span aria-current="page" className="font-semibold text-navy">
                    {item.label}
                  </span>
                ) : (
                  <Link to={item.path} className="transition-colors hover:text-blue">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
