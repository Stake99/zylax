import { z } from 'zod';
import { ContactFormData, ContactFormErrors } from '@/types/contact';

/**
 * Zod schema for contact form validation
 * 
 * Validation rules:
 * - name: minimum 2 characters, required
 * - email: valid email format, required
 * - message: minimum 10 characters, required
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  message: z
    .string()
    .min(1, 'Message is required')
    .min(10, 'Message must be at least 10 characters'),
});

/**
 * Type inference from Zod schema
 */
export type ContactFormInput = z.infer<typeof contactFormSchema>;

/**
 * Validates contact form data and returns errors object
 * 
 * @param data - The form data to validate
 * @returns Object with errors for each field, or empty object if valid
 */
export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const result = contactFormSchema.safeParse(data);
  
  if (result.success) {
    return {};
  }
  
  const errors: ContactFormErrors = {};
  
  result.error.errors.forEach((error) => {
    const field = error.path[0] as keyof ContactFormErrors;
    if (field && !errors[field]) {
      errors[field] = error.message;
    }
  });
  
  return errors;
}

/**
 * Checks if the form data is valid
 * 
 * @param data - The form data to validate
 * @returns true if valid, false otherwise
 */
export function isValidContactForm(data: ContactFormData): boolean {
  return contactFormSchema.safeParse(data).success;
}
