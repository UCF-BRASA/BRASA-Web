import { Footer, Navbar } from "@components";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useWindowDimensions } from "@hooks";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const { windowWidth, windowHeight } = useWindowDimensions();
  pageProps = { ...pageProps, windowWidth, windowHeight };

  return (
    <>
      <Head>
        <link rel="BRASA icon" href="/static/favicon.ico" />
        <title>UCF BRASA</title>
      </Head>

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
