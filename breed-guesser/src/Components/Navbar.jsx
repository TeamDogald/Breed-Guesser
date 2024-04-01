import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../Images/dogLogo.jpg'

const NavBar = () => {
  return (
    <nav>
      <div id='logo'>
        <img src={logo} alt='logo' id='dog-logo'/>
        <span className="website-name">Breed Guesser</span>
      </div>
      
      <ul id='navbar'>
        <li > 
          <Link to="/">home</Link>
        </li>

        <li>
          <Link to="/Games">games</Link>
        </li>

        <li>
          <Link to="/Breeds">breeds</Link>
        </li>
      
      </ul>
    </nav>
  );
}

export default NavBar;
