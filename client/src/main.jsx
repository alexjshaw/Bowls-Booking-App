import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { MantineProvider } from "@mantine/core";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext.jsx";

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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <MantineProvider>
        <UserProvider>
          <App />
          {/* <RouterProvider router={router} /> */}
        </UserProvider>
      </MantineProvider>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
