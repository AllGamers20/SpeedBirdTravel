import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AirSpace, CampFire, dale, nunito } from '@/Data/_fonts';


export default function App({ Component, pageProps }: AppProps) {
  return(
    <main className={`${dale.variable} ${nunito.variable} ${CampFire.variable} ${AirSpace.variable} `}>
      <Component {...pageProps} />
    </main>
    
  ); 
}
