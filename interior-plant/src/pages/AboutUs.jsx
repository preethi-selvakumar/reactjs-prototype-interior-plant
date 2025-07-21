import React from 'react';
import AboutBanner from '../components/AboutBanner';
import StorySection from '../components/StorySection';
import Highlights from '../components/Highlights';

const AboutUs = () => {
    return (
        <div className="about-page-wrapper">
            <AboutBanner />
            <StorySection />
            <Highlights />
        </div>
    );
};

export default AboutUs;
