'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const AtmosphericBackdrop: React.FC = () => {
  const orbs = [
    { className: 'left-[10%] top-[14%] h-56 w-56', delay: 0 },
    { className: 'right-[12%] bottom-[16%] h-64 w-64', delay: 1.2 },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(247,234,226,0.62),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(212,165,165,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(230,215,184,0.14),transparent_30%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(212,165,165,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(230,215,184,0.05),transparent_30%)]" />

      {orbs.map((orb, index) => (
        <motion.span
          key={index}
          className={`absolute ${orb.className} rounded-full bg-gradient-to-br from-soft-gold/18 via-blush/14 to-transparent blur-2xl dark:from-soft-gold/8 dark:via-blush/8`}
          animate={{
            y: [0, -14, 0],
            x: [0, 8, 0],
            scale: [1, 1.04, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 14 + index * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}

      <motion.div
        className="absolute left-1/2 top-[18%] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.20),rgba(255,255,255,0.02)_58%,transparent_72%)] blur-2xl"
        animate={{ opacity: [0.28, 0.48, 0.28], scale: [0.98, 1.01, 0.98] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};
