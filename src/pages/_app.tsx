import { Footer, Navbar } from "@components";
import { config as fortawesomeConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useWindowDimensions } from "@hooks";
import { User } from "@interfaces";
import { MOBILE_THRESHOLD } from "@util";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import "../styles/globals.css";
fortawesomeConfig.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const { windowWidth, windowHeight } = useWindowDimensions();
  const isMobile = (windowWidth || 350) < MOBILE_THRESHOLD;
  const [userLogin, setUserLogin] = useState<User>();

  pageProps = { ...pageProps, windowWidth, windowHeight, isMobile, userLogin };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="UCF BRASA icon" href="/static/favicon.ico" />
        <title>UCF BRASA</title>
      </Head>

      <Navbar isMobile={isMobile} userLogged={userLogin} />
      <Component {...pageProps} />
      <Footer isMobile={isMobile} userLogged={userLogin} />
    </>
  );
}

export default MyApp;
