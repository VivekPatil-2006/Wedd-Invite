'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';

interface CountdownCardProps {
  value: number;
  label: string;
  delay?: number;
}

export const CountdownCard: React.FC<CountdownCardProps> = ({
  value,
  label,
  delay = 0,
}) => {
  const displayValue = String(value).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <GlassCard hover className="w-full h-24 md:h-32 flex flex-col items-center justify-center">
        <motion.div
          key={displayValue}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-4xl md:text-5xl font-serif font-bold text-dusty-rose"
        >
          {displayValue}
        </motion.div>
        <p className="text-sm md:text-base text-dark-charcoal dark:text-cream mt-2 uppercase tracking-widest">
          {label}
        </p>
      </GlassCard>
    </motion.div>
  );
};
