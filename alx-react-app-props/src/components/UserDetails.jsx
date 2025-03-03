// src/components/UserDetails.jsx
import { useContext } from 'react';
import UserContext from '../UserContext';

function UserDetails() {
  const users = useContext(UserContext);

  return (
    <div>
      <h4>User Details</h4>
      {users.map((user, index) => (
        <div key={index} style={{ margin: '10px 0' }}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Bio:</strong> {user.bio}</p>
        </div>
      ))}
    </div>
  );
}

export default UserDetails;
