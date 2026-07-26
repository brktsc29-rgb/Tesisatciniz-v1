import { useEffect, useMemo, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { Search, SearchX, X } from 'lucide-react';
import { useDialogBehavior } from '../hooks/useDialogBehavior';
import { cn } from '../lib/cn';
import { services } from '../data/services';
import { districts } from '../data/districts';
import { EmptyState } from './ui/EmptyState';

interface SearchEntry {
  label: string;
  description: string;
  path: string;
  group: 'Hizmetler' | 'İlçeler';
  keywords: string;
}

const SEARCH_INDEX: SearchEntry[] = [
  ...services.map((service) => ({
    label: service.shortTitle,
    description: service.cardDescription,
    path: service.path,
    group: 'Hizmetler' as const,
    keywords: [service.title, service.shortTitle, ...service.symptoms.map((s) => s.label)]
      .join(' ')
      .toLocaleLowerCase('tr'),
  })),
  ...districts.map((district) => ({
    label: district.name,
    description: district.neighborhoods.slice(0, 4).join(', '),
    path: district.path,
    group: 'İlçeler' as const,
    keywords: [district.name, ...district.neighborhoods].join(' ').toLocaleLowerCase('tr'),
  })),
];

function filterSearchIndex(query: string): SearchEntry[] {
  const trimmed = query.trim().toLocaleLowerCase('tr');
  if (!trimmed) return SEARCH_INDEX;
  return SEARCH_INDEX.filter((entry) => entry.keywords.includes(trimmed));
}

const GROUPS = ['Hizmetler', 'İlçeler'] as const;

const OPEN_SEARCH_EVENT = 'tesisatciniz:open-site-search';

/** Mobil menü gibi başka bileşenlerden arama modalını açmak için kullanılır. */
export function openSiteSearch(): void {
  window.dispatchEvent(new Event(OPEN_SEARCH_EVENT));
}

interface SearchResultsListProps {
  results: SearchEntry[];
  activeIndex: number;
  onSelect: (entry: SearchEntry) => void;
  onHover: (index: number) => void;
}

function SearchResultsList({ results, activeIndex, onSelect, onHover }: SearchResultsListProps) {
  if (results.length === 0) {
    return (
      <EmptyState
        icon={SearchX}
        title="Sonuç bulunamadı"
        description="Farklı bir hizmet veya ilçe adıyla tekrar aramayı deneyin."
      />
    );
  }

  return (
    <div role="listbox" aria-label="Arama sonuçları">
      {GROUPS.map((group) => {
        const groupResults = results.filter((entry) => entry.group === group);
        if (groupResults.length === 0) return null;

        return (
          <div key={group} className="mb-1">
            <p className="px-4 pt-3 pb-1 text-xs font-bold tracking-wide text-ink/50 uppercase">
              {group}
            </p>
            {groupResults.map((entry) => {
              const globalIndex = results.indexOf(entry);
              const isActive = globalIndex === activeIndex;
              return (
                <button
                  key={entry.path}
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onMouseEnter={() => onHover(globalIndex)}
                  onClick={() => onSelect(entry)}
                  className={cn(
                    'flex w-full flex-col items-start gap-0.5 px-4 py-2.5 text-left transition-colors',
                    isActive ? 'bg-blue/10' : 'hover:bg-surface',
                  )}
                >
                  <span className="text-[15px] font-semibold text-navy">{entry.label}</span>
                  {entry.description ? (
                    <span className="truncate text-xs text-ink/60">{entry.description}</span>
                  ) : null}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function useSearchController(onAfterSelect?: () => void) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const results = useMemo(() => filterSearchIndex(query), [query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  function select(entry: SearchEntry) {
    navigate(entry.path);
    onAfterSelect?.();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((current) => Math.min(current + 1, Math.max(results.length - 1, 0)));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((current) => Math.max(current - 1, 0));
    } else if (event.key === 'Enter') {
      event.preventDefault();
      const entry = results[activeIndex];
      if (entry) select(entry);
    }
  }

  return { query, setQuery, activeIndex, setActiveIndex, results, select, handleKeyDown };
}

interface SearchInputProps {
  query: string;
  onChange: (value: string) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

function SearchInput({ query, onChange, onKeyDown, inputRef }: SearchInputProps) {
  return (
    <div className="flex items-center gap-3 border-b border-border-light px-4 py-3">
      <Search aria-hidden="true" className="h-5 w-5 shrink-0 text-ink/40" />
      <input
        ref={inputRef}
        type="text"
        role="combobox"
        aria-label="Hizmet veya ilçe ara"
        aria-expanded="true"
        aria-controls="site-search-listbox"
        aria-autocomplete="list"
        value={query}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Hizmet veya ilçe ara..."
        className="w-full bg-transparent text-[15px] text-ink outline-none placeholder:text-ink/40"
      />
    </div>
  );
}

/** Header'da Ctrl/Cmd+K ile açılan; mobilde tam ekran, masaüstünde dropdown olan site arama modalı. */
export function SiteSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { query, setQuery, activeIndex, results, select, handleKeyDown } = useSearchController(() =>
    setIsOpen(false),
  );

  useDialogBehavior({ isOpen, onClose: () => setIsOpen(false), containerRef, triggerRef });

  useEffect(() => {
    if (!isOpen) return;
    setQuery('');
    const raf = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    function handleGlobalKeyDown(event: globalThis.KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setIsOpen(true);
      }
    }
    function handleExternalOpen() {
      setIsOpen(true);
    }
    document.addEventListener('keydown', handleGlobalKeyDown);
    window.addEventListener(OPEN_SEARCH_EVENT, handleExternalOpen);
    return () => {
      document.removeEventListener('keydown', handleGlobalKeyDown);
      window.removeEventListener(OPEN_SEARCH_EVENT, handleExternalOpen);
    };
  }, []);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Sitede ara (Ctrl+K)"
        className="hidden h-11 w-11 items-center justify-center rounded-full text-navy transition-colors hover:bg-surface lg:flex xl:w-56 xl:justify-start xl:gap-2 xl:rounded-full xl:border xl:border-border-light xl:px-3 xl:text-ink/60 xl:hover:bg-transparent xl:hover:border-blue xl:hover:text-blue"
      >
        <Search aria-hidden="true" className="h-5 w-5 shrink-0 xl:h-4 xl:w-4" />
        <span className="hidden truncate text-sm xl:inline">Hizmet veya ilçe ara</span>
        <span className="ml-auto hidden shrink-0 rounded border border-border-light px-1.5 py-0.5 text-[11px] font-semibold text-ink/40 xl:inline">
          Ctrl K
        </span>
      </button>

      {isOpen
        ? createPortal(
            <div className="fixed inset-0 z-50 flex items-start justify-center bg-navy/40 lg:p-6 lg:pt-24">
              <div
                ref={containerRef}
                role="dialog"
                aria-modal="true"
                aria-label="Site içi arama"
                className="flex h-full w-full flex-col bg-white shadow-xl lg:h-auto lg:max-h-[70vh] lg:max-w-lg lg:rounded-2xl"
              >
                <div className="flex items-center gap-2 px-4 pt-3 lg:hidden">
                  <span className="text-sm font-semibold text-navy">Ara</span>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Aramayı kapat"
                    className="ml-auto flex h-9 w-9 items-center justify-center rounded-full hover:bg-surface"
                  >
                    <X aria-hidden="true" className="h-5 w-5" />
                  </button>
                </div>

                <SearchInput
                  query={query}
                  onChange={setQuery}
                  onKeyDown={handleKeyDown}
                  inputRef={inputRef}
                />

                <div id="site-search-listbox" className="flex-1 overflow-y-auto py-2">
                  <SearchResultsList
                    results={results}
                    activeIndex={activeIndex}
                    onSelect={select}
                    onHover={() => {}}
                  />
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

/** 404 sayfası gibi yerlerde modal olmadan, sayfa akışına gömülü arama kutusu. */
export function InlineSiteSearch() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { query, setQuery, activeIndex, setActiveIndex, results, select, handleKeyDown } =
    useSearchController();

  return (
    <div className="mx-auto w-full max-w-lg overflow-hidden rounded-2xl border border-border-light bg-white shadow-sm">
      <SearchInput query={query} onChange={setQuery} onKeyDown={handleKeyDown} inputRef={inputRef} />
      {query.trim() ? (
        <div className="max-h-72 overflow-y-auto py-2">
          <SearchResultsList
            results={results}
            activeIndex={activeIndex}
            onSelect={select}
            onHover={setActiveIndex}
          />
        </div>
      ) : null}
    </div>
  );
}
