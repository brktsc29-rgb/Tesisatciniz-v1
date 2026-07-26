import { MapPin } from 'lucide-react';
import { Container } from '../ui/Container';

export function TopBar() {
  return (
    <div className="bg-navy text-white">
      <Container className="flex items-center justify-between gap-3 py-2 text-xs sm:text-sm">
        <p className="flex min-w-0 items-center gap-1.5">
          <MapPin aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-teal" />
          <span className="truncate">
            Kağıthane, Şişli ve Beşiktaş bölgelerinde hizmet veriyoruz.
          </span>
        </p>
        <p className="hidden shrink-0 font-medium md:block">Servis müsaitliği için arayın.</p>
      </Container>
    </div>
  );
}
