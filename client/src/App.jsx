// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from "@mantine/core";
import classes from "./App.module.css";
import Footer from "./components/Footer.jsx";
import { useUser } from "./contexts/UserContext.jsx";
// import Router from "./routes";
import { Outlet } from 'react-router-dom';
import BookingPage from "./pages/BookingPage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Reset from "./pages/Reset"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
      <Box className={classes.fullViewportContainer}>
        <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<BookingPage />} />
        </Routes>
      </Router>
        {/* <Box className={classes.contentBox}>
          <Router />
        </Box>
        <Box className={classes.navSection}>
          <Footer />
        </Box> */}
      </Box>
      // <Box className={classes.fullViewportContainer}>
      //   <Outlet />
      // </Box>
  );
}

export default App;

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="signup" element={<Signup />}/>
//       <Route path="login" element={<Login />}/>
//       <Route path="/" element={<Protected />} >
//         <Route path="/" index element={<BookingPage />} />
//         <Route path="/bookings" index element={<MyBookingsPage />} />
//       </Route>
//     </Route>
//   )
// )