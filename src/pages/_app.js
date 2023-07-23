import '@/styles/globals.css'
import { Comfortaa } from 'next/font/google'
const comfortaa = Comfortaa({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return <main className={comfortaa.className}>
            <Component {...pageProps} />
        </main>
}
