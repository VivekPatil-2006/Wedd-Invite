"use client";

import React from 'react';

export const AtmosphericBackdrop: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(247,234,226,0.62),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(212,165,165,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(230,215,184,0.10),transparent_30%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(212,165,165,0.06),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(230,215,184,0.03),transparent_30%)]" />

      <span className="orb left-[10%] top-[14%] h-48 w-48" />
      <span className="orb right-[12%] bottom-[16%] h-56 w-56" />

      <div className="soft-glow" />
    </div>
  );
};
