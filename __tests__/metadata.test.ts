import {
  generateOpenGraphTags,
  generateTwitterCardTags,
  generatePageMetadata,
  defaultMetadata,
} from '../lib/metadata';

describe('Metadata Utilities', () => {
  describe('generateOpenGraphTags', () => {
    it('should generate Open Graph tags with all fields', () => {
      const config = {
        title: 'Test Page - Cybersecurity Services for Your Business',
        description: 'This is a test description that meets the minimum character requirement for SEO purposes. It provides enough detail to be useful for search engines.',
        ogImage: '/images/test.jpg',
        ogType: 'article' as const,
        canonical: 'https://example.com/test',
      };

      const og = generateOpenGraphTags(config);

      expect(og.title).toBe(config.title);
      expect(og.description).toBe(config.description);
      expect(og.type).toBe('article');
      expect(og.images).toEqual([
        {
          url: '/images/test.jpg',
          alt: config.title,
        },
      ]);
      expect(og.url).toBe('https://example.com/test');
    });

    it('should use default type when not specified', () => {
      const config = {
        title: 'Test Page - Cybersecurity Services for Your Business',
        description: 'This is a test description that meets the minimum character requirement for SEO purposes. It provides enough detail to be useful for search engines.',
      };

      const og = generateOpenGraphTags(config);

      expect(og.type).toBe('website');
    });

    it('should handle missing image', () => {
      const config = {
        title: 'Test Page - Cybersecurity Services for Your Business',
        description: 'This is a test description that meets the minimum character requirement for SEO purposes. It provides enough detail to be useful for search engines.',
      };

      const og = generateOpenGraphTags(config);

      expect(og.images).toBeUndefined();
    });

    it('should truncate title exceeding 60 characters', () => {
      const config = {
        title: 'This is a very long title that exceeds the maximum character limit of sixty characters',
        description: 'This is a test description that meets the minimum character requirement for SEO purposes. It provides enough detail to be useful for search engines and social media.',
      };

      const og = generateOpenGraphTags(config);

      expect(og.title.length).toBeLessThanOrEqual(60);
      expect(og.title).toContain('...');
    });

    it('should truncate description exceeding 160 characters', () => {
      const config = {
        title: 'Test Page - Cybersecurity Services for Your Business',
        description: 'This is a very long description that exceeds the maximum character limit of one hundred sixty characters. It contains way too much text and needs to be truncated to fit within the recommended limits for SEO and social media sharing.',
      };

      const og = generateOpenGraphTags(config);

      expect(og.description.length).toBeLessThanOrEqual(160);
      expect(og.description).toContain('...');
    });
  });

  describe('generateTwitterCardTags', () => {
    it('should generate Twitter Card tags with all fields', () => {
      const config = {
        title: 'Test Page - Cybersecurity Services for Your Business',
        description: 'This is a test description that meets the minimum character requirement for SEO purposes. It provides enough detail to be useful for search engines.',
        ogImage: '/images/test.jpg',
        twitterCard: 'summary' as const,
      };

      const twitter = generateTwitterCardTags(config);

      expect(twitter.card).toBe('summary');
      expect(twitter.title).toBe(config.title);
      expect(twitter.description).toBe(config.description);
      expect(twitter.images).toEqual(['/images/test.jpg']);
    });

    it('should use default card type when not specified', () => {
      const config = {
        title: 'Test Page - Cybersecurity Services for Your Business',
        description: 'This is a test description that meets the minimum character requirement for SEO purposes. It provides enough detail to be useful for search engines.',
      };

      const twitter = generateTwitterCardTags(config);

      expect(twitter.card).toBe('summary_large_image');
    });

    it('should handle missing image', () => {
      const config = {
        title: 'Test Page - Cybersecurity Services for Your Business',
        description: 'This is a test description that meets the minimum character requirement for SEO purposes. It provides enough detail to be useful for search engines.',
      };

      const twitter = generateTwitterCardTags(config);

      expect(twitter.images).toBeUndefined();
    });

    it('should truncate title exceeding 60 characters', () => {
      const config = {
        title: 'This is a very long title that exceeds the maximum character limit of sixty characters',
        description: 'This is a test description that meets the minimum character requirement for SEO purposes. It provides enough detail to be useful for search engines and social media.',
      };

      const twitter = generateTwitterCardTags(config);

      expect(twitter.title.length).toBeLessThanOrEqual(60);
      expect(twitter.title).toContain('...');
    });

    it('should truncate description exceeding 160 characters', () => {
      const config = {
        title: 'Test Page - Cybersecurity Services for Your Business',
        description: 'This is a very long description that exceeds the maximum character limit of one hundred sixty characters. It contains way too much text and needs to be truncated to fit within the recommended limits for SEO and social media sharing.',
      };

      const twitter = generateTwitterCardTags(config);

      expect(twitter.description.length).toBeLessThanOrEqual(160);
      expect(twitter.description).toContain('...');
    });
  });

  describe('generatePageMetadata', () => {
    it('should generate complete metadata with all fields', () => {
      const config = {
        title: 'Test Page - Cybersecurity Services for Your Business',
        description: 'This is a test description that meets the minimum character requirement for SEO purposes. It provides enough detail to be useful for search engines.',
        keywords: ['cybersecurity', 'security', 'testing'],
        ogImage: '/images/test.jpg',
        ogType: 'article' as const,
        canonical: 'https://example.com/test',
        twitterCard: 'summary_large_image' as const,
      };

      const metadata = generatePageMetadata(config);

      expect(metadata.title).toBe(config.title);
      expect(metadata.description).toBe(config.description);
      expect(metadata.keywords).toEqual(config.keywords);
      expect(metadata.openGraph).toBeDefined();
      expect(metadata.twitter).toBeDefined();
      expect(metadata.alternates?.canonical).toBe('https://example.com/test');
    });

    it('should handle minimal configuration', () => {
      const config = {
        title: 'Test Page - Cybersecurity Services for Your Business',
        description: 'This is a test description that meets the minimum character requirement for SEO purposes. It provides enough detail to be useful for search engines.',
      };

      const metadata = generatePageMetadata(config);

      expect(metadata.title).toBe(config.title);
      expect(metadata.description).toBe(config.description);
      expect(metadata.openGraph).toBeDefined();
      expect(metadata.twitter).toBeDefined();
      expect(metadata.alternates).toBeUndefined();
    });

    it('should include Open Graph metadata', () => {
      const config = {
        title: 'Test Page - Cybersecurity Services for Your Business',
        description: 'This is a test description that meets the minimum character requirement for SEO purposes. It provides enough detail to be useful for search engines.',
        ogImage: '/images/test.jpg',
      };

      const metadata = generatePageMetadata(config);

      expect(metadata.openGraph?.title).toBe(config.title);
      expect(metadata.openGraph?.description).toBe(config.description);
      expect(metadata.openGraph?.images).toBeDefined();
    });

    it('should include Twitter Card metadata', () => {
      const config = {
        title: 'Test Page - Cybersecurity Services for Your Business',
        description: 'This is a test description that meets the minimum character requirement for SEO purposes. It provides enough detail to be useful for search engines.',
        ogImage: '/images/test.jpg',
        twitterCard: 'summary_large_image' as const,
      };

      const metadata = generatePageMetadata(config);

      expect(metadata.twitter?.title).toBe(config.title);
      expect(metadata.twitter?.description).toBe(config.description);
      // Twitter card type is set via twitterCard parameter
    });
  });

  describe('defaultMetadata', () => {
    it('should have title within character limits', () => {
      expect(defaultMetadata.title.length).toBeGreaterThanOrEqual(50);
      expect(defaultMetadata.title.length).toBeLessThanOrEqual(60);
    });

    it('should have description within character limits', () => {
      expect(defaultMetadata.description.length).toBeGreaterThanOrEqual(150);
      expect(defaultMetadata.description.length).toBeLessThanOrEqual(160);
    });

    it('should have required fields', () => {
      expect(defaultMetadata.title).toBeDefined();
      expect(defaultMetadata.description).toBeDefined();
      expect(defaultMetadata.ogImage).toBeDefined();
      expect(defaultMetadata.ogType).toBe('website');
      expect(defaultMetadata.twitterCard).toBe('summary_large_image');
    });
  });

  describe('Character limit validation', () => {
    it('should warn about short titles', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
      
      const config = {
        title: 'Short',
        description: 'This is a test description that meets the minimum character requirement for SEO purposes. It provides enough detail to be useful for search engines.',
      };

      generatePageMetadata(config);

      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('Title is shorter than recommended')
      );

      consoleSpy.mockRestore();
    });

    it('should warn about short descriptions', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
      
      const config = {
        title: 'Test Page - Cybersecurity Services for Your Business',
        description: 'Too short',
      };

      generatePageMetadata(config);

      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('Description is shorter than recommended')
      );

      consoleSpy.mockRestore();
    });
  });
});
