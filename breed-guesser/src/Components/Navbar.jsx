import React from 'react';
import './NavbarStyles.css'
import { Link } from 'react-router-dom';
import logo from '../images/dogLogo.jpg'

const NavBar = () => {
  return (
    <nav>
      <div id='logo'>
        <img src={logo} alt='logo' id='dog-logo'/>
        <span className="website-name">Breed Guesser</span>
      </div>
      
      <ul id='navbar'>
        <li > 
          <Link to="/">HOME</Link>
        </li>

        <li>
          <Link to="/Games">GAMES</Link>
        </li>

        <li>
          <Link to="/Breeds">BREEDS</Link>
        </li>
      
      </ul>
    </nav>
  );
}

export default NavBar;
