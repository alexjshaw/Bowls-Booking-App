import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
// import Router from './routes';
// import './App.css'
import TestPage from "./pages/TestPage.jsx"
import { Center, Box, Container } from '@mantine/core';
import classes from "./App.module.css"
import Footer from './components/Footer.jsx';

function App() {

  return (
    <MantineProvider>
      <Box className={classes.mainBox}>
        <Box className={classes.content}>
          <TestPage />
        </Box>
        <Box className={classes.footer}>
          <Footer />
        </Box>
      </Box>
    </MantineProvider>
  )
}

export default App
