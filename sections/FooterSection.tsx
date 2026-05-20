'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaHeart,
} from 'react-icons/fa';

interface FooterSectionProps {
  groomName: string;
  brideName: string;
  initials: string;
  socialLinks: Record<string, string>;
  thankyouMessage: string;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  groomName,
  brideName,
  initials,
  socialLinks,
  thankyouMessage,
}) => {
  const socialIcons = [
    { name: 'Instagram', icon: FaInstagram, url: socialLinks.instagram },
    { name: 'Facebook', icon: FaFacebook, url: socialLinks.facebook },
    { name: 'Twitter', icon: FaTwitter, url: socialLinks.twitter },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-cream/50 to-dark-charcoal/10 dark:from-dark-charcoal to-dark-charcoal/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Thank You Message */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-5xl mb-6"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ❤️
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-charcoal dark:text-cream mb-6">
            Thank You
          </h2>
          <p className="text-lg text-warm-brown dark:text-champagne max-w-2xl mx-auto leading-relaxed">
            {thankyouMessage}
          </p>
        </motion.div>

        {/* Couple Info */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4">
            <div className="w-20 h-20 rounded-full border-4 border-dusty-rose flex items-center justify-center">
              <p className="text-3xl font-serif font-bold text-dusty-rose">
                {initials}
              </p>
            </div>
          </div>
          <p className="font-serif font-semibold text-2xl text-dark-charcoal dark:text-cream">
            {groomName} & {brideName}
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {socialIcons.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-dusty-rose/20 text-dusty-rose hover:bg-dusty-rose hover:text-white transition-all flex items-center justify-center"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-1 w-24 bg-gradient-to-r from-dusty-rose to-soft-gold mx-auto mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Footer Text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-warm-brown dark:text-champagne text-sm">
            With all our love,
          </p>
          <p className="text-2xl font-serif font-bold text-dark-charcoal dark:text-cream my-2">
            {groomName} & {brideName}
          </p>
          <p className="text-xs text-soft-gold uppercase tracking-widest">
            © 2024. All rights reserved.
          </p>

          {/* Decorative Element */}
          <motion.div
            className="mt-8 flex justify-center gap-3 text-3xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span>✿</span>
            <span>✿</span>
            <span>✿</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
