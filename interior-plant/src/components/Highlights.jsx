import React from "react";
import innovationImg from "../assets/images/innovation.png";
import educationImg from "../assets/images/education.png";
import aestheticsImg from "../assets/images/aesthetic.png";

const highlights = [
    {
        title: "Innovation",
        img: innovationImg,
        desc: "Be it our cylinder packaging, self-watering pots, the online ordering experience, or even our R&D, we take pride in innovation and making the plantparenting journey easy and stress-free."
    },
    {
        title: "Education",
        img: educationImg,
        desc: "Buying plants can sometimes be overwhelming, especially in the beginning. Through our blog, newsletter, and social channels, we've made a conscious effort to educate and inspire customers in their journ."
    },
    {
        title: "Aesthetics",
        img: aestheticsImg,
        desc: "Our plants always enhance the space they occupy. We make concerted efforts in not only nurturing our plants in the best way possible, but making them look good too."
    }
];

const Highlights = () => {
    return (
        <div className="highlights-wrapper">
            {highlights.map((item, idx) => (
                <div className="highlight-card" key={idx}>
                    <img src={item.img} alt={item.title} />
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default Highlights;
