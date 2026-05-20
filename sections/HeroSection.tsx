'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ScrollIndicator } from '@/components/ScrollIndicator';
import { formatDate } from '@/lib/dateUtils';

interface HeroSectionProps {
  groomName: string;
  brideName: string;
  weddingDate: Date;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  groomName,
  brideName,
  weddingDate,
}) => {
  const formattedDate = formatDate(weddingDate);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative Line */}
        <motion.div
          className="w-12 h-0.5 bg-soft-gold mx-auto mb-8"
          variants={itemVariants}
        />

        {/* Subtitle */}
        <motion.p
          className="text-soft-gold text-sm md:text-base uppercase tracking-[0.2em] mb-6"
          variants={itemVariants}
        >
          We are getting married
        </motion.p>

        {/* Names */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-cream mb-4">
            {groomName}
            <span className="block text-soft-gold my-2">&</span>
            {brideName}
          </h1>
        </motion.div>

        {/* Date */}
        <motion.p
          className="text-xl md:text-2xl text-champagne mb-12 font-light"
          variants={itemVariants}
        >
          {formattedDate}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <a
            href="#rsvp"
            className="px-8 py-3 bg-soft-gold text-dark-charcoal font-serif font-semibold rounded-lg hover:bg-champagne transition-all duration-300 transform hover:scale-105"
          >
            Save The Date
          </a>
          <a
            href="#countdown"
            className="px-8 py-3 border-2 border-soft-gold text-soft-gold font-serif font-semibold rounded-lg hover:bg-soft-gold hover:text-dark-charcoal transition-all duration-300"
          >
            View Countdown
          </a>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          className="w-12 h-0.5 bg-soft-gold mx-auto mt-16"
          variants={itemVariants}
        />
      </motion.div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};
