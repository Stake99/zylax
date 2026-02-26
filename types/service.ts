/**
 * Service type definitions for cybersecurity services
 */

export interface Service {
  id: string;              // Unique identifier
  slug: string;            // URL-friendly identifier
  title: string;           // Service name
  description: string;     // Brief description (for cards)
  fullDescription: string; // Detailed description
  icon: string;            // Icon identifier or path
  benefits: string[];      // List of service benefits
  useCases: string[];      // Typical use cases
  category: string;        // Service category
}
