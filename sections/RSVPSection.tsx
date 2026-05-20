'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/Button';
import { RSVPFormData } from '@/types';

interface RSVPSectionProps {
  mealOptions: string[];
}

export const RSVPSection: React.FC<RSVPSectionProps> = ({ mealOptions }) => {
  const [formData, setFormData] = useState<RSVPFormData>({
    guestName: '',
    email: '',
    attending: 'yes',
    numberOfGuests: 1,
    mealPreference: mealOptions[0] || 'Vegetarian',
    dietaryRestrictions: '',
    songRequest: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'numberOfGuests' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('RSVP Submitted:', formData);
      setIsSubmitted(true);
      setIsLoading(false);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          guestName: '',
          email: '',
          attending: 'yes',
          numberOfGuests: 1,
          mealPreference: mealOptions[0] || 'Vegetarian',
          dietaryRestrictions: '',
          songRequest: '',
          message: '',
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section
      id="rsvp"
      className="relative min-h-screen w-full flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-2xl w-full">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-dark-charcoal dark:text-cream">
            RSVP
          </h2>
          <p className="text-lg text-warm-brown dark:text-champagne">
            Please let us know if you'll be joining us!
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GlassCard>
            {isSubmitted ? (
              <motion.div
                className="text-center py-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-serif font-bold text-dusty-rose mb-2">
                  Thank You!
                </h3>
                <p className="text-warm-brown dark:text-champagne">
                  Your RSVP has been received. We can't wait to celebrate with you!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Guest Name */}
                <div>
                  <label className="block text-sm font-semibold text-dark-charcoal dark:text-cream mb-2">
                    Guest Name *
                  </label>
                  <input
                    type="text"
                    name="guestName"
                    value={formData.guestName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-dark-charcoal dark:text-cream mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>

                {/* Attending */}
                <div>
                  <label className="block text-sm font-semibold text-dark-charcoal dark:text-cream mb-2">
                    Will you be attending? *
                  </label>
                  <select
                    name="attending"
                    value={formData.attending}
                    onChange={handleChange}
                    className="w-full"
                  >
                    <option value="yes">Yes, I'll be there!</option>
                    <option value="no">No, I can't attend</option>
                  </select>
                </div>

                {/* Number of Guests */}
                {formData.attending === 'yes' && (
                  <div>
                    <label className="block text-sm font-semibold text-dark-charcoal dark:text-cream mb-2">
                      Number of Guests *
                    </label>
                    <input
                      type="number"
                      name="numberOfGuests"
                      value={formData.numberOfGuests}
                      onChange={handleChange}
                      min="1"
                      max="10"
                      className="w-full"
                    />
                  </div>
                )}

                {/* Meal Preference */}
                {formData.attending === 'yes' && (
                  <div>
                    <label className="block text-sm font-semibold text-dark-charcoal dark:text-cream mb-2">
                      Meal Preference *
                    </label>
                    <select
                      name="mealPreference"
                      value={formData.mealPreference}
                      onChange={handleChange}
                      className="w-full"
                    >
                      {mealOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Dietary Restrictions */}
                <div>
                  <label className="block text-sm font-semibold text-dark-charcoal dark:text-cream mb-2">
                    Dietary Restrictions
                  </label>
                  <input
                    type="text"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    placeholder="Let us know about any allergies..."
                    className="w-full"
                  />
                </div>

                {/* Song Request */}
                <div>
                  <label className="block text-sm font-semibold text-dark-charcoal dark:text-cream mb-2">
                    Song Request
                  </label>
                  <input
                    type="text"
                    name="songRequest"
                    value={formData.songRequest}
                    onChange={handleChange}
                    placeholder="What's your favorite song?"
                    className="w-full"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-dark-charcoal dark:text-cream mb-2">
                    Message for the Couple
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your wishes and blessings..."
                    rows={4}
                    className="w-full resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Submit RSVP'}
                </Button>
              </form>
            )}
          </GlassCard>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-warm-brown dark:text-champagne">
            Questions? Contact us at
            <a
              href="mailto:contact@weddingsite.com"
              className="text-dusty-rose hover:text-warm-brown transition-colors ml-1"
            >
              contact@weddingsite.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
