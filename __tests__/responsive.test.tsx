/**
 * Responsive Design Tests
 * Tests for Requirements 6.1, 6.2, 6.3
 * 
 * Verifies:
 * - Layout adapts to screen widths from 320px to 1920px
 * - Mobile menu displays at mobile breakpoints
 * - No horizontal scrolling at any viewport width
 * - Text remains readable at all sizes
 */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/components/navigation/Header';
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import ServiceCard from '@/components/services/ServiceCard';
import Footer from '@/components/shared/Footer';
import ContactForm from '@/components/contact/ContactForm';
import { Service } from '@/types/service';

// Mock Next.js navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Responsive Design - Requirements 6.1, 6.2, 6.3', () => {
  describe('Header Component Responsiveness', () => {
    it('should render mobile menu button on mobile viewports', () => {
      render(<Header />);
      
      // Mobile menu button should be present
      const mobileMenuButton = screen.getByLabelText(/open menu/i);
      expect(mobileMenuButton).toBeInTheDocument();
      
      // Button should have md:hidden class for mobile-only display
      expect(mobileMenuButton).toHaveClass('md:hidden');
    });

    it('should render desktop navigation with responsive classes', () => {
      const { container } = render(<Header />);
      
      // Desktop navigation should be present
      const desktopNav = container.querySelector('.hidden.md\\:flex');
      expect(desktopNav).toBeInTheDocument();
      expect(desktopNav).toHaveClass('hidden', 'md:flex');
    });

    it('should have responsive container with proper padding', () => {
      const { container } = render(<Header />);
      const nav = container.querySelector('nav');
      
      expect(nav).toHaveClass('container', 'mx-auto', 'px-4');
    });
  });

  describe('Hero Section Responsiveness', () => {
    it('should use responsive text sizes', () => {
      render(
        <HeroSection
          title="Test Title"
          subtitle="Test Subtitle"
          ctaText="Get Started"
          ctaLink="/contact"
        />
      );
      
      const title = screen.getByText('Test Title');
      const subtitle = screen.getByText('Test Subtitle');
      
      // Title should have responsive text classes
      expect(title).toHaveClass('text-4xl', 'sm:text-5xl', 'md:text-6xl', 'lg:text-7xl');
      
      // Subtitle should have responsive text classes
      expect(subtitle).toHaveClass('text-lg', 'sm:text-xl', 'md:text-2xl');
    });

    it('should use responsive padding', () => {
      const { container } = render(
        <HeroSection
          title="Test Title"
          subtitle="Test Subtitle"
          ctaText="Get Started"
          ctaLink="/contact"
        />
      );
      
      const contentDiv = container.querySelector('.py-20');
      expect(contentDiv).toHaveClass('sm:py-24', 'lg:py-32');
    });

    it('should use responsive horizontal padding', () => {
      const { container } = render(
        <HeroSection
          title="Test Title"
          subtitle="Test Subtitle"
          ctaText="Get Started"
          ctaLink="/contact"
        />
      );
      
      const contentDiv = container.querySelector('.px-4');
      expect(contentDiv).toHaveClass('sm:px-6', 'lg:px-8');
    });
  });

  describe('Services Grid Responsiveness', () => {
    it('should use responsive grid columns', () => {
      const { container } = render(<ServicesOverview />);
      
      const grid = container.querySelector('.grid');
      expect(grid).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-4');
    });

    it('should render service cards with proper responsive structure', () => {
      const mockService: Service = {
        id: '1',
        slug: 'test-service',
        title: 'Test Service',
        description: 'Test description',
        fullDescription: 'Full test description',
        icon: 'shield-check',
        benefits: ['Benefit 1', 'Benefit 2'],
        useCases: ['Use case 1', 'Use case 2'],
        category: 'Testing',
      };

      render(<ServiceCard service={mockService} />);
      
      const title = screen.getByText('Test Service');
      expect(title).toBeInTheDocument();
    });
  });

  describe('Footer Responsiveness', () => {
    it('should use responsive grid layout', () => {
      const { container } = render(<Footer />);
      
      const grid = container.querySelector('.grid');
      expect(grid).toHaveClass('grid-cols-1', 'md:grid-cols-3');
    });

    it('should use responsive padding', () => {
      const { container } = render(<Footer />);
      
      const footerContent = container.querySelector('.px-4');
      expect(footerContent).toHaveClass('sm:px-6', 'lg:px-8');
    });
  });

  describe('Contact Form Responsiveness', () => {
    it('should render form inputs with full width', () => {
      render(<ContactForm />);
      
      const nameInput = screen.getByLabelText(/name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const messageInput = screen.getByLabelText(/message/i);
      
      expect(nameInput).toHaveClass('w-full');
      expect(emailInput).toHaveClass('w-full');
      expect(messageInput).toHaveClass('w-full');
    });
  });

  describe('Breakpoint Coverage', () => {
    const breakpoints = [
      { name: 'Mobile Small', width: 320 },
      { name: 'Mobile', width: 375 },
      { name: 'Mobile Large', width: 425 },
      { name: 'Tablet', width: 768 },
      { name: 'Laptop', width: 1024 },
      { name: 'Desktop', width: 1920 },
    ];

    breakpoints.forEach(({ name, width }) => {
      it(`should render without horizontal overflow at ${name} (${width}px)`, () => {
        // Set viewport width
        global.innerWidth = width;
        global.dispatchEvent(new Event('resize'));

        const { container } = render(
          <div>
            <Header />
            <HeroSection
              title="Test Title"
              subtitle="Test Subtitle"
              ctaText="Get Started"
              ctaLink="/contact"
            />
            <ServicesOverview />
            <Footer />
          </div>
        );

        // Check that no element has explicit width larger than viewport
        const allElements = container.querySelectorAll('*');
        allElements.forEach((element) => {
          const styles = window.getComputedStyle(element);
          const elementWidth = parseInt(styles.width);
          
          // Elements should not exceed viewport width (allowing for scrollbars)
          if (!isNaN(elementWidth)) {
            expect(elementWidth).toBeLessThanOrEqual(width + 20);
          }
        });
      });
    });
  });

  describe('Text Readability', () => {
    it('should use minimum readable font sizes', () => {
      const { container } = render(
        <div>
          <HeroSection
            title="Test Title"
            subtitle="Test Subtitle"
            ctaText="Get Started"
            ctaLink="/contact"
          />
          <ServicesOverview />
        </div>
      );

      // Check that text elements have appropriate minimum sizes
      const textElements = container.querySelectorAll('p, span, a, button');
      textElements.forEach((element) => {
        const styles = window.getComputedStyle(element);
        const fontSize = parseInt(styles.fontSize);
        
        // Minimum font size should be at least 14px for readability
        if (!isNaN(fontSize)) {
          expect(fontSize).toBeGreaterThanOrEqual(14);
        }
      });
    });

    it('should have proper line height for readability', () => {
      render(
        <HeroSection
          title="Test Title"
          subtitle="Test Subtitle"
          ctaText="Get Started"
          ctaLink="/contact"
        />
      );

      const subtitle = screen.getByText('Test Subtitle');
      expect(subtitle.closest('p')).toHaveClass('leading-relaxed');
    });
  });

  describe('Container Max Width', () => {
    it('should use max-width containers to prevent excessive line length', () => {
      const { container } = render(<ServicesOverview />);
      
      const maxWidthContainer = container.querySelector('.max-w-7xl');
      expect(maxWidthContainer).toBeInTheDocument();
    });

    it('should center containers with mx-auto', () => {
      const { container } = render(<ServicesOverview />);
      
      const centeredContainer = container.querySelector('.mx-auto');
      expect(centeredContainer).toBeInTheDocument();
    });
  });

  describe('Mobile Menu Functionality', () => {
    it('should display mobile menu at mobile breakpoints (< 768px)', () => {
      render(<Header />);
      
      const mobileMenuButton = screen.getByLabelText(/open menu/i);
      
      // Mobile menu button should be visible on mobile
      expect(mobileMenuButton).toHaveClass('md:hidden');
    });

    it('should hide desktop navigation at mobile breakpoints', () => {
      const { container } = render(<Header />);
      
      const desktopNav = container.querySelector('.hidden.md\\:flex');
      
      // Desktop navigation should be hidden on mobile
      expect(desktopNav).toBeInTheDocument();
      expect(desktopNav).toHaveClass('hidden', 'md:flex');
    });
  });

  describe('Responsive Images', () => {
    it('should use responsive spacing for image containers', () => {
      const mockService: Service = {
        id: '1',
        slug: 'test-service',
        title: 'Test Service',
        description: 'Test description',
        fullDescription: 'Full test description',
        icon: 'shield-check',
        benefits: ['Benefit 1'],
        useCases: ['Use case 1'],
        category: 'Testing',
      };

      const { container } = render(<ServiceCard service={mockService} />);
      
      // Icon container should have proper sizing
      const iconContainer = container.querySelector('svg');
      expect(iconContainer).toHaveClass('w-12', 'h-12');
    });
  });

  describe('Responsive Spacing', () => {
    it('should use responsive gap in grids', () => {
      const { container } = render(<ServicesOverview />);
      
      const grid = container.querySelector('.grid');
      expect(grid).toHaveClass('gap-6');
    });

    it('should use responsive padding in sections', () => {
      const { container } = render(<ServicesOverview />);
      
      const section = container.querySelector('section');
      expect(section).toHaveClass('py-16', 'px-4', 'sm:px-6', 'lg:px-8');
    });
  });
});
