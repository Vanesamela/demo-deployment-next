import { FC, ReactElement } from 'react'
import '../styles/globals.css'

type AppProps = {
  Component: FC
  pageProps: ReactElement
}
export default function App({ Component, pageProps }:AppProps) {
  return <Component {...pageProps} />
}
