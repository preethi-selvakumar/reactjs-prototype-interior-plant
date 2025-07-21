import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import whatsappIcon from '../assets/images/whatsapp-icon.webp';

const LoginRightComponent = () => {
    const { login } = useAppContext();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const isValidEmail = (email) => {
        // Basic email regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleCheckboxChange = (e) => {
        const checked = e.target.checked;

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (checked) {
            setIsChecked(true);
            login();
            alert("Login successful!");
            setTimeout(() => {
                navigate("/cart");
            }, 1000);
        } else {
            setIsChecked(false);
        }
    };

    return (
        <div className="login-right-box">
            <h2>Unlock Super Discounts</h2>

            <input
                type="email"
                placeholder="Enter Email Id"
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <div className="checkbox-container">
                <input
                    type="checkbox"
                    id="notifyMe"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="notifyMe">
                    Notify Me For Any Update & Offers
                </label>
            </div>

            <div className="or-divider">
                <span>OR</span>
            </div>

            <button className="whatsapp-btn" disabled>
                <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
                Whatsapp Login
            </button>

            <p className="privacy-text">
                I Accept That I Have Read And Understood The Privacy Policy And T&C
            </p>

            <p className="login-help">Trouble in Logging In ?</p>
        </div>
    );
};

export default LoginRightComponent;
