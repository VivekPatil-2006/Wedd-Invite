'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '@/components/GlassCard';
import { FaChevronDown } from 'react-icons/fa';
import { WeddingEvent } from '@/types';

interface EventScheduleSectionProps {
  schedule: WeddingEvent[];
}

export const EventScheduleSection: React.FC<EventScheduleSectionProps> = ({ schedule }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const iconMap: Record<string, string> = {
    heart: '💒',
    glass: '🥂',
    utensils: '🍽️',
    music: '🎵',
    sparkles: '✨',
  };

  return (
    <section
      id="schedule"
      className="relative min-h-screen w-full flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-4xl w-full">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-dark-charcoal dark:text-cream">
            Day Program
          </h2>
          <p className="text-lg text-warm-brown dark:text-champagne">
            A timeline of magical moments
          </p>
        </motion.div>

        {/* Events Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-soft-gold via-dusty-rose to-soft-gold transform md:-translate-x-1/2" />

          {/* Events */}
          <div className="space-y-6">
            {schedule.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="md:flex items-start gap-8"
              >
                {/* Timeline Dot and Icon */}
                <div className="flex items-start gap-6 md:w-1/2">
                  <div className="relative z-10 mt-1">
                    <div className="w-16 h-16 rounded-full bg-soft-gold/20 border-2 border-soft-gold flex items-center justify-center text-3xl">
                      {iconMap[event.icon] || '📍'}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:hidden w-full">
                    <motion.div
                      className="cursor-pointer"
                      onClick={() =>
                        setExpandedId(expandedId === event.id ? null : event.id)
                      }
                    >
                      <GlassCard hover className="w-full">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-dusty-rose font-serif font-semibold text-lg">
                              {event.time}
                            </p>
                            <h3 className="text-2xl font-serif font-bold text-dark-charcoal dark:text-cream mt-2">
                              {event.title}
                            </h3>
                          </div>
                          <motion.div
                            animate={{
                              rotate: expandedId === event.id ? 180 : 0,
                            }}
                          >
                            <FaChevronDown className="text-dusty-rose" size={20} />
                          </motion.div>
                        </div>

                        <AnimatePresence>
                          {expandedId === event.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-4 pt-4 border-t border-soft-gold/30"
                            >
                              <p className="text-warm-brown dark:text-champagne">
                                {event.description}
                              </p>
                              <p className="text-sm text-soft-gold mt-2">
                                Duration: {event.duration}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </GlassCard>
                    </motion.div>
                  </div>
                </div>

                {/* Desktop Content */}
                <div className="hidden md:block md:w-1/2">
                  <GlassCard hover>
                    <div className="mb-2">
                      <p className="text-dusty-rose font-serif font-semibold text-lg">
                        {event.time}
                      </p>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-dark-charcoal dark:text-cream mb-3">
                      {event.title}
                    </h3>
                    <p className="text-warm-brown dark:text-champagne mb-2">
                      {event.description}
                    </p>
                    <p className="text-sm text-soft-gold">Duration: {event.duration}</p>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
