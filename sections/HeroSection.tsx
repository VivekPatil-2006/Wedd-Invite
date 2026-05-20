'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ScrollIndicator } from '@/components/ScrollIndicator';
import { formatDate } from '@/lib/dateUtils';

interface HeroSectionProps {
  groomName: string;
  brideName: string;
  weddingDate: Date;
  heroImage?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  groomName,
  brideName,
  weddingDate,
  heroImage,
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
          backgroundImage: `url('${heroImage || '/images/bg.png'}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_55%)]"
          animate={{ opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-black/32 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/18 to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative Line */}
        <motion.div className="mb-8 flex items-center justify-center gap-3" variants={itemVariants}>
          <span className="h-px w-10 bg-soft-gold/70" />
          <span className="text-soft-gold text-xs uppercase tracking-[0.35em]">Forever begins here</span>
          <span className="h-px w-10 bg-soft-gold/70" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-soft-gold text-sm md:text-base uppercase tracking-[0.28em] mb-6"
          variants={itemVariants}
        >
          A day wrapped in love
        </motion.p>

        {/* Names */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-cream mb-4 leading-[0.9] drop-shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="block"
            >
              {groomName}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="block text-soft-gold my-2 text-4xl md:text-5xl"
            >
              &
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="block"
            >
              {brideName}
            </motion.span>
          </h1>
        </motion.div>

        {/* Date */}
        <motion.p
          className="text-xl md:text-2xl text-champagne mb-12 font-light tracking-[0.08em]"
          variants={itemVariants}
        >
          {formattedDate}
        </motion.p>

        <motion.p
          className="mx-auto mb-10 max-w-xl text-sm md:text-base text-champagne/90 leading-8"
          variants={itemVariants}
        >
          Join us as two families become one, and a beautiful new chapter begins with warmth, grace, and celebration.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <a
            href="#schedule"
            className="px-8 py-3 bg-soft-gold text-dark-charcoal font-serif font-semibold rounded-full hover:bg-champagne transition-all duration-300 transform hover:scale-[1.03] shadow-lg shadow-black/10"
          >
            Save The Date
          </a>
          <a
            href="#countdown"
            className="px-8 py-3 border border-soft-gold/90 text-soft-gold font-serif font-semibold rounded-full hover:bg-soft-gold hover:text-dark-charcoal transition-all duration-300 backdrop-blur-sm"
          >
            View Countdown
          </a>
        </motion.div>

        {/* Decorative Line */}
        <motion.div className="mt-16 flex items-center justify-center gap-3" variants={itemVariants}>
          <span className="h-px w-10 bg-soft-gold/70" />
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="text-soft-gold text-lg"
          >
            ✦
          </motion.span>
          <span className="h-px w-10 bg-soft-gold/70" />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};
