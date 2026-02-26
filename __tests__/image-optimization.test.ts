/**
 * Image Optimization Tests
 * 
 * Validates Requirements 6.4 and 7.1:
 * - 6.4: Images scale appropriately for different viewports
 * - 7.1: Next.js image optimization is implemented
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import nextConfig from '../next.config';

describe('Image Optimization', () => {
  describe('Requirement 7.1: Next.js Image Configuration', () => {
    it('should have image optimization configured in next.config.js', () => {
      expect(nextConfig.images).toBeDefined();
      expect(nextConfig.images?.formats).toContain('image/avif');
      expect(nextConfig.images?.formats).toContain('image/webp');
    });

    it('should have appropriate device sizes configured', () => {
      expect(nextConfig.images?.deviceSizes).toBeDefined();
      expect(nextConfig.images?.deviceSizes).toEqual(
        expect.arrayContaining([640, 750, 828, 1080, 1200, 1920])
      );
    });

    it('should have appropriate image sizes configured', () => {
      expect(nextConfig.images?.imageSizes).toBeDefined();
      expect(nextConfig.images?.imageSizes).toEqual(
        expect.arrayContaining([16, 32, 48, 64, 96, 128, 256, 384])
      );
    });
  });

  describe('Requirement 7.1: No Unoptimized Images', () => {
    const findFiles = (dir: string, extensions: string[]): string[] => {
      const files: string[] = [];
      
      try {
        const items = readdirSync(dir);
        
        for (const item of items) {
          const fullPath = join(dir, item);
          
          // Skip node_modules, .next, .git directories
          if (item === 'node_modules' || item === '.next' || item === '.git' || item === '.swc') {
            continue;
          }
          
          try {
            const stat = statSync(fullPath);
            
            if (stat.isDirectory()) {
              files.push(...findFiles(fullPath, extensions));
            } else if (extensions.some(ext => item.endsWith(ext))) {
              files.push(fullPath);
            }
          } catch (err) {
            // Skip files we can't access
            continue;
          }
        }
      } catch (err) {
        // Skip directories we can't access
      }
      
      return files;
    };

    it('should not contain any <img> tags in component files', () => {
      const componentFiles = findFiles('.', ['.tsx', '.jsx', '.ts', '.js']);
      const filesWithImgTags: string[] = [];

      for (const file of componentFiles) {
        // Skip test files
        if (file.includes('__tests__') || file.includes('.test.') || file.includes('.spec.')) {
          continue;
        }
        
        try {
          const content = readFileSync(file, 'utf-8');
          // Check for <img tags (case insensitive)
          if (/<img\s/i.test(content)) {
            filesWithImgTags.push(file);
          }
        } catch (err) {
          // Skip files we can't read
          continue;
        }
      }

      expect(filesWithImgTags).toEqual([]);
      
      if (filesWithImgTags.length > 0) {
        console.error(
          'Found <img> tags in the following files. Please replace with Next.js Image component:',
          filesWithImgTags
        );
      }
    });

    it('should use Next.js Image component if any images are imported', () => {
      const componentFiles = findFiles('.', ['.tsx', '.jsx']);
      const filesWithImages: Array<{ file: string; hasImgTag: boolean; hasImageImport: boolean }> = [];

      for (const file of componentFiles) {
        // Skip test files
        if (file.includes('__tests__') || file.includes('.test.') || file.includes('.spec.')) {
          continue;
        }
        
        try {
          const content = readFileSync(file, 'utf-8');
          const hasImgTag = /<img\s/i.test(content);
          const hasImageImport = /from\s+['"]next\/image['"]/.test(content);

          if (hasImgTag || hasImageImport) {
            filesWithImages.push({ file, hasImgTag, hasImageImport });
          }
        } catch (err) {
          continue;
        }
      }

      // If any file has img tags, it should also have Image import
      const filesWithImgButNoImport = filesWithImages.filter(
        f => f.hasImgTag && !f.hasImageImport
      );

      expect(filesWithImgButNoImport).toEqual([]);
      
      if (filesWithImgButNoImport.length > 0) {
        console.error(
          'Found <img> tags without Next.js Image import in:',
          filesWithImgButNoImport.map(f => f.file)
        );
      }
    });
  });

  describe('Requirement 6.4: Visual Elements are Responsive', () => {
    it('should use responsive SVG icons in ServiceCard', () => {
      const content = readFileSync('components/services/ServiceCard.tsx', 'utf-8');
      
      // Check for responsive width/height classes on SVG
      expect(content).toMatch(/className="w-\d+\s+h-\d+"/);
    });

    it('should use responsive icon sizes in components', () => {
      const componentFiles = [
        'components/services/ServiceCard.tsx',
        'components/services/ServiceDetail.tsx',
      ];

      for (const file of componentFiles) {
        const content = readFileSync(file, 'utf-8');
        
        // Should have responsive sizing (Tailwind classes or inline styles)
        const hasResponsiveSizing = 
          /className="[^"]*w-\d+/.test(content) || 
          /className="[^"]*h-\d+/.test(content);
        
        expect(hasResponsiveSizing).toBe(true);
      }
    });
  });

  describe('Image Helper Utilities', () => {
    it('should provide image helper utilities for future use', () => {
      // Verify the helper file exists
      expect(() => {
        require('../lib/image-helpers');
      }).not.toThrow();
    });
  });
});

describe('Current Visual Elements (No Traditional Images)', () => {
  it('should use inline SVG icons instead of image files', () => {
    const serviceCardContent = readFileSync('components/services/ServiceCard.tsx', 'utf-8');
    
    // Should have SVG elements
    expect(serviceCardContent).toContain('<svg');
    expect(serviceCardContent).toContain('<path');
  });

  it('should use Lucide React icons in About page', () => {
    const aboutContent = readFileSync('app/about/page.tsx', 'utf-8');
    
    // Should import from lucide-react
    expect(aboutContent).toContain('lucide-react');
  });

  it('should use CSS gradients for backgrounds', () => {
    const heroContent = readFileSync('components/home/HeroSection.tsx', 'utf-8');
    
    // Should use gradient classes
    expect(heroContent).toMatch(/bg-gradient-/);
  });

  it('should use emoji icons in TrustIndicators', () => {
    const trustContent = readFileSync('components/home/TrustIndicators.tsx', 'utf-8');
    
    // Should contain emoji characters
    expect(trustContent).toMatch(/[🔒✓🛡️🔐]/);
  });
});
