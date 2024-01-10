import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from 'react-router-dom';
import { auth } from "../utils/firebase";
import { useUser } from "../contexts/UserContext";

function ProtectedRoute({ children }) {
  // const [user, loading, error] = useAuthState(auth);
  const { currentUser } = useUser();

  console.log('user', currentUser)

  // if (loading) {
  //   return <div>Loading...</div>; // Or any loading component
  // }

  // if (!user) {
  //   return <Navigate to="/login" />;
  // }

  // if (!user.approved) {
  //   return <Navigate to="/waiting-for-approval" />
  // }
  
  return children;
}

export default ProtectedRoute;