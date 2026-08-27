import { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';
import { ContactButton } from '../ui/ContactButton';
import { MobileMenu } from './MobileMenu';
import { NavDropdown } from './NavDropdown';
import { SiteSearch } from '../SiteSearch';
import { primaryNavigation } from '../../data/navigation';
import { ROUTES } from '../../config/routes';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const isHome = location.pathname === ROUTES.home;

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border-light bg-white/95 backdrop-blur-sm">
        <Container className="flex h-16 items-center justify-between gap-4 md:h-18">
          <Link to={ROUTES.home} aria-current={isHome ? 'page' : undefined} className="shrink-0">
            <Logo />
          </Link>

          <nav aria-label="Ana site menüsü" className="hidden items-center gap-6 lg:flex">
            {primaryNavigation.map((item) =>
              item.children ? (
                <NavDropdown key={item.label} label={item.label} items={item.children} />
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-semibold text-ink transition-colors hover:text-blue"
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <SiteSearch />
            <div className="lg:hidden">
              <ContactButton
                kind="call"
                label="Müsaitlik İçin Ara"
                shape="iconCircle"
                analyticsLocation="header"
              />
            </div>
            <div className="hidden lg:block">
              <ContactButton kind="call" label="Müsaitlik İçin Ara" analyticsLocation="header" />
            </div>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Menüyü aç"
              aria-haspopup="dialog"
              aria-expanded={isMenuOpen}
              className="flex h-11 w-11 items-center justify-center rounded-full text-navy transition-colors hover:bg-surface lg:hidden"
            >
              <Menu aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} triggerRef={menuButtonRef} />
    </>
  );
}
