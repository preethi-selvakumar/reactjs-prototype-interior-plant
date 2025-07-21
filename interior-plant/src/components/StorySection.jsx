import React from "react";
import sidImage from "../assets/images/sid-founder.png";
import namdeoImage from "../assets/images/namdeo.png";

const StorySection = () => {
    return (
        <div className="story-wrapper">
            {/* Section 1 - Siddhant (Text Left, Image Right) */}
            <div className="story-section">
                <div className="text-content">
                    <h2>Our Story</h2>
                    <p>
                        Hey there! I'm Siddhant Bhalinge, the Founder and CEO of Ray and I'd love to share our story with you. <br /><br />
                        It's a story of passion, perseverance, and a deep love for nature that's been passed down in my family for three generations.
                    </p>
                </div>
                <div className="image-content">
                    <img src={sidImage} alt="Siddhant Bhalinge" />
                </div>
            </div>

            {/* Section 2 - Namdeo (Image Left, Text Right) */}
            <div className="story-section">
                <div className="image-content">
                    <img src={namdeoImage} alt="Namdeo Umaji" />
                </div>
                <div className="text-content">
                    <p>
                        Our story began with Namdeo Umaji — the oldest seed company in India, founded by my great-grandfather in 1885. <br /><br />
                        As a young boy, I spent my days in his Byculla shop, surrounded by the promise of life contained in tiny seeds.
                        Those formative years really were the stepping stones of Ray's own journey.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StorySection;
