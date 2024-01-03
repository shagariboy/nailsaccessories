import React from 'react';
import './Footer.css'; // Import the corresponding CSS file
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="site-footer">
            <p className="copyright-text">
                Copyright &copy; 2023 All Rights Reserved by <a href="mailto:nnamdiezeh0@gmail.com">Shagariboy</a>
            </p>
            <ul className="social-icons">
                <li><a className="tiktok" href="https://www.tiktok.com/@nailsaccessories"><FontAwesomeIcon icon={faTiktok} /></a></li>
                <li><a className="whatsapp" href="https://wa.link/f645o3"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
            </ul>
        </footer>
    );
};

export default Footer;
