import { config as fortawesomeConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
// Dialog from Headless UI is client-only (uses document/window). Import dynamically to avoid
// server/client markup mismatch during hydration.
import useWindowDimensions from "@hooks/useWindowDimension";
import { MOBILE_THRESHOLD } from "@util/constants";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import "../styles/globals.css";
fortawesomeConfig.autoAddCss = false;

// Dynamicaly imported components
const BottomNavbar = dynamic(() => import("@components/Navbar/BottomNavbar"), { ssr: false });
const DesktopNavbar = dynamic(() => import("@components/Navbar/DesktopNavbar"), { ssr: false });
const MobileNavbar = dynamic(() => import("@components/Navbar/MobileNavbar"), { ssr: false });
const DesktopFooter = dynamic(() => import("@components/Footer/DesktopFooter"), {
  ssr: false,
});
const MobileFooter = dynamic(() => import("@components/Footer/MobileFooter"), {
  ssr: false,
});
const Sidebar = dynamic(() => import("@components/Sidebar/Sidebar"), {
  ssr: false,
});
const SidebarOverlay = dynamic(() => import("@components/Sidebar/SidebarOverlay"), {
  ssr: false,
});
const Dialog = dynamic(() => import("@headlessui/react").then((mod) => mod.Dialog), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  const { windowWidth, windowHeight } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // mark that we've mounted on the client so we can safely render
    // client-only UI that depends on window/document without causing
    // server/client hydration mismatches
    setMounted(true);

    if (windowWidth && windowHeight) {
      const mobileStatus = windowWidth < MOBILE_THRESHOLD;
      setIsMobile(mobileStatus);
    }
  }, [windowWidth, windowHeight]);

  // Only include isMobile in pageProps after we've mounted on the client.
  // This prevents pages from rendering differently between server and client
  // during the initial hydration phase.
  pageProps = {
    ...pageProps,
    windowWidth,
    windowHeight,
    ...(mounted ? { isMobile } : {}),
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

      {mounted &&
        (isMobile ? (
          <MobileNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        ) : (
          <DesktopNavbar />
        ))}
      {/* Why does adding a conditional here fuck up the transition? */}
      {/* {showSidebar && isMobile && ( */}
      {mounted && (
        <Dialog static open={showSidebar} onClose={setShowSidebar} initialFocus={overlayRef}>
          <Sidebar showSidebar={showSidebar} toggleSidebar={setShowSidebar} />
          {showSidebar && <SidebarOverlay toggleSidebar={setShowSidebar} />}
        </Dialog>
      )}
      {/* )} */}
      <Component {...pageProps} />
      {mounted && (isMobile ? <MobileFooter /> : <DesktopFooter />)}
      {mounted && isMobile && <BottomNavbar />}
    </>
  );
}

export default MyApp;
