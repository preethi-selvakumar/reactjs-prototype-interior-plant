import React from 'react';
import bannerImg from '../assets/images/home-banner.png'; 

const HomeBanner = () => {
    return (
        <section className="home-banner">
            <img src={bannerImg} alt="Indoor Plants Banner" className="home-banner-image" />
            <div className="home-banner-content">
                <h1>Indoor<br />Plants</h1>
            </div>
        </section>
    );
};

export default HomeBanner;
