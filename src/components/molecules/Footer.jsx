import React from 'react';
import './Footer.css';
import twitterIcon from '../../img/twitter.svg'; 
import facebookIcon from '../../img/facebook.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="#about">About Us</a>
                <a href="#contact">Contact</a>
            </div>

            <div className="footer-social">
                <div className="social-item">
                    <img src={twitterIcon} alt="Twitter" />
                    <span>Twitter</span>
                </div>
                <div className="social-item">
                    <img src={facebookIcon} alt="Facebook" />
                    <span>Facebook</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;