import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "/dogLogo.jpg";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path, exact = false) => {
    if (exact) return location.pathname === path;
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="main-nav">
      <div id="logo">
        <Link to="/">
          <img src={logo} alt="logo" id="dog-logo" />
        </Link>
        <span className="website-name">Breed Guesser</span>
      </div>

      <div
        className="hamburger"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span>{menuOpen ? "✕" : "☰"}</span>
      </div>

      {/* Desktop Menu */}
      <ul id="navbar" className={menuOpen ? "open" : ""}>
        <li><Link to="/" onClick={closeMenu} className={isActive("/", true) ? "active" : ""}>home</Link></li>
        <li><Link to="/breeds" onClick={closeMenu} className={isActive("/breeds") ? "active" : ""}>breeds</Link></li>
        <li><Link to="/games" onClick={closeMenu} className={isActive("/games") ? "active" : ""}>games</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
