import { useContext } from 'react';
import UserContext from './UserContext';
import UserDetails from './UserDetails';

function UserInfo() {
  const userData = useContext(UserContext);  // Consume the context

  return <UserDetails userData={userData} />;
}

export default UserInfo;
