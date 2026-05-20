'use client';

import React, { useEffect } from 'react';
import { Navbar, ParticleBackground, FloatingMenu } from '@/components';
import {
  HeroSection,
  CountdownSection,
  LoveStorySection,
  EventScheduleSection,
  VenueSection,
  RSVPSection,
  GallerySection,
  GuestbookSection,
  FooterSection,
} from '@/sections';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import coupleData from '@/config/coupleData';
import { galleryData } from '@/data/gallery';

export default function Home() {
  useSmoothScroll();

  useEffect(() => {
    // Check for dark mode preference
    if (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <main className="relative bg-cream dark:bg-dark-charcoal text-dark-charcoal dark:text-cream transition-colors duration-300">
      {/* Background Elements */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar coupleInitials={coupleData.initials} />

      {/* Floating Menu */}
      <FloatingMenu />

      {/* Sections */}
      <HeroSection
        groomName={coupleData.groomName}
        brideName={coupleData.brideName}
        weddingDate={coupleData.weddingDate}
      />

      <CountdownSection weddingDate={coupleData.weddingDate} />

      <LoveStorySection loveStory={coupleData.loveStory} />

      <EventScheduleSection schedule={coupleData.schedule} />

      <VenueSection
        venue={coupleData.venue}
        accommodations={coupleData.accommodations}
      />

      <RSVPSection mealOptions={coupleData.mealOptions} />

      <GallerySection images={galleryData} />

      <GuestbookSection />

      <FooterSection
        groomName={coupleData.groomName}
        brideName={coupleData.brideName}
        initials={coupleData.initials}
        socialLinks={coupleData.socialLinks}
        thankyouMessage={coupleData.thankyouMessage}
      />
    </main>
  );
}
