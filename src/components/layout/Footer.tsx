import { Mail } from 'lucide-react';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';
import { ContactButton } from '../ui/ContactButton';
import { business } from '../../config/business';
import { primaryNavigation } from '../../data/navigation';
import { services } from '../../data/services';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <Container className="py-14 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          <div className="md:col-span-1">
            <Logo tone="inverted" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Tesisatçınız; Kağıthane, Şişli ve Beşiktaş bölgelerinde su tesisatı arıza, bakım ve
              onarım taleplerine yönelik yerel servis hizmeti sunar.
            </p>
          </div>

          <nav aria-label="Hizmetler" className="md:col-span-1">
            <h2 className="text-sm font-bold tracking-wide text-white uppercase">Hizmetler</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Hizmet bölgeleri" className="md:col-span-1">
            <h2 className="text-sm font-bold tracking-wide text-white uppercase">
              Hizmet Bölgeleri
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {business.serviceAreas.map((area) => (
                <li key={area.slug}>
                  <a
                    href="#service-areas"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {area.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-1">
            <h2 className="text-sm font-bold tracking-wide text-white uppercase">İletişim</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {business.email ? (
              <a
                href={`mailto:${business.email}`}
                className="mt-4 flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
                {business.email}
              </a>
            ) : null}

            <div className="mt-5 flex flex-col gap-3">
              <ContactButton kind="call" label="Müsaitlik İçin Ara" fullWidth />
              <ContactButton kind="whatsapp" label="WhatsApp" fullWidth />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/60 md:text-left">
          © {year} {business.businessName}. Tüm hakları saklıdır.
        </div>
      </Container>
    </footer>
  );
}
