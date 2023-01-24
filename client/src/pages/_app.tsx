import '@/styles/globals.css'
import '@/styles/nprogress.css'
import '@/styles/scss/main.scss'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import { Provider } from 'react-redux'
import { store } from '@/store'
import Layout from '@/pages/layout'
import nProgress from 'nprogress'
import Loader from '@/pages/loader'
import { useLayoutEffect, useState } from 'react'

Router.events.on('routeChangeStart', nProgress.start)
Router.events.on('routeChangeError', nProgress.done)
Router.events.on('routeChangeComplete', nProgress.done)

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const handleTransitionEnd = () => {
    const root = document.getElementById('__next')
    const loader = document.getElementById('loader')
    root?.removeChild(loader!)
  }

  useLayoutEffect(() => {
    setTimeout(() => setIsLoading(false), 1400)
  }, [])

  return (
    <>
      <Provider store={store}>
        <Loader isLoading={isLoading} onTransitionEnd={handleTransitionEnd} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}
