'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GlassCard } from '@/components/GlassCard';
import { LoveStoryCard as LoveStoryCardType } from '@/types';

interface LoveStorySectionProps {
  loveStory: LoveStoryCardType[];
}

export const LoveStorySection: React.FC<LoveStorySectionProps> = ({ loveStory }) => {
  return (
    <section
      id="lovestory"
      className="relative min-h-screen w-full flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-6xl w-full">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-dark-charcoal dark:text-cream">
            Our Love Story
          </h2>
          <p className="text-lg text-warm-brown dark:text-champagne">
            A journey of moments that made us who we are
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-soft-gold via-dusty-rose to-soft-gold transform -translate-x-1/2 hidden md:block" />

          {/* Story Cards */}
          <div className="space-y-12">
            {loveStory.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <motion.div
                    className="relative h-64 md:h-80 rounded-2xl overflow-hidden hover-lift"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <GlassCard hover>
                    <div className="mb-4 inline-block px-4 py-2 bg-soft-gold/20 rounded-full">
                      <p className="text-soft-gold font-serif font-semibold">{story.date}</p>
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-dark-charcoal dark:text-cream mb-3">
                      {story.title}
                    </h3>
                    <p className="text-warm-brown dark:text-champagne leading-relaxed">
                      {story.description}
                    </p>

                    {/* Floating Heart */}
                    <motion.div
                      className="mt-6 text-3xl"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      💕
                    </motion.div>
                  </GlassCard>
                </div>

                {/* Timeline Dot */}
                <motion.div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-dusty-rose rounded-full border-4 border-cream dark:border-dark-charcoal" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
