'use client';

import { useEffect } from 'react';

type AutoJourneyOptions = {
  sectionIds: string[];
  intervalMs?: number;
  enabled?: boolean;
};

export const useAutoJourney = ({
  sectionIds,
  intervalMs = 8500,
  enabled = true,
}: AutoJourneyOptions) => {
  useEffect(() => {
    if (!enabled || sectionIds.length === 0) {
      return;
    }

    const originalScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';

    const body = document.body;
    const previousOverflow = body.style.overflowY;
    body.style.overflowY = 'hidden';

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      body.style.overflowY = previousOverflow;
      document.documentElement.style.scrollBehavior = originalScrollBehavior;
      return;
    }

    let currentIndex = 0;
    let timeoutId: number | undefined;

    const goToSection = (index: number) => {
      const section = document.getElementById(sectionIds[index]);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const play = () => {
      goToSection(currentIndex);
      currentIndex = (currentIndex + 1) % sectionIds.length;
      timeoutId = window.setTimeout(play, intervalMs);
    };

    timeoutId = window.setTimeout(play, 1200);

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      body.style.overflowY = previousOverflow;
      document.documentElement.style.scrollBehavior = originalScrollBehavior;
    };
  }, [sectionIds, intervalMs, enabled]);
};
