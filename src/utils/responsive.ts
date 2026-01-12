/**
 * Responsive design utilities
 * Provides consistent breakpoints and responsive helper functions
 */

export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1400, // Your current MOBILE_THRESHOLD
} as const;

export type BreakpointName = keyof typeof BREAKPOINTS;

/**
 * CSS classes for responsive design
 */
export const RESPONSIVE_CLASSES = {
  // Layout utilities
  'mobile-only': 'block lg:hidden',
  'tablet-only': 'hidden lg:block xl:hidden',
  'desktop-only': 'hidden xl:block',
  'mobile-tablet': 'block xl:hidden',
  'tablet-desktop': 'hidden lg:block',
  
  // Navigation classes
  'nav-mobile': 'lg:hidden',
  'nav-desktop': 'hidden lg:block',
  
  // Grid systems
  'grid-mobile': 'grid-cols-1',
  'grid-tablet': 'lg:grid-cols-2',
  'grid-desktop': 'xl:grid-cols-3',
  
  // Spacing
  'spacing-mobile': 'px-4 py-6',
  'spacing-tablet': 'lg:px-8 lg:py-8',
  'spacing-desktop': 'xl:px-12 xl:py-12',
  
  // Typography
  'text-mobile': 'text-base',
  'text-tablet': 'lg:text-lg',
  'text-desktop': 'xl:text-xl',
  
  // Common component patterns
  'card-mobile': 'w-full max-w-sm mx-auto',
  'card-tablet': 'lg:max-w-md',
  'card-desktop': 'xl:max-w-lg',
} as const;

/**
 * Get responsive classes for a component
 */
export function getResponsiveClasses(...classNames: (keyof typeof RESPONSIVE_CLASSES)[]): string {
  return classNames.map(name => RESPONSIVE_CLASSES[name]).join(' ');
}

/**
 * Create responsive class string from base classes
 */
export function createResponsiveClasses(
  mobile: string,
  tablet?: string,
  desktop?: string
): string {
  const classes = [mobile];
  
  if (tablet) {
    classes.push(`lg:${tablet.replace(/^([\w-]+:)?/, '')}`);
  }
  
  if (desktop) {
    classes.push(`xl:${desktop.replace(/^([\w-]+:)?/, '')}`);
  }
  
  return classes.join(' ');
}

/**
 * Check if current viewport matches breakpoint (client-side only)
 */
export function matchesBreakpoint(breakpoint: BreakpointName): boolean {
  if (typeof window === 'undefined') return false;
  
  const width = window.innerWidth;
  
  switch (breakpoint) {
    case 'mobile':
      return width < BREAKPOINTS.tablet;
    case 'tablet':
      return width >= BREAKPOINTS.tablet && width < BREAKPOINTS.desktop;
    case 'desktop':
      return width >= BREAKPOINTS.desktop;
    default:
      return false;
  }
}
