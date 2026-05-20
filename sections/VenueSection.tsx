'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaMapPin, FaPhone, FaGlobe, FaCar } from 'react-icons/fa';
import { Button } from '@/components/Button';
import { GlassCard } from '@/components/GlassCard';
import { VenueInfo } from '@/types';

interface VenueSectionProps {
  venue: VenueInfo;
  accommodations: Array<{
    id: number;
    name: string;
    distance: string;
    phone: string;
    website: string;
    specialRate: string;
  }>;
}

export const VenueSection: React.FC<VenueSectionProps> = ({
  venue,
  accommodations,
}) => {
  const handleOpenMaps = () => {
    const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(venue.name)}/@${venue.latitude},${venue.longitude}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <section
      id="venue"
      className="relative min-h-screen w-full flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-6xl w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-dark-charcoal dark:text-cream">
            The Venue
          </h2>
          <p className="text-lg text-warm-brown dark:text-champagne">
            Where magic will happen
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden hover-lift"
          >
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              src={`https://www.google.com/maps?q=${encodeURIComponent(venue.address)}&output=embed`}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            <GlassCard hover>
              <div className="flex items-start gap-4">
                <FaMapPin className="text-dusty-rose text-2xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-serif font-bold text-dark-charcoal dark:text-cream mb-2">
                    {venue.name}
                  </h3>
                  <p className="text-warm-brown dark:text-champagne">{venue.address}</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard hover>
              <div className="flex items-start gap-4">
                <FaPhone className="text-dusty-rose text-2xl mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-warm-brown dark:text-champagne uppercase tracking-wider">
                    Contact
                  </p>
                  <p className="text-lg font-serif font-semibold text-dark-charcoal dark:text-cream">
                    {venue.phone}
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard hover>
              <div className="flex items-start gap-4">
                <FaGlobe className="text-dusty-rose text-2xl mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-warm-brown dark:text-champagne uppercase tracking-wider">
                    Website
                  </p>
                  <a
                    href={venue.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-serif font-semibold text-dusty-rose hover:text-warm-brown transition-colors"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </GlassCard>

            <Button onClick={handleOpenMaps} className="w-full">
              View on Google Maps
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <GlassCard hover>
            <div className="flex items-start gap-4">
              <FaCar className="text-dusty-rose text-2xl mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-serif font-bold text-dark-charcoal dark:text-cream mb-2">
                  Parking
                </h4>
                <p className="text-warm-brown dark:text-champagne text-sm">
                  As per available space park your car.
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-serif font-bold text-dark-charcoal dark:text-cream text-center mb-12">
            Nearby Accommodations
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {accommodations.map((accommodation) => (
              <GlassCard key={accommodation.id} hover>
                <h4 className="text-xl font-serif font-bold text-dark-charcoal dark:text-cream mb-3">
                  {accommodation.name}
                </h4>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-warm-brown dark:text-champagne">
                    📍 {accommodation.distance}
                  </p>
                  <p className="text-sm text-dusty-rose font-semibold">
                    {accommodation.specialRate}
                  </p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`tel:${accommodation.phone}`}
                    className="flex-1 px-4 py-2 bg-dusty-rose/20 text-dusty-rose rounded text-sm font-semibold hover:bg-dusty-rose/30 transition-colors"
                  >
                    Call
                  </a>
                  <a
                    href={accommodation.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-soft-gold/20 text-soft-gold rounded text-sm font-semibold hover:bg-soft-gold/30 transition-colors"
                  >
                    Visit
                  </a>
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
