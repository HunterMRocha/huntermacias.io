import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { SSRProvider } from 'react-bootstrap';


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
