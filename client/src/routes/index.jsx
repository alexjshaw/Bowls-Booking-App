import { useRoutes } from "react-router-dom";
import BookingPage from '../pages/BookingPage';
import MyBookingsPage from "../pages/MyBookingsPage";
import Register from "../pages/Register"
import Login from "../pages/Login";
import Reset from "../pages/Reset"

export default function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <BookingPage />
    },
    {
      path: '/bookings',
      element: <MyBookingsPage />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/reset',
      element: <Reset />
    }
  ])
}
