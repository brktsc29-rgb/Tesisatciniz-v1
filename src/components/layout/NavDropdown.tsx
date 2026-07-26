import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/cn';
import type { NavLink as NavLinkItem } from '../../types/content';

interface NavDropdownProps {
  label: string;
  items: NavLinkItem[];
}

/** Header'daki "Hizmetler" ve "Hizmet Bölgeleri" için erişilebilir açılır menü. */
export function NavDropdown({ label, items }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const hasActiveChild = items.some((item) => item.href === location.pathname);
  const panelId = `nav-dropdown-panel-${label}`;

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (
        containerRef.current &&
        event.target instanceof Node &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className={cn(
          'flex items-center gap-1 text-sm font-semibold transition-colors',
          hasActiveChild ? 'text-blue' : 'text-ink hover:text-blue',
        )}
      >
        {label}
        <ChevronDown
          aria-hidden="true"
          className={cn('h-4 w-4 transition-transform duration-150', isOpen && 'rotate-180')}
        />
      </button>

      {isOpen ? (
        <div
          id={panelId}
          className="absolute top-full left-1/2 z-30 mt-3 w-56 -translate-x-1/2 rounded-2xl border border-border-light bg-white p-2 shadow-lg"
        >
          <ul aria-label={label} className="flex flex-col">
            {items.map((item) => {
              const isActive = item.href === location.pathname;
              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                      isActive ? 'bg-blue/10 text-blue' : 'text-ink hover:bg-surface hover:text-blue',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
