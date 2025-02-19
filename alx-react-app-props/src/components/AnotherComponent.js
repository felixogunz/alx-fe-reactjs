import React from 'react';
import { useUserContext } from '../context/UserContext'; // Adjust path

function AnotherComponent() {
    const {user, setUser} = useUserContext();

    const handleLogin = () => {
        setUser({name: "John Doe"});
    }

    return <button onClick={handleLogin}>Log In</button>
}

export default AnotherComponent;
