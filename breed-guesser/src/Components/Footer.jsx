import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container footer-content">
        <div className="footer-column">
          <h4>Team Dogald</h4>
          <ul>
            <li>Marcy Lab School</li>
            <li>Brooklyn, NY</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Creators</h4>
          <ul>
            <li>Berlineda Faurelus</li>
            <li>Nico Aroca</li>
          </ul>
        </div>
      </div>
      <div className="container">
        {/* <hr /> */}
        
      </div>
    </footer>
  );
};

export default Footer;
