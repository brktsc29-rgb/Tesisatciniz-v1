import { useRef, useState } from 'react';
import type { RefObject } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronDown, Search } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { ContactButton } from '../ui/ContactButton';
import { openSiteSearch } from '../../lib/siteSearchEvents';
import { primaryNavigation } from '../../data/navigation';
import { useDialogBehavior } from '../../hooks/useDialogBehavior';
import { cn } from '../../lib/cn';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}

export function MobileMenu({ isOpen, onClose, triggerRef }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [expandedLabel, setExpandedLabel] = useState<string | null>(null);
  const location = useLocation();

  useDialogBehavior({ isOpen, onClose, containerRef: panelRef, triggerRef });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-navy/40" aria-hidden="true" />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobil menü"
        className="absolute inset-y-0 right-0 flex w-[85%] max-w-xs flex-col overflow-y-auto bg-white p-6 shadow-xl"
      >
        <div className="flex items-center justify-between">
          <Logo showTagline={false} />
          <button
            type="button"
            onClick={onClose}
            aria-label="Menüyü kapat"
            className="flex h-11 w-11 items-center justify-center rounded-full text-navy transition-colors hover:bg-surface"
          >
            <X aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => {
            onClose();
            openSiteSearch();
          }}
          className="mt-6 flex items-center gap-2.5 rounded-full border border-border-light px-4 py-3 text-left text-[15px] text-ink/60 transition-colors hover:border-blue hover:text-blue"
        >
          <Search aria-hidden="true" className="h-4 w-4 shrink-0" />
          Hizmet veya ilçe ara
        </button>

        <nav aria-label="Mobil site menüsü" className="mt-6 flex flex-col gap-1">
          {primaryNavigation.map((item) => {
            if (item.children) {
              const isExpanded = expandedLabel === item.label;
              const panelId = `mobile-nav-panel-${item.label}`;
              return (
                <div key={item.label}>
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={panelId}
                    onClick={() => setExpandedLabel(isExpanded ? null : item.label)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-semibold text-ink transition-colors hover:bg-surface"
                  >
                    {item.label}
                    <ChevronDown
                      aria-hidden="true"
                      className={cn(
                        'h-5 w-5 shrink-0 transition-transform duration-200',
                        isExpanded && 'rotate-180',
                      )}
                    />
                  </button>
                  <div
                    id={panelId}
                    className={cn(
                      'grid transition-[grid-template-rows] duration-200 ease-in-out',
                      isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                    )}
                  >
                    <div
                      aria-hidden={!isExpanded}
                      inert={!isExpanded}
                      className="flex flex-col gap-0.5 overflow-hidden pl-3"
                    >
                      {item.children.map((child) => {
                        const isActive = child.href === location.pathname;
                        return (
                          <Link
                            key={child.href}
                            to={child.href}
                            onClick={onClose}
                            aria-current={isActive ? 'page' : undefined}
                            className={cn(
                              'rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors',
                              isActive ? 'text-blue' : 'text-ink/80 hover:bg-surface',
                            )}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="rounded-lg px-3 py-3 text-base font-semibold text-ink transition-colors hover:bg-surface"
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="mt-8 flex flex-col gap-3 border-t border-border-light pt-6">
          <ContactButton kind="call" label="Müsaitlik İçin Ara" fullWidth />
          <ContactButton kind="whatsapp" label="WhatsApp'tan Fotoğraf Gönder" fullWidth />
        </div>
      </div>
    </div>
  );
}
