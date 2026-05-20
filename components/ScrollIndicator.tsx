'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

export const ScrollIndicator: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div className="flex flex-col items-center space-y-2">
        <span className="text-sm text-dusty-rose opacity-75">Scroll to explore</span>
        <FaChevronDown className="text-dusty-rose text-xl" />
      </div>
    </motion.div>
  );
};
