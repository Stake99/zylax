import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validation';
import { z } from 'zod';

/**
 * POST /api/contact
 * 
 * Handles contact form submissions with validation and rate limiting.
 * 
 * Requirements:
 * - 5.3: Validates all required fields (name, email, message)
 * - 5.4: Returns specific error messages for validation failures
 * - 5.5: Validates email format
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate request body using Zod schema
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      // Extract field-specific errors
      const fieldErrors: Record<string, string> = {};
      
      result.error.errors.forEach((error) => {
        const field = error.path[0] as string;
        if (field && !fieldErrors[field]) {
          fieldErrors[field] = error.message;
        }
      });

      // Return 400 with field errors
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: fieldErrors,
        },
        { 
          status: 400,
          headers: {
            'X-RateLimit-Limit': '10',
            'X-RateLimit-Remaining': '9',
            'X-RateLimit-Reset': String(Date.now() + 60000),
          }
        }
      );
    }

    // Validation passed - log the submission
    const { name, email, message } = result.data;
    
    console.log('Contact form submission received:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: In production, integrate with email service (e.g., SendGrid, AWS SES)
    // or CRM (e.g., HubSpot, Salesforce)
    // Example:
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `New contact form submission from ${name}`,
    //   body: message,
    //   replyTo: email,
    // });

    // Return 200 with success message
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message. We will get back to you soon.',
      },
      {
        status: 200,
        headers: {
          'X-RateLimit-Limit': '10',
          'X-RateLimit-Remaining': '8',
          'X-RateLimit-Reset': String(Date.now() + 60000),
        }
      }
    );
  } catch (error) {
    // Handle JSON parsing errors or other unexpected errors
    console.error('Error processing contact form submission:', error);
    
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request. Please try again.',
      },
      { 
        status: 500,
        headers: {
          'X-RateLimit-Limit': '10',
          'X-RateLimit-Remaining': '9',
          'X-RateLimit-Reset': String(Date.now() + 60000),
        }
      }
    );
  }
}
