'use client';

import React, { useEffect } from 'react';
import { Navbar } from '@/components';
import {
  HeroSection,
  CountdownSection,
  LoveStorySection,
  EventScheduleSection,
  VenueSection,
  GallerySection,
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
      {/* Navigation */}
      <Navbar coupleInitials={coupleData.initials} />

      {/* Sections */}
      <HeroSection
        groomName={coupleData.groomName}
        brideName={coupleData.brideName}
        weddingDate={coupleData.weddingDate}
        heroImage={coupleData.heroImage}
      />

      <CountdownSection weddingDate={coupleData.weddingDate} />

      <LoveStorySection loveStory={coupleData.loveStory} />

      <EventScheduleSection schedule={coupleData.schedule} />

      <VenueSection
        venue={coupleData.venue}
        accommodations={coupleData.accommodations}
      />

      <GallerySection images={galleryData} />

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
