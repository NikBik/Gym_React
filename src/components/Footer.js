import React from "react";
import "../styles/tailwind.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="footer">
    <div className="footer-links">
      <ul className="footer-links-list">
        <Link to="aboutUs">
          <li>About Us</li>
        </Link>
        <Link to="contactUs">
          <li>Contact Us</li>
        </Link>
        <Link to="termsOfUse">
          <li>Terms of Use</li>
        </Link>
      </ul>
    </div>
  </div>
);

export default Footer;
