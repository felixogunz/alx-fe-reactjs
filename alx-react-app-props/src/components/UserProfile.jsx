// src/components/UserProfile.jsx
import { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
  const users = useContext(UserContext);

  return (
    <div>
      <h2>User Profiles</h2>
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

export default UserProfile;
