'use client';

import { useState, useEffect } from 'react';

export const useIsMobile = (breakpoint = 768): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

      const handleResize = () => {
        setIsMobile(mediaQuery.matches);
      };

      handleResize(); // Set initial state
      mediaQuery.addEventListener('change', handleResize);

      return () => {
        mediaQuery.removeEventListener('change', handleResize);
      };
    }
    return;
  }, [breakpoint]);

  return isMobile;
};
