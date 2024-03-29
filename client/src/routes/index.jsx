import { useRoutes } from "react-router-dom";
import BookingPage from '../pages/BookingPage';
import MyBookingsPage from "../pages/MyBookingsPage";
import Register from "../pages/Register"
import Login from "../pages/Login";
import Reset from "../pages/Reset"
import ProtectedRoute from "../components/ProtectedRoute";
import AwaitingApprovalPage from "../pages/AwaitingApprovalPage";

export default function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <ProtectedRoute><BookingPage /></ProtectedRoute>
    },
    {
      path: '/bookings',
      element: <ProtectedRoute><MyBookingsPage /></ProtectedRoute>
    },
    {
      path: '/waiting-for-approval',
      element: <ProtectedRoute><AwaitingApprovalPage /></ProtectedRoute>
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
