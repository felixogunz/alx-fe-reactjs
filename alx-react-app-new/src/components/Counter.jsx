import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Counter App</h2>
      <p style={styles.count}>Current Count: {count}</p>

      <button style={styles.button} onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button style={styles.button} onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button style={styles.resetButton} onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f4f4f9',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    margin: '20px auto',
  },
  heading: {
    color: '#333',
  },
  count: {
    fontSize: '24px',
    margin: '20px 0',
  },
  button: {
    margin: '5px',
    padding: '10px 15px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#4CAF50',
    color: 'white',
  },
  resetButton: {
    margin: '5px',
    padding: '10px 15px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#FF5733',
    color: 'white',
  },
};

export default Counter;

