import { Box } from "@mantine/core";
import classes from "./App.module.css";
import Footer from "./components/Footer.jsx";
import Router from "./routes";

function App() {
  return (
      <Box className={classes.fullViewportContainer}>
        <Box className={classes.contentBox}>
          <Router />
        </Box>
        <Box className={classes.navSection}>
          <Footer />
        </Box>
      </Box>
  );
}

export default App;
