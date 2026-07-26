import { useId } from 'react';
import { cn } from '../../lib/cn';
import { business } from '../../config/business';

interface LogoProps {
  tone?: 'default' | 'inverted';
  showTagline?: boolean;
  className?: string;
  /** Gerçek logo dosyası eklendiğinde bu alana yol verilmesi yeterlidir; verilmezse business.logo kullanılır. */
  src?: string;
}

/**
 * Logo görseli metin içermez (marka simgesi); "tesisatçınız" yazısı her
 * zaman bu bileşen içinde ayrı bir metin düğümü olarak gösterilir —
 * gerçek bir logo dosyası (business.logo) tanımlı olsa bile ikon değişir,
 * yanındaki marka adı kaybolmaz.
 */
export function Logo({ tone = 'default', showTagline = true, className, src }: LogoProps) {
  const gradientId = useId();
  const textColor = tone === 'inverted' ? 'text-white' : 'text-navy';
  const taglineColor = tone === 'inverted' ? 'text-teal' : 'text-blue';
  const resolvedSrc = src || business.logo || undefined;

  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      {resolvedSrc ? (
        <img src={resolvedSrc} alt="" aria-hidden="true" className="h-9 w-9 shrink-0" />
      ) : (
        <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden="true">
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#1677A8" />
              <stop offset="1" stopColor="#16A6B6" />
            </linearGradient>
          </defs>
          <path
            d="M16 2C10 10 5 15.5 5 21a11 11 0 0 0 22 0c0-5.5-5-11-11-19Z"
            fill={`url(#${gradientId})`}
          />
          <path
            d="M11 21a5 5 0 0 0 5 5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />
        </svg>
      )}
      <span className="flex flex-col leading-none">
        <span className={cn('text-lg font-extrabold tracking-tight', textColor)}>
          tesisatçınız
        </span>
        {showTagline ? (
          <span className={cn('mt-0.5 text-[11px] font-medium', taglineColor)}>
            Su Tesisatı ve Teknik Servis
          </span>
        ) : null}
      </span>
    </span>
  );
}
