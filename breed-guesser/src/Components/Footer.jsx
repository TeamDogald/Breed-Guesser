import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container footer-content">
        <div className="footer-column">
          <h4>Breed Guesser INC</h4>
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
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy; {new Date().getFullYear()} Breed Guesser INC | All rights
            reserved | Terms of service | Privacy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
