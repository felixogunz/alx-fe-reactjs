// App.jsx
import { useState } from 'react';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
import WelcomeMessage from './components/WelcomeMessage.jsx';
import UserProfile from './components/UserProfile.jsx'; // Updated import
import UserContext from './UserContext.js'; // Import UserContext
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // User data for the context
  const userData = [
    { name: 'Alice', age: 25, bio: 'Loves hiking and photography' },
    { name: 'Bob', age: 30, bio: 'Enjoys coding and traveling' },
  ];

  return (
    <UserContext.Provider value={userData}>
      <div>
        <Header />
        <WelcomeMessage />

        {/* UserProfile now consumes userData via context */}
        <UserProfile />

        <MainContent />
        <Footer />

        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount(count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
