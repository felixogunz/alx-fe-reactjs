// src/App.jsx
import React from 'react';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <h1>User Profile</h1>
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <UserProfile 
        name="Bob" 
        age="30" 
        bio="Enjoys cooking and traveling" 
      />
    </div>
  );
}

export default App;


import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
