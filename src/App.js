import Router from './router.js'
import Navbar from './components/Navbar/'
import Footer from './components/Footer/'

import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

const App = () => {

  return (
    <>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column'}}>
        <Navbar />
        <Container maxWidth='lg' sx={{ flexGrow: 1 }}>
          <Router />
        </Container>
        <Footer />
      </Box>
    </>
  );
}

export default App;
