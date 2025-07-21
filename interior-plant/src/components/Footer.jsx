import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/images/main-logo.png';

// Social media icons as images
import instagramIcon from '../assets/images/instagram.webp';
import facebookIcon from '../assets/images/facebook.png';
import youtubeIcon from '../assets/images/youtube.webp';

const Footer = () => {
    return (
        <footer className="footer">
            {/* Top Yellow Bar */}
            <div className="footer-top-bar">
                <div className="footer-bar-item left">
                    <img src={logo} alt="Logo" className="footer-logo" />
                    <span className="footer-ray-text">Ray</span>
                    <span className="footer-bar-text">Cash on Delivery</span>
                </div>
                <div className="footer-bar-item center">
                    <img src={logo} alt="Logo" className="footer-logo" />
                    <span className="footer-ray-text">Ray</span>
                    <span className="footer-bar-text">Free Shipping on order above 300</span>
                </div>
                <div className="footer-bar-item right">
                    <img src={logo} alt="Logo" className="footer-logo" />
                    <span className="footer-ray-text">Ray</span>
                </div>
            </div>

            {/* Main Green Section */}
            <div className="footer-main">
                <p className="footer-heading">Shope Online Plant At Best Place in India</p>
                <div className="footer-columns">
                    <div className="footer-column">
                        <h4>Home</h4>
                        <ul>
                            <li>Best Seller</li>
                            <li>Deal Of The Day</li>
                            <li>Track My Order</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Category</h4>
                        <ul>
                            <li>XI Indoor Plant</li>
                            <li>Large Indoor Plant</li>
                            <li>Medium Indoor Plant</li>
                            <li>Small Indoor Plant</li>
                            <li>Plant Food</li>
                            <li>Plant Care</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>About Us</li>
                            <li>FAQs</li>
                            <li>Term & Condition</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Get In Touch</h4>
                        <ul className="footer-contact">
                            <li><FaMapMarkerAlt className="footer-icon" /> Abc Street, Kerala</li>
                            <li><FaPhoneAlt className="footer-icon" /> +91 987654321</li>
                            <li><FaEnvelope className="footer-icon" /> ray@gmail.com</li>
                        </ul>
                    </div>
                </div>

                {/* Social Icons as Images */}
                <div className="footer-social">
                    <span>Follow Us on</span>
                    <img src={instagramIcon} alt="Instagram" className="social-icon" />
                    <img src={facebookIcon} alt="Facebook" className="social-icon" />
                    <img src={youtubeIcon} alt="YouTube" className="social-icon" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
