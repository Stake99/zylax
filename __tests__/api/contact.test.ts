/**
 * @jest-environment node
 */
import { POST } from '@/app/api/contact/route';
import { NextRequest } from 'next/server';

describe('POST /api/contact', () => {
  // Helper to create a mock NextRequest
  const createMockRequest = (body: unknown) => {
    return {
      json: async () => body,
    } as NextRequest;
  };

  it('returns 200 with success message for valid submission', async () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'This is a test message with enough characters.',
    };

    const request = createMockRequest(validData);
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.message).toContain('Thank you');
  });

  it('returns 400 with field errors when name is missing', async () => {
    const invalidData = {
      name: '',
      email: 'john@example.com',
      message: 'This is a test message.',
    };

    const request = createMockRequest(invalidData);
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.success).toBe(false);
    expect(data.errors).toHaveProperty('name');
    expect(data.errors.name).toContain('required');
  });

  it('returns 400 with field errors when email is invalid', async () => {
    const invalidData = {
      name: 'John Doe',
      email: 'invalid-email',
      message: 'This is a test message.',
    };

    const request = createMockRequest(invalidData);
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.success).toBe(false);
    expect(data.errors).toHaveProperty('email');
    expect(data.errors.email).toContain('valid email');
  });

  it('returns 400 with field errors when message is too short', async () => {
    const invalidData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Short',
    };

    const request = createMockRequest(invalidData);
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.success).toBe(false);
    expect(data.errors).toHaveProperty('message');
    expect(data.errors.message).toContain('at least 10 characters');
  });

  it('returns 400 with multiple field errors when multiple fields are invalid', async () => {
    const invalidData = {
      name: '',
      email: 'invalid',
      message: 'Short',
    };

    const request = createMockRequest(invalidData);
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.success).toBe(false);
    expect(data.errors).toHaveProperty('name');
    expect(data.errors).toHaveProperty('email');
    expect(data.errors).toHaveProperty('message');
  });

  it('includes rate limiting headers in response', async () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'This is a test message with enough characters.',
    };

    const request = createMockRequest(validData);
    const response = await POST(request);

    expect(response.headers.get('X-RateLimit-Limit')).toBe('10');
    expect(response.headers.get('X-RateLimit-Remaining')).toBeTruthy();
    expect(response.headers.get('X-RateLimit-Reset')).toBeTruthy();
  });

  it('returns 500 for malformed JSON', async () => {
    const request = {
      json: async () => {
        throw new Error('Invalid JSON');
      },
    } as unknown as NextRequest;

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.success).toBe(false);
    expect(data.message).toContain('error occurred');
  });
});
