import { Footer, Navbar } from "@components";
import BottomNavbar from "@components/Navbar/BottomNavbar";
import { config as fortawesomeConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useWindowDimensions } from "@hooks";
import { setLoggedUser } from "@lib";
import { MOBILE_THRESHOLD } from "@util";
import Cookies from "js-cookie";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import "../styles/globals.css";
fortawesomeConfig.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const { windowWidth, windowHeight } = useWindowDimensions();
  const isMobile = (windowWidth || 350) < MOBILE_THRESHOLD;

  pageProps = { ...pageProps, windowWidth, windowHeight, isMobile };

  useEffect(() => {
    const id = Cookies.get("_id");

    // Check if the user is authenticated globally
    if (id) {
      const username = Cookies.get("username");
      const firstName = Cookies.get("firstName");
      const lastName = Cookies.get("lastName");
      const dateOfBirth = Cookies.get("dateOfBirth");
      const gender = Cookies.get("gender");
      const originCity = Cookies.get("originCity");
      const major = Cookies.get("major");
      const schoolYear = Cookies.get("schoolYear");

      setLoggedUser(
        id!,
        username!,
        firstName!,
        lastName!,
        dateOfBirth!,
        gender!,
        originCity!,
        major!,
        schoolYear!
      );
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="BRASA at UCF, the Brazilian Student Association at UCF, is the biggest student organization dedicated to supporting Brazilian students in Orlando."
        />
        <link rel="UCF BRASA icon" href="/static/favicon.ico" />
        <title>UCF BRASA</title>
      </Head>

      <Navbar isMobile={isMobile} />
      <Component {...pageProps} />
      <Footer isMobile={isMobile} />
      {isMobile ? <BottomNavbar /> : <div></div>}
    </>
  );
}

export default MyApp;
