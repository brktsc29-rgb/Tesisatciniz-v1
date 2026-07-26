import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  action?: ReactNode;
}

/**
 * Boş/henüz hazır olmayan içerik durumları için tek tip görsel dil.
 * Kullanım alanları: blog bulunamadı, arama sonucu bulunamadı, içerik
 * hazırlanıyor.
 */
export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-4 py-12 text-center md:py-16">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blue/10 text-blue">
        <Icon aria-hidden="true" className="h-7 w-7" />
      </span>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-bold text-navy">{title}</h3>
        {description ? (
          <p className="max-w-sm text-[15px] leading-relaxed text-ink/70">{description}</p>
        ) : null}
      </div>
      {action}
    </div>
  );
}
