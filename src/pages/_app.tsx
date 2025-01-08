import { config as fortawesomeConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Dialog } from "@headlessui/react"; // How to make this import dynamic?
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

function MyApp({ Component, pageProps }: AppProps) {
  const { windowWidth, windowHeight } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(false);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (windowWidth && windowHeight) {
      const mobileStatus = windowWidth < MOBILE_THRESHOLD;
      setIsMobile(mobileStatus);
    }
  }, [windowWidth, windowHeight]);

  pageProps = { ...pageProps, windowWidth, windowHeight, isMobile };

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

      {isMobile ? (
        <MobileNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      ) : (
        <DesktopNavbar />
      )}
      {/* Why does adding a conditional here fuck up the transition? */}
      {/* {showSidebar && isMobile && ( */}
      <Dialog static open={showSidebar} onClose={setShowSidebar} initialFocus={overlayRef}>
        <Sidebar showSidebar={showSidebar} toggleSidebar={setShowSidebar} />
        {showSidebar && <SidebarOverlay toggleSidebar={setShowSidebar} />}
      </Dialog>
      {/* )} */}
      <Component {...pageProps} />
      {isMobile ? <MobileFooter /> : <DesktopFooter />}
      {isMobile && <BottomNavbar />}
    </>
  );
}

export default MyApp;
