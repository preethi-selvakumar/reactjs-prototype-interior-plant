import React from "react";
import { FaTimes } from "react-icons/fa"; 
import logo from "../assets/images/main-logo.png";
import truckIcon from "../assets/images/truck-icon.png";
import { useNavigate } from "react-router-dom"; 

const TrackYourOrder = () => {
    const navigate = useNavigate(); 

    return (
        <div className="track-order-container">
            {/* Close Icon Button same as BestSelling */}
            <button className="close-btn" onClick={() => navigate("/")}>
                <FaTimes />
            </button>

            {/* Logo + Brand */}
            <div className="track-logo-section">
                <img src={logo} alt="logo" className="track-logo-img" />
                <span className="track-brand-name">Ray</span>
            </div>

            {/* Truck Icon */}
            <div className="truck-icon-section">
                <img src={truckIcon} alt="truck" className="truck-img" />
            </div>

            {/* Heading */}
            <h3 className="track-heading">Track your Order</h3>

            {/* Tabs */}
            <div className="tab-buttons">
                <button className="tab active">Order ID</button>
                <button className="tab">Invoice ID</button>
            </div>

            {/* Inputs */}
            <input type="text" placeholder="Order ref.. No" className="track-input" />
            <input
                type="text"
                placeholder="Enter Billing Contact"
                className="track-input"
            />

            {/* Track Button */}
            <button className="track-button">Track</button>
        </div>
    );
};

export default TrackYourOrder;
