import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  titleAs?: 'h1' | 'h2';
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'center',
  titleAs: TitleTag = 'h2',
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-sm font-semibold tracking-wide text-blue uppercase">{eyebrow}</span>
      ) : null}
      <TitleTag id={id} className="text-[28px] leading-tight font-extrabold text-navy md:text-[36px]">
        {title}
      </TitleTag>
      {description ? (
        <p
          className={cn(
            'text-base leading-relaxed text-ink/80 md:text-lg',
            align === 'center' ? 'max-w-2xl' : 'max-w-2xl',
          )}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
