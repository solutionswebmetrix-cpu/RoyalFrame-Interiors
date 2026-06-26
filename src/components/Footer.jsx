import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3 className="footer-logo">
                RoyalFrame<span>Interiors</span>
              </h3>
              <p className="footer-desc">
                Crafting elegant spaces and building timeless interiors with premium craftsmanship and innovative design.
              </p>
              <div className="social-links">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">PVC Wall Panels</a>
                </li>
                <li>
                  <a href="#">WPC Wall Panels</a>
                </li>
                <li>
                  <a href="#">Modular Kitchens</a>
                </li>
                <li>
                  <a href="#">Wooden Flooring</a>
                </li>
                <li>
                  <a href="#">Custom Furniture</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Newsletter</h4>
              <p className="newsletter-desc">Subscribe to our newsletter for the latest updates.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email" />
                <button type="submit">
                  <FaWhatsapp />
                </button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 RoyalFrame Interiors. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <a href="https://wa.me/919876543210" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
    </>
  );
};

export default Footer;
