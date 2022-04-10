import Typography from '@mui/material/Typography'
import Navbar from './components/Navbar';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import HeroSection from './components/HeroSection';
import { Container } from '@mui/material';
import CakeSection from './components/CakeSection';
import ContactUs from './components/Contact';

const theme = createTheme({
  palette: {
    primary: {
      main: '#864313',
    },
  },
});

function App() {
  return (
   <ThemeProvider theme={theme}>
       <Navbar />
       <Container>
          <HeroSection /> 
          <CakeSection />
          <ContactUs />
       </Container>
   </ThemeProvider>
  );
}

export default App;