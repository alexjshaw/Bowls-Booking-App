import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase.js'; // Import Firebase auth

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    club: '',
    admin: null,
    approved: null
  });

  const [firebaseUser] = useAuthState(auth);

  const fetchCurrentUser = async (firebaseUID) => {
    try {
      const response = await fetch(`http://localhost:5000/user/firebase/${firebaseUID}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const userData = await response.json();
      setCurrentUser(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    if (firebaseUser) {
      fetchCurrentUser(firebaseUser.uid); // Use Firebase UID
    }
  }, [firebaseUser]);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, fetchCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContext;
