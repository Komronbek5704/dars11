
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="nav">
      <ul className="nav-links">
        <li>
          <Link to="/" className="links">Home</Link>
        </li>
        
        <li>
          <Link to="/products" className="links">Product Carousel</Link>
        </li>
        <li>
          <Link to="/phone-usage" className="links">Phone Usage</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
