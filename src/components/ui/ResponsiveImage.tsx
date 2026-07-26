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
  /** Gerçek görsel eklenene kadar veya yüklenemediğinde gösterilecek ikon tabanlı yer tutucu. */
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
        'flex items-center justify-center bg-gradient-to-br',
        toneClasses[placeholderTone],
        roundedClass,
        className,
      )}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {Icon ? <Icon aria-hidden="true" className="h-1/4 w-1/4 min-h-8 min-w-8 text-white/85" /> : null}
    </div>
  );
}
