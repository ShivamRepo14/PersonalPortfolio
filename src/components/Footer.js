import React from 'react';
import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <p className="footer-logo">
              Shivam<span className="text-purple">.</span>
            </p>
            <p className="footer-tagline">Full Stack MERN Developer</p>
          </div>

          <div className="footer-social">
            <a href="https://github.com/ShivamRepo14" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
            <a href="mailto:shivam.gupta14083110@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
            </a>
            <a href="https://instagram.com/itzz_mr.shivam" target="_blank" rel="noopener noreferrer" className="social-link">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
          </div>
        </div>

        <div className="footer-copyright">
          <p>&copy; {currentYear} Shivam Gupta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
