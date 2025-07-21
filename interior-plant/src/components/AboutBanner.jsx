import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import bannerImage from "../assets/images/about-banner.png";

const AboutBanner = () => {
    const navigate = useNavigate();

    return (
        <div className="about-banner">
            <img src={bannerImage} alt="About Banner" className="about-banner-image" />

            <button className="close1-btn" onClick={() => navigate("/")}>
                <FaTimes />
            </button>
        </div>
    );
};

export default AboutBanner;
