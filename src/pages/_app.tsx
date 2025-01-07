import Sidebar from "@components/Sidebar/Sidebar";
import { config as fortawesomeConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import useWindowDimensions from "@hooks/useWindowDimension";
import { MOBILE_THRESHOLD } from "@util/constants";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import "../styles/globals.css";
fortawesomeConfig.autoAddCss = false;

const BottomNavbar = dynamic(() => import("@components/Navbar/BottomNavbar"), { ssr: false });
const DesktopNavbar = dynamic(() => import("@components/Navbar/DesktopNavbar"), { ssr: false });
const MobileNavbar = dynamic(() => import("@components/Navbar/MobileNavbar"), { ssr: false });
const DesktopFooter = dynamic(() => import("@components/Footer/DesktopFooter"), {
  ssr: false,
});
const MobileFooter = dynamic(() => import("@components/Footer/MobileFooter"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  const { windowWidth, windowHeight } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(false);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

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
      {showSidebar && isMobile && (
        <Sidebar showSidebar={showSidebar} toggleSidebar={setShowSidebar} />
      )}
      <Component {...pageProps} />
      {isMobile ? <MobileFooter /> : <DesktopFooter />}
      {isMobile && <BottomNavbar />}
    </>
  );
}

export default MyApp;
