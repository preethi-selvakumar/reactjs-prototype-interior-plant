import React from 'react';
import { FaSearch, FaShoppingCart, FaUser, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/images/main-logo.png';
import { useAppContext } from '../context/AppContext';

const Header = () => {
    const { isMenuOpen, toggleMenu, cartCount, setIsCartOpen } = useAppContext(); // cartCount used

    return (
        <header>
            <div className="header-top">
                <div className="header-logo">
                    <img src={logo} alt="Ray Logo" className="logo-img" />
                    <span>Ray</span>
                </div>

                <div className="header-center">
                    <div className="header-search">
                        <FaSearch className="search-icon" />
                        <input type="text" placeholder="Search" />
                    </div>
                </div>

                <div className="header-icons">
                    {/* Cart Icon with Count */}
                    <Link to="/cart" className="cart-icon-wrapper">
                        <FaShoppingCart />
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </Link>

                    {/* User Login */}
                    <Link to="/login">
                        <FaUser />
                    </Link>

                    {/* Menu */}
                    <div className="hamburger" onClick={toggleMenu}>
                        <FaBars />
                    </div>
                </div>
            </div>

            <nav className="header-bottom">
                <Link to="/">Home</Link>
                <Link to="/best-selling">Best Seller</Link>
                <Link to="/deal-of-the-page">Deal Of the Day</Link>
                <Link to="/track-your-order">Track Your Order</Link>
                <a href="#">Contact</a>
                <Link to="/about">About Us</Link>
            </nav>

            <div className={`mobile-menu ${isMenuOpen ? 'show' : 'hidden'}`}>
                <Link to="/">Home</Link>
                <Link to="/best-selling">Best Seller</Link>
                <Link to="/deal-of-the-page">Deal Of the Day</Link>
                <Link to="/track-your-order">Track Your Order</Link>
                <a href="#">Contact</a>
                <Link to="/about">About Us</Link>
            </div>
        </header>
    );
};

export default Header;
