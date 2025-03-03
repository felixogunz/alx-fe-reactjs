import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        padding: '10px',
        borderBottom: '2px solid #ccc',
        backgroundColor: '#f8f9fa', // Added background color
        display: 'flex',            // Added display property
        justifyContent: 'space-between', // Added justifyContent
      }}
    >
      <div>
        <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
        <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
        <Link to="/services" style={{ margin: '0 10px' }}>Services</Link>
        <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
