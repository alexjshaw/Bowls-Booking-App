import React, { useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from "../utils/firebase";
import { useUser } from "../contexts/UserContext";

function ProtectedRoute({ children }) {
  const [user, loading] = useAuthState(auth);
  const { currentUser, fetchCurrentUser } = useUser();
  const [isUserFetched, setIsUserFetched] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (user && !currentUser._id) {
      fetchCurrentUser(user.uid).then(() => setIsUserFetched(true));
    } else {
      setIsUserFetched(true);
    }
  }, [user, currentUser, fetchCurrentUser]);

  if (loading || !isUserFetched) {
    return <div>Loading...</div>; // Loading state
  }

  if (!user) {
    // Redirect to login if not authenticated with Firebase
    return <Navigate to="/login" />;
  }

  // Ensure currentUser data is fully fetched and user is authenticated
  if (user && currentUser && !currentUser.approved && location.pathname !== '/waiting-for-approval') {
    // Redirect to waiting page if user is logged in but not approved
    return <Navigate to="/waiting-for-approval" />;
  }

  return children; // User is approved, render the protected route
}

export default ProtectedRoute;
