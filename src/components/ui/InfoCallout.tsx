import { Info, Lightbulb, AlertTriangle } from 'lucide-react';
import { cn } from '../../lib/cn';
import type { ServiceMiniCallout } from '../../types/service';

const VARIANT_CONFIG = {
  info: {
    label: 'Biliyor muydunuz?',
    icon: Info,
    tone: 'border-blue/20 bg-blue/5 text-blue',
  },
  tip: {
    label: 'İpucu',
    icon: Lightbulb,
    tone: 'border-teal/20 bg-teal/5 text-teal',
  },
  warning: {
    label: 'Dikkat',
    icon: AlertTriangle,
    tone: 'border-orange/20 bg-orange/5 text-orange',
  },
} as const;

interface InfoCalloutProps extends ServiceMiniCallout {
  className?: string;
}

/** Sayfa içine doğal şekilde dağıtılan küçük bilgi kutusu. */
export function InfoCallout({ variant, text, className }: InfoCalloutProps) {
  const { label, icon: Icon, tone } = VARIANT_CONFIG[variant];

  return (
    <div className={cn('flex items-start gap-3 rounded-xl border p-4', tone, className)}>
      <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0" />
      <p className="text-sm leading-relaxed text-ink/80">
        <span className="mr-1.5 font-bold">{label}</span>
        {text}
      </p>
    </div>
  );
}
