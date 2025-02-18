import React from 'react';
import Counter from './components/Counter'; // Import the Counter component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* You can keep your existing header content or remove it */}
        <h1>Counter App</h1> 
      </header>
      <main>
        <Counter /> {/* Include the Counter component */}
      </main>
    </div>
  );
}

export default App;
