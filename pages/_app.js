import '@/styles/output.css'
// import '@/styles/globals.css'
// import '@/styles/style.css'
import { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from '@chakra-ui/react'
import "bootstrap-icons/font/bootstrap-icons.css";
import LoadingP from './components/partials/loadingpage';
import NextNProgress from 'nextjs-progressbar';
export default function App({ Component, pageProps }) {
  const [isload, setisload] = useState(true)
  useEffect(()=>{
    if(typeof window !== 'undefined'){
    // require('../styles/bundle')
  }
  setisload(false)
  },[])
  const queryClient = new QueryClient();
//   <Script defer src="bundle.js" />
//   <Script   defer
// src="https://static.cloudflareinsights.com/beacon.min.js/v8b253dfea2ab4077af8c6f58422dfbfd1689876627854"
// integrity="sha512-bjgnUKX4azu3dLTVtie9u6TKqgx29RBwfj3QXYt5EKfWM/9hPSAI/4qcV5NACjwAo8UtTeWefx6Zq5PHcMm7Tg=="
// data-cf-beacon='{"rayId":"7f050fc8ac57b773","version":"2023.7.0","r":1,"token":"9a6015d415bb4773a0bff22543062d3b","si":100}'
// crossorigin="anonymous" />



  return <>
  <NextNProgress />
  {isload ? <LoadingP/>:
  <QueryClientProvider client={queryClient}>
  {/* <ChakraProvider> */}
      <Component {...pageProps} />
      {/* </ChakraProvider> */}
      <ToastContainer />
  </QueryClientProvider>}
  </> 
  
}
