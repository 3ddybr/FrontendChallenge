import {GlobalStyle} from '../styles/global';
import type { AppProps } from 'next/app'
import { AppProvider } from '../contexts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <AppProvider>    
    <Component {...pageProps} />
    </AppProvider>
    <GlobalStyle/>
    </>
  )
}

export default MyApp
