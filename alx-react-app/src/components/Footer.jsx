import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '10px', position: 'fixed', bottom: '0', width: '100%' }}> {/* Fixed footer */}
      <p>&copy; 2023 My Favorite Cities</p>
    </footer>
  );
}

export default Footer;
