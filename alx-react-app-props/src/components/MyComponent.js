import React from 'react';
import { useUserContext } from '../context/UserContext'; // Adjust path

function MyComponent() {
  const { user } = useUserContext(); // Only need user here

  if (user) {
    return <p>Welcome, {user.name}!</p>;
  } else {
    return <p>Please log in.</p>;
  }
}

export default MyComponent;
