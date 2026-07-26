import { Phone, MessageCircle } from 'lucide-react';
import { business } from '../../config/business';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { cn } from '../../lib/cn';
import { useContactNotice } from '../../hooks/useContactNotice';

type ContactButtonKind = 'call' | 'whatsapp';

interface ContactButtonProps {
  kind: ContactButtonKind;
  label: string;
  sublabel?: string;
  /**
   * 'pill': tam genişlikte metinli buton.
   * 'iconCircle': yalnızca ikon gösteren kompakt yuvarlak buton.
   * 'barSegment': mobil sabit iletişim çubuğu için köşesiz, esnek genişlikte segment.
   */
  shape?: 'pill' | 'iconCircle' | 'barSegment';
  fullWidth?: boolean;
  className?: string;
  whatsappMessage?: string;
}

const NOTICE_MESSAGE = 'İletişim numarası yakında eklenecek.';

export function ContactButton({
  kind,
  label,
  sublabel,
  shape = 'pill',
  fullWidth = false,
  className,
  whatsappMessage,
}: ContactButtonProps) {
  const { showNotice } = useContactNotice();
  const Icon = kind === 'call' ? Phone : MessageCircle;

  const href =
    kind === 'call'
      ? business.phoneHref || null
      : buildWhatsAppUrl(business.whatsappNumber, whatsappMessage ?? business.whatsappMessage);

  const toneClasses =
    kind === 'call'
      ? 'bg-orange text-white hover:bg-orange/90 active:bg-orange/95'
      : 'bg-whatsapp text-white hover:bg-whatsapp/90 active:bg-whatsapp/95';

  const shapeClasses =
    shape === 'iconCircle'
      ? 'h-12 w-12 rounded-full shrink-0'
      : shape === 'barSegment'
        ? 'min-h-[56px] flex-1 px-4'
        : cn('min-h-[52px] rounded-full px-6', fullWidth && 'w-full');

  const classes = cn(
    'inline-flex items-center justify-center gap-2.5 font-semibold transition-colors duration-150',
    toneClasses,
    shapeClasses,
    className,
  );

  const content = (
    <>
      <Icon aria-hidden="true" className="h-5 w-5 shrink-0" />
      {shape === 'iconCircle' ? (
        <span className="sr-only">{label}</span>
      ) : (
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[15px] sm:text-base">{label}</span>
          {sublabel ? <span className="text-xs font-normal opacity-90">{sublabel}</span> : null}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(kind === 'whatsapp' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={() => showNotice(NOTICE_MESSAGE)}>
      {content}
    </button>
  );
}
