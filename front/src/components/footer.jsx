import React from 'react';
import '../App.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            
Welcome to our Italian recipes website where we share our best recipes and cooking tips. Whether you are an experienced chef or a beginner, you will find something inspiring here.
          </p>
        </div>
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About Us </a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow-us</h3>
          <ul className="social-links">
            <li><a href="https://www.facebook.com">Facebook</a></li>
            <li><a href="https://www.instagram.com">Instagram</a></li>
            <li><a href="https://www.twitter.com">Twitter</a></li>
            <li><a href="https://www.pinterest.com">Pinterest</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Achref Mechergui 2024</p>
      </div>
    </footer>
  );
};

export default Footer;