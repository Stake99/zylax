'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    image: '/images/displays/keepcoding-lVF2HLzjopw-unsplash.jpg',
    title: 'Advanced Threat Detection',
    description: 'Leverage real-time monitoring and AI-driven analytics to detect threats on your systems.',
    number: '01',
  },
  {
    image: '/images/displays/robynne-o-HOrhCnQsxnQ-unsplash.jpg',
    title: 'Zero Trust Architecture',
    description: 'Enforce strict access control and verification at every level to prevent lateral movement in your network.',
    number: '02',
  },
  {
    image: '/images/displays/shamin-haky-Uhx-gHPpCDg-unsplash.jpg',
    title: 'Real-Time Threat Detection',
    description: 'Monitor your infrastructure 24/7 with our advanced security operations center.',
    number: '03',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-cyber-darker text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyber-blue text-sm font-semibold tracking-wider uppercase mb-2">
            WHY CHOOSE US
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Cyber Defense Against Modern Attacks
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Stay protected with a fully integrated defense strategy built for today&apos;s complex cyber landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker via-cyber-darker/50 to-transparent" />
                <div className="absolute top-4 right-4 text-6xl font-bold text-white/10">
                  {feature.number}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
