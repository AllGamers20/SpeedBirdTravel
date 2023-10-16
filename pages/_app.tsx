import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { aleo, nunito } from '@/pages/fonts';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <main className={`${nunito.variable}`} >
      <Component {...pageProps} />
    </main>
    
  ); 
}
