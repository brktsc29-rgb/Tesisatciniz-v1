import { createElement } from 'react';
import type { ReactNode } from 'react';

/**
 * Bağımlılıksız, minimal markdown → React öğesi dönüştürücü.
 * Blog altyapısı için hazırlanmıştır; tam CommonMark desteği hedeflemez.
 * Desteklenenler: #/##/### başlıklar, paragraflar, "- " listeleri,
 * **kalın**, *italik* ve [metin](url) bağlantıları.
 */

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /\*\*(.+?)\*\*|\*(.+?)\*|\[(.+?)\]\((.+?)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let index = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[1] !== undefined) {
      nodes.push(createElement('strong', { key: `${keyPrefix}-${index}` }, match[1]));
    } else if (match[2] !== undefined) {
      nodes.push(createElement('em', { key: `${keyPrefix}-${index}` }, match[2]));
    } else if (match[3] !== undefined && match[4] !== undefined) {
      nodes.push(
        createElement(
          'a',
          {
            key: `${keyPrefix}-${index}`,
            href: match[4],
            className: 'text-blue underline underline-offset-2 hover:text-navy',
          },
          match[3],
        ),
      );
    }

    lastIndex = pattern.lastIndex;
    index += 1;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

export function renderMarkdown(markdown: string): ReactNode[] {
  const lines = markdown.trim().split('\n');
  const blocks: ReactNode[] = [];
  let listItems: string[] = [];
  let blockIndex = 0;

  function flushList() {
    if (listItems.length === 0) return;
    blocks.push(
      createElement(
        'ul',
        { key: `list-${blockIndex}`, className: 'list-disc space-y-1 pl-5' },
        listItems.map((item, i) =>
          createElement('li', { key: i }, renderInline(item, `list-${blockIndex}-${i}`)),
        ),
      ),
    );
    blockIndex += 1;
    listItems = [];
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (line === '') {
      flushList();
      continue;
    }

    if (line.startsWith('- ')) {
      listItems.push(line.slice(2));
      continue;
    }

    flushList();

    if (line.startsWith('### ')) {
      blocks.push(
        createElement(
          'h3',
          { key: `h3-${blockIndex}`, className: 'text-lg font-bold text-navy' },
          renderInline(line.slice(4), `h3-${blockIndex}`),
        ),
      );
    } else if (line.startsWith('## ')) {
      blocks.push(
        createElement(
          'h2',
          { key: `h2-${blockIndex}`, className: 'text-xl font-bold text-navy' },
          renderInline(line.slice(3), `h2-${blockIndex}`),
        ),
      );
    } else if (line.startsWith('# ')) {
      blocks.push(
        createElement(
          'h2',
          { key: `h1-${blockIndex}`, className: 'text-2xl font-bold text-navy' },
          renderInline(line.slice(2), `h1-${blockIndex}`),
        ),
      );
    } else {
      blocks.push(
        createElement(
          'p',
          { key: `p-${blockIndex}`, className: 'text-[15px] leading-relaxed text-ink/80' },
          renderInline(line, `p-${blockIndex}`),
        ),
      );
    }

    blockIndex += 1;
  }

  flushList();
  return blocks;
}
