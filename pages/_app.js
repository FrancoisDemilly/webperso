import '../styles/globals.css'
import { FormspreeProvider } from '@formspree/react';

function MyApp({ Component, pageProps }) {
  return (
    <FormspreeProvider project="1586662467931471232">
      <Component {...pageProps} />
    </FormspreeProvider>
  
  )
}

export default MyApp
