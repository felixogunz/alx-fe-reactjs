import React, { createContext, useContext } from 'react';

// Create a UserContext using React.createContext()
const UserContext = createContext();

// Create a provider component that will wrap the app and provide the user data
export const UserProvider = ({ children }) => {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook to easily consume the context in components
export const useUser = () => useContext(UserContext);
