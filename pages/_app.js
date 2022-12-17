import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { SSRProvider } from 'react-bootstrap';
import ReactGA from "react-ga";

const TRACKING_ID = "G-GJM0P2R7PR";
ReactGA.initialize(TRACKING_ID);


const App = ({ Component, pageProps }) => {
  return (
    <SSRProvider>
      <ThemeProvider>
        <Component {...pageProps} />
        
      </ThemeProvider>


    </SSRProvider>
    
    
  );
};

export default App;
