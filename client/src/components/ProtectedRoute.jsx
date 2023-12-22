import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from 'react-router-dom';
import { auth } from "../utils/firebase";

function ProtectedRoute({ children }) {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>; // Or any loading component
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
