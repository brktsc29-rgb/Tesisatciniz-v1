import { useEffect, useRef } from 'react';
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
 *
 * `onClose` her render'da yeniden oluşturulan bir inline fonksiyon olabilir
 * (çağıran bileşenlerin çoğu bunu böyle kullanır). Bu yüzden asıl efekt
 * yalnızca `isOpen` değiştiğinde çalışır; güncel `onClose` bir ref
 * üzerinden okunur. Aksi hâlde panel açıkken oluşan her state güncellemesi
 * (örn. arama kutusuna yazı yazmak, bir accordion'u açmak) efekti yeniden
 * tetikleyip odağı beklenmedik şekilde tetikleyici butona geri sıçratırdı.
 */
export function useDialogBehavior({ isOpen, onClose, containerRef, triggerRef }: DialogBehaviorOptions): void {
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

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
        onCloseRef.current();
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
        onCloseRef.current();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, containerRef, triggerRef]);
}
