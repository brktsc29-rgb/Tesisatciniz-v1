import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from './ui/Container';
import { services } from '../data/services';

interface ServicePrevNextProps {
  currentSlug: string;
}

/**
 * Hizmet sayfaları arasında dolaşmayı sağlayan önceki/sonraki gezinme
 * çubuğu. Merkezi services.ts listesindeki sıraya göre hesaplanır ve
 * son hizmetten sonra ilk hizmete, ilk hizmetten önce son hizmete
 * döner (döngüsel).
 */
export function ServicePrevNext({ currentSlug }: ServicePrevNextProps) {
  const currentIndex = services.findIndex((service) => service.slug === currentSlug);
  if (currentIndex === -1 || services.length < 2) return null;

  const previousService = services[(currentIndex - 1 + services.length) % services.length];
  const nextService = services[(currentIndex + 1) % services.length];
  if (!previousService || !nextService) return null;

  return (
    <nav aria-label="Hizmetler arasında gezinme" className="border-b border-border-light bg-white">
      <Container className="flex items-center justify-between gap-3 py-3 text-sm">
        <Link
          to={previousService.path}
          className="flex min-w-0 items-center gap-1.5 font-semibold text-ink transition-colors hover:text-blue"
        >
          <ChevronLeft aria-hidden="true" className="h-4 w-4 shrink-0" />
          <span className="truncate">Önceki: {previousService.shortTitle}</span>
        </Link>
        <Link
          to={nextService.path}
          className="flex min-w-0 items-center gap-1.5 text-right font-semibold text-ink transition-colors hover:text-blue"
        >
          <span className="truncate">Sonraki: {nextService.shortTitle}</span>
          <ChevronRight aria-hidden="true" className="h-4 w-4 shrink-0" />
        </Link>
      </Container>
    </nav>
  );
}
