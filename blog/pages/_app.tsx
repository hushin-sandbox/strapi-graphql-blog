import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RelayEnvironmentProvider } from 'react-relay'
import { relayEnvironment } from '../src/lib/relayEnvironment'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <React.Suspense fallback="Loading...">
        <Component {...pageProps} />
      </React.Suspense>
    </RelayEnvironmentProvider>
  )
}

export default MyApp
