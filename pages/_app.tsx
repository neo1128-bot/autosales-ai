import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.css'

   export default function App({ Component, pageProps }: AppProps) {
     return (
       <>
         <Component {...pageProps} />
         <ToastContainer />
       </>
     )
   }

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  )
}

export default MyApp
