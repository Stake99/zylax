'use client'

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="relative w-full py-20 sm:py-24 overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/cybersecurity website background images (2).jpg"
          alt="Security Background"
          fill
          className="object-cover"
          quality={85}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/90 via-primary-500/85 to-cyber-purple/90" />
      </div>
      
      {/* Animated pattern overlay */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.2),transparent_50%)]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Secure Your Business?
        </motion.h2>
        <motion.p 
          className="text-lg sm:text-xl text-white/95 mb-8 max-w-2xl mx-auto drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Don&apos;t wait for a security breach. Let our experts protect your digital assets with comprehensive cybersecurity solutions tailored to your needs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-white text-cyber-dark font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            Get a Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
