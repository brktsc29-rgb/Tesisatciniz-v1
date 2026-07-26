export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO 8601 tarih, örn. "2026-01-15". */
  publishedAt: string;
  /** Markdown formatında gövde metni. */
  content: string;
}
