import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { SSRProvider } from 'react-bootstrap';
// import ReactGA from "react-ga";
// const TRACKING_ID = "G-GJM0P2R7PR";
// ReactGA.initialize(TRACKING_ID);
// import '@aws-amplify/ui-react/styles.css'
import { AmplifyProvider } from '@aws-amplify/ui-react';
// import Amplify from 'aws-amplify';

// import config from './aws-exports';

// Amplify.configure(config);

// import ReactDOM from 'react-dom/client';

const App = ({ Component, pageProps }) => {
  return (
    <AmplifyProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    
     </AmplifyProvider>
    
  );
};

export default App;
