import { config as fortawesomeConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Dialog } from "@headlessui/react";
// Device detection utilities no longer needed here - handled in _document.tsx
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRef, useState } from "react";
import "../styles/globals.css";
fortawesomeConfig.autoAddCss = false;

// Dynamically imported components - now using unified responsive components
const ResponsiveNavbar = dynamic(() => import("@components/Navbar/ResponsiveNavbar"), {
  ssr: false,
});
const ResponsiveFooter = dynamic(() => import("@components/Footer/ResponsiveFooter"), {
  ssr: false,
});
const BottomNavbar = dynamic(() => import("@components/Navbar/BottomNavbar"), { ssr: false });
const Sidebar = dynamic(() => import("@components/Sidebar/Sidebar"), { ssr: false });
const SidebarOverlay = dynamic(() => import("@components/Sidebar/SidebarOverlay"), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  // Device detection is now handled in _document.tsx via CSS classes on <body>
  // For backward compatibility, we'll pass a default isMobile value
  // Components should primarily use CSS media queries instead
  const enhancedPageProps = {
    ...pageProps,
    isMobile: false, // Deprecated - components should use CSS media queries
    windowWidth: undefined, // Deprecated - use CSS media queries instead
    windowHeight: undefined, // Deprecated - use CSS media queries instead
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="BRASA at UCF, the Brazilian Student Association at UCF, is the biggest student organization dedicated to supporting Brazilian students in Orlando."
        />
        <link rel="icon" href="/static/favicon.ico" />
        <title>UCF BRASA</title>
      </Head>

      {/* Unified responsive navigation */}
      <ResponsiveNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      {/* Sidebar - only show on mobile/tablet */}
      <Dialog static open={showSidebar} onClose={setShowSidebar} initialFocus={overlayRef}>
        <Sidebar showSidebar={showSidebar} toggleSidebar={setShowSidebar} />
        {showSidebar && <SidebarOverlay toggleSidebar={setShowSidebar} />}
      </Dialog>

      {/* Main content */}
      <Component {...enhancedPageProps} />

      {/* Unified responsive footer */}
      <ResponsiveFooter />

      {/* Bottom navbar - only visible on mobile using CSS */}
      <div className="lg:hidden">
        <BottomNavbar />
      </div>
    </>
  );
}

// Device detection is now handled in _document.tsx for better performance
// and proper SSR support in the Pages Router

export default MyApp;
