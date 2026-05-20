'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '@/hooks/useCountdown';
import { CountdownCard } from '@/components/CountdownCard';
import { GlassCard } from '@/components/GlassCard';

interface CountdownSectionProps {
  weddingDate: Date;
}

export const CountdownSection: React.FC<CountdownSectionProps> = ({ weddingDate }) => {
  const countdown = useCountdown(weddingDate);

  return (
    <section
      id="countdown"
      className="relative min-h-screen w-full flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-6xl w-full">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-dark-charcoal dark:text-cream">
            The Big Day Approaches
          </h2>
          <p className="text-lg text-warm-brown dark:text-champagne">
            To the most special day of our lives
          </p>
        </motion.div>

        {/* Countdown Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          <CountdownCard value={countdown.days} label="Days" delay={0} />
          <CountdownCard value={countdown.hours} label="Hours" delay={0.1} />
          <CountdownCard value={countdown.minutes} label="Minutes" delay={0.2} />
          <CountdownCard value={countdown.seconds} label="Seconds" delay={0.3} />
        </div>

        {/* Decorative Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <GlassCard hover className="text-center py-8">
            <div className="flex justify-center gap-2 mb-4 text-3xl text-soft-gold">
              ✿ ✿ ✿
            </div>
            <p className="text-lg text-dark-charcoal dark:text-cream italic font-light">
              "Love is not just looking at each other, it's looking in the same direction together."
            </p>
            <div className="flex justify-center gap-2 mt-4 text-3xl text-soft-gold">
              ✿ ✿ ✿
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
