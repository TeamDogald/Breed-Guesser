import React from 'react';
import './NavbarStyles.css'
import { Link } from 'react-router-dom';
import logo from '../images/dogLogo.jpg'

const NavBar = () => {
  return (
    <nav>
      <img src={logo} alt='Dog Logo' style={{width: '125px', height: '9vh'}}/>
      <span className="website-name">Breed Guesser</span>
      <ul id='navbar'>
      
        <li > 
          <Link to="/">Home</Link>
          </li>

        <li>
          <Link to="/breeds">Breeds</Link>
          </li>

        <li>
          <Link to="/breed">Breed</Link>
          </li>

        <li>
          <Link to="/games">Games</Link>
          </li>
      
      </ul>
    </nav>
  );
}

export default NavBar;
