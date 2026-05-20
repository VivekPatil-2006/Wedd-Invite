'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

interface GallerySectionProps {
  images: GalleryImage[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ images }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const categories = [
    'all',
    ...Array.from(new Set(images.map((img) => img.category))),
  ];

  const filteredImages =
    filter === 'all' ? images : images.filter((img) => img.category === filter);

  const selectedImage = images.find((img) => img.id === selectedId);

  return (
    <section
      id="gallery"
      className="relative min-h-screen w-full flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-6xl w-full">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-dark-charcoal dark:text-cream">
            Photo Gallery
          </h2>
          <p className="text-lg text-warm-brown dark:text-champagne">
            Moments that matter
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-serif font-semibold transition-all ${
                filter === category
                  ? 'bg-dusty-rose text-white'
                  : 'bg-soft-gold/20 text-dark-charcoal dark:text-cream hover:bg-soft-gold/30'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          layout
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  layoutId={`gallery-${image.id}`}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45 }}
                  onClick={() => setSelectedId(image.id)}
                  whileHover={{ scale: 1.02 }}
                  className={`relative h-64 rounded-xl overflow-hidden cursor-pointer ${
                    index % 5 === 0 ? 'md:col-span-2 md:row-span-2 h-96' : ''
                  }`}
                  style={{ willChange: 'transform' }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-400"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ willChange: 'transform' }}
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/36 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white text-3xl opacity-0 hover:opacity-100 transition-opacity">
                      🔍
                    </span>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                className="relative max-w-4xl w-full max-h-96 md:max-h-[600px]"
                layoutId={`gallery-${selectedImage.id}`}
                onClick={(e) => e.stopPropagation()}
                style={{ willChange: 'transform' }}
              >
                <div className="relative w-full h-96 md:h-[600px]">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    style={{ willChange: 'transform' }}
                  />
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute -top-10 right-0 text-white text-3xl hover:text-soft-gold transition-colors"
                >
                  <FaTimes />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
