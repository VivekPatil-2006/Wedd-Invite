'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMusic, FaVolumeOff, FaBars, FaTimes } from 'react-icons/fa';
import { useAudio } from '@/hooks/useAudio';
import { Button } from './Button';

interface NavbarProps {
  coupleInitials: string;
}

export const Navbar: React.FC<NavbarProps> = ({ coupleInitials }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isPlaying, toggle } = useAudio('/music/romantic.mp3');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Countdown', href: '#countdown' },
    { label: 'Love Story', href: '#lovestory' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Venue', href: '#venue' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'RSVP', href: '#rsvp' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="text-2xl font-serif font-bold bg-gradient-to-r from-dusty-rose to-soft-gold bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            {coupleInitials}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-dark-charcoal dark:text-cream hover:text-dusty-rose transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggle}
              className="p-2 rounded-full hover:bg-dusty-rose/10 transition-colors"
              aria-label="Toggle music"
            >
              {isPlaying ? (
                <FaMusic className="text-dusty-rose" size={20} />
              ) : (
                <FaVolumeOff className="text-dusty-rose" size={20} />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes size={24} className="text-dusty-rose" />
              ) : (
                <FaBars size={24} className="text-dusty-rose" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden pb-4 space-y-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-dark-charcoal dark:text-cream hover:text-dusty-rose transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
