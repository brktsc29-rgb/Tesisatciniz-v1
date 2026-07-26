interface NeighborhoodChipsProps {
  neighborhoods: string[];
}

/** Mahalle adlarını kompakt, mobilde okunabilir chip listesi olarak gösterir. */
export function NeighborhoodChips({ neighborhoods }: NeighborhoodChipsProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {neighborhoods.map((neighborhood) => (
        <li
          key={neighborhood}
          className="rounded-full border border-border-light bg-white px-3.5 py-1.5 text-sm font-medium text-ink/80"
        >
          {neighborhood}
        </li>
      ))}
    </ul>
  );
}
