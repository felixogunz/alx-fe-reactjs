import React from 'react';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#fff',  minHeight: '300px' }}> {/* Added minHeight for better visual structure */}
      <p>This is the main content area.  You can add your city information here.</p>
      {/* Example list styling */}
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li style={{ color: '#007bff' }}>City 1</li>
        <li style={{ color: '#dc3545' }}>City 2</li>
        <li style={{ color: '#28a745' }}>City 3</li>
      </ul>
    </main>
  );
}

export default MainContent;
