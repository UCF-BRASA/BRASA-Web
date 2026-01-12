/**
 * Modern responsive hook using CSS media queries
 * Replaces the old useWindowDimensions approach
 */

import { useEffect, useState } from 'react';
import { BREAKPOINTS, type BreakpointName } from '@utils/responsive';

interface ResponsiveState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  currentBreakpoint: BreakpointName;
}

/**
 * Hook for responsive behavior when CSS media queries aren't sufficient
 * Use sparingly - prefer CSS media queries for layout and styling
 */
export function useResponsive(): ResponsiveState {
  const [state, setState] = useState<ResponsiveState>({
    isMobile: false,
    isTablet: false,
    isDesktop: true, // Default to desktop for SSR
    currentBreakpoint: 'desktop',
  });

  useEffect(() => {
    const updateState = () => {
      const width = window.innerWidth;
      
      const isMobile = width < BREAKPOINTS.tablet;
      const isTablet = width >= BREAKPOINTS.tablet && width < BREAKPOINTS.desktop;
      const isDesktop = width >= BREAKPOINTS.desktop;
      
      let currentBreakpoint: BreakpointName = 'desktop';
      if (isMobile) currentBreakpoint = 'mobile';
      else if (isTablet) currentBreakpoint = 'tablet';
      
      setState({
        isMobile,
        isTablet,
        isDesktop,
        currentBreakpoint,
      });
    };

    // Initial check
    updateState();

    // Listen for resize events
    window.addEventListener('resize', updateState);
    
    return () => window.removeEventListener('resize', updateState);
  }, []);

  return state;
}

/**
 * Simple hook that returns true if current viewport is mobile
 * Backward compatibility for components that only need mobile detection
 */
export function useIsMobile(): boolean {
  const { isMobile } = useResponsive();
  return isMobile;
}

export default useResponsive;
