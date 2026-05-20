"use client";

import React, { useEffect, useState } from 'react';

export const FloatingPetals: React.FC = () => {
  const [petals, setPetals] = useState(
    Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      left: `${Math.round(Math.random() * 100)}%`,
      delay: (Math.random() * 12).toFixed(2),
      size: 10 + Math.round(Math.random() * 32),
      duration: 12 + Math.round(Math.random() * 12),
      rot: Math.round(Math.random() * 360),
    }))
  );

  useEffect(() => {
    // Reduce petals on small screens for performance
    const resizeHandler = () => {
      const width = window.innerWidth;
      const count = width < 768 ? 6 : width < 1200 ? 8 : 10;
      setPetals(
        Array.from({ length: count }).map((_, i) => ({
          id: i,
          left: `${Math.round(Math.random() * 100)}%`,
          delay: (Math.random() * 12).toFixed(2),
          size: 10 + Math.round(Math.random() * 32),
          duration: 12 + Math.round(Math.random() * 12),
          rot: Math.round(Math.random() * 360),
        }))
      );
    };

    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  // Respect reduced motion
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            transform: `rotate(${p.rot}deg)`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingPetals;
