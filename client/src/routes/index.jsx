import { useRoutes } from "react-router-dom";
import BookingPage from '../pages/BookingPage';
import MyBookingsPage from "../pages/MyBookingsPage";

export default function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <BookingPage />
    },
    {
      path: '/bookings',
      element: <MyBookingsPage />
    }
  ])
}
