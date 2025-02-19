import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
        <li style={{ marginRight: '20px' }}><Link to="/" style={{ color: 'white' }}>Home</Link></li>
        <li style={{ marginRight: '20px' }}><Link to="/about" style={{ color: 'white' }}>About</Link></li>
        <li style={{ marginRight: '20px' }}><Link to="/services" style={{ color: 'white' }}>Services</Link></li>
        <li><Link to="/contact" style={{ color: 'white' }}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
