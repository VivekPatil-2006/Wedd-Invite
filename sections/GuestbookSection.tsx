'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/Button';
import { GuestbookEntry } from '@/types';
import { formatDateShort } from '@/lib/dateUtils';

export const GuestbookSection: React.FC = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([
    {
      id: '1',
      guestName: 'Sarah & John',
      message: 'Wishing you both a lifetime of love and happiness!',
      timestamp: new Date('2026-01-15'),
    },
    {
      id: '2',
      guestName: 'The Smith Family',
      message: 'So excited to celebrate this special day with you!',
      timestamp: new Date('2026-01-14'),
    },
  ]);

  const [newEntry, setNewEntry] = useState({ guestName: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEntry.guestName.trim() && newEntry.message.trim()) {
      const entry: GuestbookEntry = {
        id: Date.now().toString(),
        guestName: newEntry.guestName,
        message: newEntry.message,
        timestamp: new Date(),
      };
      setEntries([entry, ...entries]);
      setNewEntry({ guestName: '', message: '' });
    }
  };

  return (
    <section
      id="guestbook"
      className="relative min-h-screen w-full flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-4xl w-full">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-dark-charcoal dark:text-cream">
            Guest Book
          </h2>
          <p className="text-lg text-warm-brown dark:text-champagne">
            Leave your blessings and wishes
          </p>
        </motion.div>

        {/* Entry Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <GlassCard>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-dark-charcoal dark:text-cream mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={newEntry.guestName}
                  onChange={(e) =>
                    setNewEntry({ ...newEntry, guestName: e.target.value })
                  }
                  placeholder="Enter your name"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-charcoal dark:text-cream mb-2">
                  Your Message
                </label>
                <textarea
                  value={newEntry.message}
                  onChange={(e) =>
                    setNewEntry({ ...newEntry, message: e.target.value })
                  }
                  placeholder="Share your wishes..."
                  rows={3}
                  className="w-full resize-none"
                />
              </div>
              <Button type="submit" variant="primary" className="w-full">
                Post Message
              </Button>
            </form>
          </GlassCard>
        </motion.div>

        {/* Entries */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {entries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard hover>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h4 className="font-serif font-bold text-dark-charcoal dark:text-cream">
                      {entry.guestName}
                    </h4>
                    <p className="text-warm-brown dark:text-champagne mt-2">
                      {entry.message}
                    </p>
                  </div>
                  <p className="text-xs text-soft-gold whitespace-nowrap">
                    {formatDateShort(entry.timestamp)}
                  </p>
                </div>

                {/* Floating animation */}
                <motion.div
                  className="mt-3 text-2xl"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  💕
                </motion.div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
