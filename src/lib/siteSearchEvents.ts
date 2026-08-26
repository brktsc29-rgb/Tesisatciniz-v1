export const OPEN_SITE_SEARCH_EVENT = 'tesisatciniz:open-site-search';

/** Mobil menü gibi başka bileşenlerden arama modalını açar. */
export function openSiteSearch(): void {
  window.dispatchEvent(new Event(OPEN_SITE_SEARCH_EVENT));
}
