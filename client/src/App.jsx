import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from "@mantine/core";
import classes from "./App.module.css";
import Footer from "./components/Footer.jsx";
import { useUser } from "./contexts/UserContext.jsx";
import Router from "./routes";

function App() {
  const { user } = useUser();

  return (
    <MantineProvider>
      <Box className={classes.mainBox}>
        <Box className={classes.content}>
          <Router />
        </Box>
        <Box className={classes.footer}>
          <Footer />
        </Box>
      </Box>
    </MantineProvider>
  );
}

export default App;
