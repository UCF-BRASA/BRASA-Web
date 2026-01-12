/**
 * Server-side device detection utilities
 * Used to eliminate CLS by detecting device type during SSR
 */

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export interface DeviceInfo {
  type: DeviceType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width?: number;
}

/**
 * Detect device type from User-Agent string
 * This runs on the server during SSR to eliminate client-side detection delay
 */
export function detectDeviceFromUserAgent(userAgent: string): DeviceInfo {
  const ua = userAgent.toLowerCase();
  
  // Mobile device patterns
  const mobilePattern = /android|iphone|ipod|blackberry|windows phone|mobile/i;
  
  // Tablet patterns (including iPad)
  const tabletPattern = /ipad|tablet|kindle|playbook|silk/i;
  
  // More specific mobile detection
  const isMobileDevice = mobilePattern.test(ua) && !tabletPattern.test(ua);
  const isTabletDevice = tabletPattern.test(ua);
  const isDesktopDevice = !isMobileDevice && !isTabletDevice;
  
  // Determine primary type
  let type: DeviceType = 'desktop';
  if (isMobileDevice) type = 'mobile';
  else if (isTabletDevice) type = 'tablet';
  
  return {
    type,
    isMobile: isMobileDevice,
    isTablet: isTabletDevice,
    isDesktop: isDesktopDevice,
  };
}

/**
 * Get CSS class names based on device type
 */
export function getDeviceClasses(deviceInfo: DeviceInfo): string {
  const classes = [`device-${deviceInfo.type}`];
  
  if (deviceInfo.isMobile) classes.push('mobile');
  if (deviceInfo.isTablet) classes.push('tablet');
  if (deviceInfo.isDesktop) classes.push('desktop');
  
  return classes.join(' ');
}

/**
 * Determine if device should use mobile layout
 * Includes both mobile phones and tablets for your current design
 */
export function shouldUseMobileLayout(deviceInfo: DeviceInfo): boolean {
  return deviceInfo.isMobile || deviceInfo.isTablet;
}
