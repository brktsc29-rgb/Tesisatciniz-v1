import { useRef, useState } from 'react';
import { Menu } from 'lucide-react';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';
import { ContactButton } from '../ui/ContactButton';
import { MobileMenu } from './MobileMenu';
import { primaryNavigation } from '../../data/navigation';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border-light bg-white/95 backdrop-blur-sm">
        <Container className="flex h-16 items-center justify-between gap-4 md:h-18">
          <a href="#top" className="shrink-0">
            <Logo />
          </a>

          <nav aria-label="Ana site menüsü" className="hidden items-center gap-6 lg:flex">
            {primaryNavigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-ink transition-colors hover:text-blue"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="lg:hidden">
              <ContactButton kind="call" label="Müsaitlik İçin Ara" shape="iconCircle" />
            </div>
            <div className="hidden lg:block">
              <ContactButton kind="call" label="Müsaitlik İçin Ara" />
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
