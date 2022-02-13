import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RelayEnvironmentProvider } from 'react-relay'
import { relayEnvironment } from '../src/lib/relayEnvironment'
import { Suspense } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <Suspense fallback="Loading...">
        <Component {...pageProps} />
      </Suspense>
    </RelayEnvironmentProvider>
  )
}

export default MyApp
