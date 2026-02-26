'use client'

import React from 'react';
import { motion } from 'framer-motion';

interface TrustIndicator {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const trustIndicators: TrustIndicator[] = [
  {
    id: '1',
    name: 'ISO 27001 Certified',
    description: 'International standard for information security management',
    icon: '🔒',
  },
  {
    id: '2',
    name: 'SOC 2 Type II',
    description: 'Verified security, availability, and confidentiality controls',
    icon: '✓',
  },
  {
    id: '3',
    name: 'CISSP Certified Team',
    description: 'Certified Information Systems Security Professionals on staff',
    icon: '🛡️',
  },
  {
    id: '4',
    name: 'GDPR Compliant',
    description: 'Full compliance with data protection regulations',
    icon: '🔐',
  },
];

export default function TrustIndicators() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Trusted & Certified
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our commitment to excellence is backed by industry-leading certifications and compliance standards
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustIndicators.map((indicator, index) => (
            <motion.div
              key={indicator.id}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="text-5xl mb-4" 
                role="img" 
                aria-label={indicator.name}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {indicator.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {indicator.name}
              </h3>
              <p className="text-sm text-gray-600">
                {indicator.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
