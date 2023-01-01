import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { SSRProvider } from 'react-bootstrap';
import '@aws-amplify/ui-react/styles.css'
import { AmplifyProvider } from '@aws-amplify/ui-react';
import Head from "next/head";


const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

    <SSRProvider>

      <AmplifyProvider>
        <ThemeProvider>
          
          <Component {...pageProps} />
        </ThemeProvider>
      
      </AmplifyProvider>
    </SSRProvider>
    </div>
    
  );
};

export default App;
