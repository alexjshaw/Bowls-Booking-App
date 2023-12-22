// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from "@mantine/core";
import classes from "./App.module.css";
import Footer from "./components/Footer.jsx";
import { useUser } from "./contexts/UserContext.jsx";
import Router from "./routes";
import { Outlet } from 'react-router-dom';

function App() {
  const { user } = useUser();

  return (
      // <Box className={classes.fullViewportContainer}>
      //   <Box className={classes.contentBox}>
      //     <Router />
      //   </Box>
      //   <Box className={classes.navSection}>
      //     <Footer />
      //   </Box>
      // </Box>
      <Box className={classes.fullViewportContainer}>
        <Outlet />
      </Box>
  );
}

export default App;
