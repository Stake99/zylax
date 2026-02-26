/**
 * Image Helper Utilities
 * 
 * This file provides utilities for working with Next.js Image component
 * when images are added to the project.
 */

/**
 * Generate a blur data URL for placeholder images
 * This is a simple gray placeholder - replace with actual blur data in production
 */
export const getBlurDataURL = (width: number = 10, height: number = 10): string => {
  // Simple gray blur placeholder
  // In production, generate actual blur data from the source image
  return `data:image/svg+xml;base64,${Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#e5e7eb"/>
    </svg>`
  ).toString('base64')}`;
};

/**
 * Common image sizes for responsive images
 */
export const imageSizes = {
  thumbnail: { width: 150, height: 150 },
  small: { width: 320, height: 240 },
  medium: { width: 640, height: 480 },
  large: { width: 1024, height: 768 },
  hero: { width: 1920, height: 1080 },
} as const;

/**
 * Generate sizes prop for responsive images
 * @param breakpoints - Object mapping breakpoints to image widths
 * @returns sizes string for Next.js Image component
 * 
 * @example
 * const sizes = generateSizes({
 *   sm: '100vw',
 *   md: '50vw',
 *   lg: '33vw',
 * });
 * // Returns: "(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
 */
export const generateSizes = (breakpoints: {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  default?: string;
}): string => {
  const sizes: string[] = [];
  
  if (breakpoints.sm) {
    sizes.push(`(max-width: 640px) ${breakpoints.sm}`);
  }
  if (breakpoints.md) {
    sizes.push(`(max-width: 768px) ${breakpoints.md}`);
  }
  if (breakpoints.lg) {
    sizes.push(`(max-width: 1024px) ${breakpoints.lg}`);
  }
  if (breakpoints.xl) {
    sizes.push(`(max-width: 1280px) ${breakpoints.xl}`);
  }
  
  const defaultSize = breakpoints.default || '100vw';
  sizes.push(defaultSize);
  
  return sizes.join(', ');
};

/**
 * Image loading priorities
 */
export const ImagePriority = {
  HIGH: true,  // For above-the-fold images (hero sections)
  LOW: false,  // For below-the-fold images (lazy loaded)
} as const;

/**
 * Example usage patterns for Next.js Image component
 */
export const imageExamples = {
  // Hero image (above the fold, high priority)
  hero: {
    priority: true,
    sizes: generateSizes({ sm: '100vw', md: '100vw', lg: '100vw' }),
    placeholder: 'blur' as const,
  },
  
  // Service card image (lazy loaded)
  serviceCard: {
    priority: false,
    sizes: generateSizes({ sm: '100vw', md: '50vw', lg: '25vw' }),
    placeholder: 'blur' as const,
  },
  
  // Team member photo (lazy loaded, fixed size)
  teamPhoto: {
    priority: false,
    sizes: '200px',
    placeholder: 'blur' as const,
  },
  
  // Logo (small, high priority if in header)
  logo: {
    priority: true,
    sizes: '200px',
  },
};
