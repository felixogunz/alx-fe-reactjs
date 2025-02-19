import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext(); // Create the context

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize user state (can be null or an initial user object)

  // You can also add other context values here if needed, like:
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [theme, setTheme] = useState('light');

  return (
    <UserContext.Provider value={{ user, setUser /*, isLoggedIn, setIsLoggedIn, theme, setTheme */ }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
