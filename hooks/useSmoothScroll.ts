import { useEffect } from 'react';

declare global {
  interface Window {
    Lenis?: any;
  }
}

export const useSmoothScroll = () => {
  useEffect(() => {
    // Dynamically import Lenis only on client-side
    const importLenis = async () => {
      try {
        const Lenis = (await import('lenis')).default;

        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smooth: true,
          smoothTouch: false,
          touchMultiplier: 2,
        } as any);

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup
        return () => {
          lenis.destroy();
        };
      } catch (error) {
        console.error('Failed to initialize Lenis:', error);
      }
    };

    importLenis();
  }, []);
};
