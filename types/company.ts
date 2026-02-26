/**
 * Company information type definitions
 */

export interface CompanyInfo {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  social?: {
    linkedin?: string;
    twitter?: string;
  };
  certifications: string[]; // List of certifications/badges
}
