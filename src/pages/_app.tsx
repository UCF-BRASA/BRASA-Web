import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Navbar, Footer } from '@components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <title>UCF BRASA</title>
      </Head>

      <div className="flex flex-col h-screen justify-between">
        <Navbar />
        <Component {...pageProps} />  
        <Footer />
      </div>
    </>
  )
}

export default MyApp
