'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGift, FaCamera, FaMapPin } from 'react-icons/fa';

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  href: string;
}

export const FloatingMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { label: 'RSVP', icon: <FaHeart />, href: '#rsvp' },
    { label: 'Gallery', icon: <FaCamera />, href: '#gallery' },
    { label: 'Venue', icon: <FaMapPin />, href: '#venue' },
  ];

  return (
    <div className="fixed right-8 bottom-8 z-40">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-dusty-rose text-white shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaGift className="text-xl" />
      </motion.button>

      {isOpen && (
        <motion.div className="absolute bottom-20 right-0 space-y-3">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="flex items-center space-x-2 bg-dusty-rose text-white px-4 py-2 rounded-full shadow-lg hover:bg-warm-brown transition-colors"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsOpen(false)}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </motion.a>
          ))}
        </motion.div>
      )}
    </div>
  );
};
