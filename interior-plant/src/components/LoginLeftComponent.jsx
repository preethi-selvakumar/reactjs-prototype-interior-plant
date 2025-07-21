import React from 'react';
import mainLogo from '../assets/images/main-logo.png'; 

const LoginLeftComponent = () => {
    return (
        <div className="login-left-wrapper">
            <div className="login-branding">
                <img src={mainLogo} alt="Ray Logo" className="brand-icon" />
                <h1 className="brand-name">Ray</h1>
            </div>
            <p className="login-subtext">Welcome Register to avail the best deal</p>

            <div className="login-features">
                <div className="feature-box">
                    <img src={mainLogo} alt="Zero Subscription" className="feature-icon" />
                    <h4>Zero Subscription Fees</h4>
                    <p>Access Ray Pass without any subscriptions</p>
                </div>
                <div className="feature-box">
                    <img src={mainLogo} alt="Lowest Price" className="feature-icon" />
                    <h4>Lowest Price Guarantee</h4>
                    <p>Explore unbeatable price and Unteachable Value</p>
                </div>
            </div>
        </div>
    );
};

export default LoginLeftComponent;
