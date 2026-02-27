'use client'

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
}: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/cybersecurity website background images.jpg"
          alt="Cybersecurity Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-darker/90 via-cyber-dark/85 to-primary-900/90" />
      </div>
      
      {/* Animated pattern overlay */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(0,212,255,0.15),transparent_50%)]" />
      </motion.div>

      {/* Floating particles effect */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyber-blue rounded-full blur-3xl opacity-10"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyber-purple rounded-full blur-3xl opacity-10"
        animate={{ 
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 text-center">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href={ctaLink}
            className="inline-block bg-cyber-blue hover:bg-primary-400 text-cyber-dark font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyber-blue/50"
          >
            {ctaText}
          </Link>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
