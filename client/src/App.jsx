import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
// import Router from './routes';
// import './App.css'
import React, { useEffect, useContext } from 'react';

import TestPage from "./pages/TestPage.jsx"
import { Center, Box, Container } from '@mantine/core';
import classes from "./App.module.css"
import Footer from './components/Footer.jsx';
import { UserProvider } from './contexts/UserContext.js';

function App() {

  return (
    <MantineProvider>
      <UserProvider>
      <Box className={classes.mainBox}>
        <Box className={classes.content}>
          <TestPage />
        </Box>
        <Box className={classes.footer}>
          <Footer />
        </Box>
      </Box>
      </UserProvider>
    </MantineProvider>
  )
}

export default App
