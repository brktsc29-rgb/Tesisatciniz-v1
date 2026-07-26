export interface JsonLdGraph {
  '@context': 'https://schema.org';
  '@graph': Record<string, unknown>[];
}

export interface BreadcrumbTrailItem {
  label: string;
  /** Absolute or relative path. Last item is treated as the current page (no link needed). */
  path: string;
}

export type StructuredData = Record<string, unknown>;
