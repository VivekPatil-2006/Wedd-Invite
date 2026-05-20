import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hover = false,
}) => {
  return (
    <div
      className={`glass rounded-2xl p-6 ${hover ? 'glass-hover' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
