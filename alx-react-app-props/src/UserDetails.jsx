import React, { useContext } from 'react'; // Import useContext
import UserContext from './UserContext'; // Import UserContext

function UserDetails() {
  const userData = useContext(UserContext); // Consume the context

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
