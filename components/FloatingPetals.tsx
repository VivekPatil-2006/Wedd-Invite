"use client";

import React from 'react';
import { motion } from 'framer-motion';

const petals = Array.from({ length: 18 }).map((_, i) => ({
  id: i,
  left: `${Math.round(Math.random() * 100)}%`,
  delay: Math.random() * 8,
  size: 12 + Math.round(Math.random() * 36),
  rot: Math.round(Math.random() * 360),
}));

export const FloatingPetals: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="petal"
          style={{ left: p.left, width: p.size, height: p.size }}
          initial={{ y: -40, rotate: p.rot, opacity: 0 }}
          animate={{ y: [ -40, 140, 320 ], opacity: [0, 0.85, 0.6], rotate: p.rot + 6 }}
          transition={{ duration: 12 + (p.size % 8), ease: 'easeInOut', delay: p.delay, repeat: Infinity }}
        />
      ))}
    </div>
  );
};

export default FloatingPetals;
