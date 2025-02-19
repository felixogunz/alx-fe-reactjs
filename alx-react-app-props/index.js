import React from 'react';
import ReactDOM from 'react-dom/client'; // Use client for React 18+
import { UserProvider } from './context/UserContext'; // Import your context provider
import App from './App'; // Import your main app component
import './index.css'; // Or your global styles

const root = ReactDOM.createRoot(document.getElementById('root')); // Get the root element

root.render(
  <React.StrictMode> {/* Optional: For development mode */}
    <UserProvider> {/* Wrap your app with the UserProvider */}
      <App />
    </UserProvider>
  </React.StrictMode>
);
