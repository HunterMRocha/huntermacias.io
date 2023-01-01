import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { SSRProvider } from 'react-bootstrap';
import '@aws-amplify/ui-react/styles.css'
import { AmplifyProvider } from '@aws-amplify/ui-react';
import Head from "next/head";


const App = ({ Component, pageProps }) => {
  return (
    <SSRProvider>

      <AmplifyProvider>
        <ThemeProvider>
          
          <Component {...pageProps} />
        </ThemeProvider>
      
      </AmplifyProvider>
    </SSRProvider>
    
  );
};

export default App;
