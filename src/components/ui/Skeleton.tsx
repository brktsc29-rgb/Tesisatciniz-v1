import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface SkeletonProps {
  className?: string;
}

/** Yükleniyor durumunu temsil eden temel dikdörtgen blok. */
export function Skeleton({ className }: SkeletonProps) {
  return <div className={cn('animate-pulse rounded-md bg-navy/10', className)} />;
}

interface SkeletonPageProps {
  label: string;
  children: ReactNode;
}

/**
 * Lazy yüklenen sayfa skeleton'larını saran ortak kapsayıcı. Ekran
 * okuyuculara `role="status"` ile içeriğin yüklenmekte olduğunu bildirir;
 * görsel bloklar `aria-hidden` olduğundan yalnızca bu etiket duyurulur.
 */
export function SkeletonPage({ label, children }: SkeletonPageProps) {
  return (
    <div role="status" aria-label={label}>
      <div aria-hidden="true">{children}</div>
    </div>
  );
}
