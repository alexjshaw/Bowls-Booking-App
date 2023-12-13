import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    club: ''
  });

  const fetchUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/user/${userId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    const userId = '6579c381f0143aa691b4f945'; // This will be dynamic in the future
    fetchUser(userId);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContext;
