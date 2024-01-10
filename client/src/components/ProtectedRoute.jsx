import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from 'react-router-dom';
import { auth } from "../utils/firebase";
import { useUser } from "../contexts/UserContext";
import React, { useEffect, useState } from 'react';

function ProtectedRoute({ children }) {
  const [user, loading, error] = useAuthState(auth);
  const { currentUser, fetchCurrentUser } = useUser();
  const [isUserFetched, setIsUserFetched] = useState(false);

  useEffect(() => {
    if (user && !currentUser._id) {
      // Fetch the current user data
      fetchCurrentUser(user.uid).then(() => {
        setIsUserFetched(true);
      });
    } else {
      setIsUserFetched(true);
    }
  }, [user, currentUser, fetchCurrentUser]);

  if (loading || !isUserFetched) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!currentUser.approved) {
    return <Navigate to="/waiting-for-approval" />;
  }

  return children;
}

export default ProtectedRoute;
