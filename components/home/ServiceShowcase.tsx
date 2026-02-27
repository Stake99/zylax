'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

const showcaseItems = [
  {
    image: '/images/displays/freestocks-I_pOqP6kCOI-unsplash.jpg',
    title: 'Customer Data Protection',
    description: 'Safeguard sensitive customer information with enterprise-grade encryption.',
  },
  {
    image: '/images/displays/luis-villasmil-S2qA7JhjI6Y-unsplash.jpg',
    title: 'Remote Workforce Protection',
    description: 'Secure your distributed teams with comprehensive endpoint security.',
  },
  {
    image: '/images/displays/robynne-o-HOrhCnQsxnQ-unsplash.jpg',
    title: 'Real-Time Threat Detection',
    description: 'Monitor and respond to threats instantly with our 24/7 SOC.',
  },
];

export default function ServiceShowcase() {
  return (
    <section className="py-20 bg-cyber-dark text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyber-blue text-sm font-semibold tracking-wider uppercase mb-2">
            WHAT WE PROVIDE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Robust Cybersecurity Services for Today&apos;s Threats
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Protect your business from ever-evolving cyber risks with our end-to-end security solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-80">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker via-cyber-darker/70 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
