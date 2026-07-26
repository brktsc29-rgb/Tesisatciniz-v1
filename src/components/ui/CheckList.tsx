import { Check } from 'lucide-react';
import { cn } from '../../lib/cn';

interface CheckListProps {
  items: string[];
  columns?: 1 | 2;
}

/** Onay ikonlu, sade liste. Hizmet belirtileri ve ilçe ihtiyaç listelerinde paylaşılır. */
export function CheckList({ items, columns = 2 }: CheckListProps) {
  return (
    <ul
      className={cn(
        'grid grid-cols-1 gap-3',
        columns === 2 && 'sm:grid-cols-2',
      )}
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-xl border border-border-light bg-white p-4"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
            <Check aria-hidden="true" className="h-3.5 w-3.5" />
          </span>
          <span className="text-[15px] leading-snug text-ink/85">{item}</span>
        </li>
      ))}
    </ul>
  );
}
