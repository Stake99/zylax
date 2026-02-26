/**
 * Contact form type definitions
 */

export interface ContactFormData {
  name: string;            // Required, min 2 characters
  email: string;           // Required, valid email format
  message: string;         // Required, min 10 characters
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}
