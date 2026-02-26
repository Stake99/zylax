import { MetadataRoute } from 'next';

/**
 * Generate robots.txt dynamically
 * Allows all crawlers to access all pages
 * 
 * Validates: Requirements 8.4
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
