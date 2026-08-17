import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/cn';

interface ResponsiveImageProps {
  src?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  rounded?: '2xl' | 'xl';
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  /** Gerçek fotoğraf yoksa (veya yüklenemezse) gösterilecek ikon tabanlı illüstrasyon. */
  placeholderIcon?: LucideIcon;
  placeholderTone?: 'navy' | 'blue' | 'teal';
}

const toneClasses: Record<NonNullable<ResponsiveImageProps['placeholderTone']>, string> = {
  navy: 'from-navy to-blue',
  blue: 'from-blue to-teal',
  teal: 'from-teal to-blue',
};

/**
 * Gerçek fotoğraf gelene kadar sabit en-boy oranlı, CLS oluşturmayan bir
 * yer tutucu gösterir. `src` sağlandığında normal <img> render eder;
 * dosya henüz yoksa veya yüklenemezse (404 vb.) kırık resim ikonu ya da
 * konsol hatası oluşturmadan aynı yer tutucuya sessizce geri döner.
 */
export function ResponsiveImage({
  src,
  alt,
  width,
  height,
  className,
  rounded = 'xl',
  loading = 'lazy',
  fetchPriority = 'auto',
  placeholderIcon: Icon,
  placeholderTone = 'blue',
}: ResponsiveImageProps) {
  const [failed, setFailed] = useState(false);
  const roundedClass = rounded === '2xl' ? 'rounded-2xl' : 'rounded-xl';

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        onError={() => setFailed(true)}
        className={cn('object-cover', roundedClass, className)}
        style={{ aspectRatio: `${width} / ${height}` }}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        'relative flex items-center justify-center overflow-hidden bg-gradient-to-br',
        toneClasses[placeholderTone],
        roundedClass,
        className,
      )}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <div
        className="absolute -top-1/4 -left-1/4 h-1/2 w-1/2 rounded-full bg-white/10 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-1/4 -bottom-1/4 h-1/2 w-1/2 rounded-full bg-white/10 blur-2xl"
        aria-hidden="true"
      />
      {Icon ? (
        <>
          <Icon aria-hidden="true" className="absolute h-2/3 w-2/3 -rotate-12 text-white/10" />
          <span className="relative flex h-1/3 w-1/3 min-h-16 min-w-16 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25 backdrop-blur-sm">
            <Icon aria-hidden="true" className="h-1/2 w-1/2 text-white" />
          </span>
        </>
      ) : null}
    </div>
  );
}
