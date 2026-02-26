import { Metadata } from 'next';

/**
 * Character limits for metadata fields
 */
const TITLE_MIN_LENGTH = 50;
const TITLE_MAX_LENGTH = 60;
const DESCRIPTION_MIN_LENGTH = 150;
const DESCRIPTION_MAX_LENGTH = 160;

/**
 * Base metadata configuration
 */
interface MetadataConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
  canonical?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

/**
 * Validates and truncates title to meet character limits
 */
function validateTitle(title: string): string {
  if (title.length > TITLE_MAX_LENGTH) {
    console.warn(`Title exceeds ${TITLE_MAX_LENGTH} characters: "${title}"`);
    return title.substring(0, TITLE_MAX_LENGTH - 3) + '...';
  }
  if (title.length < TITLE_MIN_LENGTH) {
    console.warn(`Title is shorter than recommended ${TITLE_MIN_LENGTH} characters: "${title}"`);
  }
  return title;
}

/**
 * Validates and truncates description to meet character limits
 */
function validateDescription(description: string): string {
  if (description.length > DESCRIPTION_MAX_LENGTH) {
    console.warn(`Description exceeds ${DESCRIPTION_MAX_LENGTH} characters`);
    return description.substring(0, DESCRIPTION_MAX_LENGTH - 3) + '...';
  }
  if (description.length < DESCRIPTION_MIN_LENGTH) {
    console.warn(`Description is shorter than recommended ${DESCRIPTION_MIN_LENGTH} characters`);
  }
  return description;
}

/**
 * Generates Open Graph metadata tags
 */
export function generateOpenGraphTags(config: MetadataConfig) {
  const title = validateTitle(config.title);
  const description = validateDescription(config.description);

  return {
    title,
    description,
    type: config.ogType || 'website',
    images: config.ogImage ? [
      {
        url: config.ogImage,
        alt: title,
      }
    ] : undefined,
    url: config.canonical,
  };
}

/**
 * Generates Twitter Card metadata tags
 */
export function generateTwitterCardTags(config: MetadataConfig) {
  const title = validateTitle(config.title);
  const description = validateDescription(config.description);

  return {
    card: config.twitterCard || 'summary_large_image',
    title,
    description,
    images: config.ogImage ? [config.ogImage] : undefined,
  };
}

/**
 * Generates complete page metadata including Open Graph and Twitter Card tags
 */
export function generatePageMetadata(config: MetadataConfig): Metadata {
  const title = validateTitle(config.title);
  const description = validateDescription(config.description);

  return {
    title,
    description,
    keywords: config.keywords,
    openGraph: generateOpenGraphTags(config),
    twitter: generateTwitterCardTags(config),
    alternates: config.canonical ? {
      canonical: config.canonical,
    } : undefined,
  };
}

/**
 * Default site metadata
 */
export const defaultMetadata: MetadataConfig = {
  title: 'Cybersecurity Services - Protect Your Digital Assets',
  description: 'Professional cybersecurity services including penetration testing, security assessments, and compliance solutions. Protect your business from cyber threats.',
  ogImage: '/images/og-default.jpg',
  ogType: 'website',
  twitterCard: 'summary_large_image',
};
