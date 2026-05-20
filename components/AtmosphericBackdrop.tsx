'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const AtmosphericBackdrop: React.FC = () => {
  const orbs = [
    { className: 'left-[8%] top-[12%] h-40 w-40', delay: 0 },
    { className: 'right-[10%] top-[22%] h-56 w-56', delay: 0.8 },
    { className: 'left-[18%] bottom-[18%] h-48 w-48', delay: 1.2 },
    { className: 'right-[16%] bottom-[12%] h-36 w-36', delay: 0.4 },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(247,234,226,0.75),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(212,165,165,0.25),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(230,215,184,0.22),transparent_30%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(212,165,165,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(230,215,184,0.06),transparent_30%)]" />

      {orbs.map((orb, index) => (
        <motion.span
          key={index}
          className={`absolute ${orb.className} rounded-full bg-gradient-to-br from-soft-gold/25 via-blush/20 to-transparent blur-3xl dark:from-soft-gold/10 dark:via-blush/10`}
          animate={{
            y: [0, -22, 0],
            x: [0, 12, 0],
            scale: [1, 1.08, 1],
            opacity: [0.45, 0.7, 0.45],
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}

      <motion.div
        className="absolute left-1/2 top-[18%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.26),rgba(255,255,255,0.02)_60%,transparent_72%)] blur-2xl"
        animate={{ opacity: [0.35, 0.6, 0.35], scale: [0.96, 1.02, 0.96] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};
