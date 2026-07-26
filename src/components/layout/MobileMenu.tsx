import { useRef } from 'react';
import type { RefObject } from 'react';
import { X } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { ContactButton } from '../ui/ContactButton';
import { primaryNavigation } from '../../data/navigation';
import { useDialogBehavior } from '../../hooks/useDialogBehavior';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}

export function MobileMenu({ isOpen, onClose, triggerRef }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useDialogBehavior({ isOpen, onClose, containerRef: panelRef, triggerRef });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
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

        <nav aria-label="Mobil site menüsü" className="mt-8 flex flex-col gap-1">
          {primaryNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="rounded-lg px-3 py-3 text-base font-semibold text-ink transition-colors hover:bg-surface"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-8 flex flex-col gap-3 border-t border-border-light pt-6">
          <ContactButton kind="call" label="Müsaitlik İçin Ara" fullWidth />
          <ContactButton kind="whatsapp" label="WhatsApp'tan Fotoğraf Gönder" fullWidth />
        </div>
      </div>
    </div>
  );
}
