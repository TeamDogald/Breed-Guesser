import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/breeds">Breeds</Link></li>
        {/* <li><Link to="/breed">Breed</Link></li> */}
        <li><Link to="/games">Games</Link></li>
        {/* <li><Link to="/error">Error</Link></li> */}
      </ul>
    </nav>
  );
}

export default NavBar;
