import { useEffect } from 'react';
import type { RefObject } from 'react';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

interface DialogBehaviorOptions {
  isOpen: boolean;
  onClose: () => void;
  containerRef: RefObject<HTMLElement | null>;
  triggerRef?: RefObject<HTMLElement | null>;
}

/**
 * Drawer/dialog benzeri panel bileşenleri için ortak davranışlar:
 * Escape ile kapanma, dışarı tıklayınca kapanma, odak tuzağı ve body scroll kilidi.
 */
export function useDialogBehavior({ isOpen, onClose, containerRef, triggerRef }: DialogBehaviorOptions): void {
  useEffect(() => {
    if (!isOpen) return;

    const container = containerRef.current;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusables = container?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    focusables?.[0]?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === 'Tab' && container) {
        const focusableList = Array.from(
          container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
        );
        if (focusableList.length === 0) return;

        const first = focusableList[0];
        const last = focusableList[focusableList.length - 1];
        if (!first || !last) return;

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    function handlePointerDown(event: PointerEvent) {
      if (container && event.target instanceof Node && !container.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);

    const trigger = triggerRef?.current;

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
      trigger?.focus();
    };
  }, [isOpen, onClose, containerRef, triggerRef]);
}
