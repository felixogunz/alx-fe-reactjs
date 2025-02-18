// src/UserContext.js

import React, { createContext } from 'react';

// Create the UserContext
export const UserContext = createContext();

// Create a provider component that wraps children with UserContext.Provider
export const UserProvider = ({ children, userData }) => {
  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};

