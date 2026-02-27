'use client'

import { motion } from 'framer-motion';
import { Shield, Users, Clock, Award } from 'lucide-react';

const stats = [
  {
    icon: Shield,
    value: '99.9%',
    label: 'Threat Detection Rate',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Protected Organizations',
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Security Monitoring',
  },
  {
    icon: Award,
    value: '15+',
    label: 'Years of Experience',
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
