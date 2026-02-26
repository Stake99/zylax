'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import Input from '@/components/ui/Input';
import TextArea from '@/components/ui/TextArea';
import Button from '@/components/ui/Button';
import { contactFormSchema } from '@/lib/validation';
import { ContactFormData } from '@/types/contact';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Unable to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {/* ARIA live region for form status announcements */}
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {submitStatus === 'success' && 'Message sent successfully'}
        {submitStatus === 'error' && errorMessage}
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Input
          id="name"
          label="Name"
          type="text"
          error={errors.name?.message}
          disabled={isSubmitting}
          {...register('name')}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Input
          id="email"
          label="Email"
          type="email"
          error={errors.email?.message}
          disabled={isSubmitting}
          {...register('email')}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <TextArea
          id="message"
          label="Message"
          rows={6}
          error={errors.message?.message}
          disabled={isSubmitting}
          {...register('message')}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <Button
          type="submit"
          variant="primary"
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </motion.div>

      {/* Success message with animation */}
      <AnimatePresence>
        {submitStatus === 'success' && (
          <motion.div 
            className="p-4 bg-green-50 border border-green-200 rounded-md"
            role="alert"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-green-800 font-medium">
              Message sent successfully!
            </p>
            <p className="text-green-700 text-sm mt-1">
              Thank you for contacting us. We&apos;ll get back to you soon.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error message with animation */}
      <AnimatePresence>
        {submitStatus === 'error' && (
          <motion.div 
            className="p-4 bg-red-50 border border-red-200 rounded-md"
            role="alert"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-red-800 font-medium">
              {errorMessage}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
