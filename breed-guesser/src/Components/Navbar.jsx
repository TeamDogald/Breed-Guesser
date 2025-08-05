import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '/dogLogo.jpg';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div id='logo'>
        <img src={logo} alt='logo' id='dog-logo' />
        <span className="website-name">Breed Guesser</span>
      </div>

      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <ul id='navbar' className={isOpen ? 'open' : ''}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>home</Link></li>
        <li><Link to="games" onClick={() => setIsOpen(false)}>games</Link></li>
        <li><Link to="breeds" onClick={() => setIsOpen(false)}>breeds</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
