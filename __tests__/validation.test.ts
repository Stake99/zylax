import { validateContactForm, isValidContactForm, contactFormSchema } from '@/lib/validation';
import { ContactFormData } from '@/types/contact';

describe('Contact Form Validation', () => {
  describe('validateContactForm', () => {
    it('should return empty errors object for valid data', () => {
      const validData: ContactFormData = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a valid message with more than 10 characters',
      };

      const errors = validateContactForm(validData);
      expect(errors).toEqual({});
    });

    it('should return error when name is empty', () => {
      const data: ContactFormData = {
        name: '',
        email: 'john@example.com',
        message: 'Valid message here',
      };

      const errors = validateContactForm(data);
      expect(errors.name).toBe('Name is required');
    });

    it('should return error when name is less than 2 characters', () => {
      const data: ContactFormData = {
        name: 'J',
        email: 'john@example.com',
        message: 'Valid message here',
      };

      const errors = validateContactForm(data);
      expect(errors.name).toBe('Name must be at least 2 characters');
    });

    it('should return error when email is empty', () => {
      const data: ContactFormData = {
        name: 'John Doe',
        email: '',
        message: 'Valid message here',
      };

      const errors = validateContactForm(data);
      expect(errors.email).toBe('Email is required');
    });

    it('should return error when email format is invalid', () => {
      const data: ContactFormData = {
        name: 'John Doe',
        email: 'invalid-email',
        message: 'Valid message here',
      };

      const errors = validateContactForm(data);
      expect(errors.email).toBe('Please enter a valid email address');
    });

    it('should return error when message is empty', () => {
      const data: ContactFormData = {
        name: 'John Doe',
        email: 'john@example.com',
        message: '',
      };

      const errors = validateContactForm(data);
      expect(errors.message).toBe('Message is required');
    });

    it('should return error when message is less than 10 characters', () => {
      const data: ContactFormData = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Short',
      };

      const errors = validateContactForm(data);
      expect(errors.message).toBe('Message must be at least 10 characters');
    });

    it('should return multiple errors when multiple fields are invalid', () => {
      const data: ContactFormData = {
        name: '',
        email: 'invalid',
        message: 'Short',
      };

      const errors = validateContactForm(data);
      expect(errors.name).toBeDefined();
      expect(errors.email).toBeDefined();
      expect(errors.message).toBeDefined();
    });
  });

  describe('isValidContactForm', () => {
    it('should return true for valid data', () => {
      const validData: ContactFormData = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a valid message',
      };

      expect(isValidContactForm(validData)).toBe(true);
    });

    it('should return false for invalid data', () => {
      const invalidData: ContactFormData = {
        name: 'J',
        email: 'invalid',
        message: 'Short',
      };

      expect(isValidContactForm(invalidData)).toBe(false);
    });
  });

  describe('contactFormSchema', () => {
    it('should accept valid email formats', () => {
      const validEmails = [
        'user@example.com',
        'user.name@example.com',
        'user+tag@example.co.uk',
        'user_name@example-domain.com',
      ];

      validEmails.forEach((email) => {
        const result = contactFormSchema.safeParse({
          name: 'John Doe',
          email,
          message: 'Valid message here',
        });
        expect(result.success).toBe(true);
      });
    });

    it('should reject invalid email formats', () => {
      const invalidEmails = [
        'invalid',
        '@example.com',
        'user@',
        'user @example.com',
        'user@example',
      ];

      invalidEmails.forEach((email) => {
        const result = contactFormSchema.safeParse({
          name: 'John Doe',
          email,
          message: 'Valid message here',
        });
        expect(result.success).toBe(false);
      });
    });

    it('should accept name with exactly 2 characters', () => {
      const result = contactFormSchema.safeParse({
        name: 'Jo',
        email: 'john@example.com',
        message: 'Valid message here',
      });
      expect(result.success).toBe(true);
    });

    it('should accept message with exactly 10 characters', () => {
      const result = contactFormSchema.safeParse({
        name: 'John Doe',
        email: 'john@example.com',
        message: '1234567890',
      });
      expect(result.success).toBe(true);
    });
  });
});
