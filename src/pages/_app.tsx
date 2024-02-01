import type { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import globalSteyls from '@styles/globalStyles'

export default function App({
  Component,
  pageProps: { dehydratedState, session, ...pageProps },
}: AppProps) {
  return (
    <>
      <Global styles={globalSteyls} />
      <Component {...pageProps} />
    </>
  )
}
