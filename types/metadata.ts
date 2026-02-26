/**
 * Page metadata type definitions for SEO
 */

export interface PageMetadata {
  title: string;           // Page title (50-60 chars)
  description: string;     // Meta description (150-160 chars)
  keywords?: string[];     // SEO keywords
  ogImage?: string;        // Open Graph image URL
  ogType?: string;         // Open Graph type (website, article, etc.)
  canonical?: string;      // Canonical URL
}
