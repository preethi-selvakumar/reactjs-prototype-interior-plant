import React from "react";
import { Link } from "react-router-dom";

import xlPlant from "../assets/images/xl-indoor.png";
import largePlant from "../assets/images/large-indoor.png";
import mediumPlant from "../assets/images/medium-indoor.png";
import smallPlant from "../assets/images/small-indoor.png";
import plantFood from "../assets/images/plant-food.png";
import plantCare from "../assets/images/plant-care.png";

import discountIcon from "../assets/images/discount-offer.png";

const SmallIndoorPlants = () => {
    const items = [
        { img: xlPlant, label: ["XL Indoor", "Plant"], path: "/xl-indoor-plants" },
        { img: largePlant, label: ["Large Indoor", "Plant"], path: "/large-indoor-plants" },
        { img: mediumPlant, label: ["Medium Indoor", "Plant"], path: "/medium-indoor-plants" },
        { img: smallPlant, label: ["Small Indoor", "Plant"], path: "/small-indoor-plants" },
        { img: plantFood, label: ["Plant", "Food"], path: "/plant-food" },
        { img: plantCare, label: ["Plant", "Care"], path: "/plant-care" },
    ];

    return (
        <div className="small-indoor-plants">
            <h2 className="section-title">Small Indoor Plants</h2>
            <div className="plant-items">
                {items.map((item, index) => (
                    <Link to={item.path} className="plant-item" key={index}>
                        <img src={item.img} alt={`${item.label[0]} ${item.label[1]}`} />
                        <p>
                            {item.label[0]}<br />{item.label[1]}
                        </p>
                    </Link>
                ))}
            </div>

            <div className="discount-wrapper">
                <div className="discount-banner">
                    <img src={discountIcon} alt="Discount Offer" className="discount-icon" />
                    Get 12% off on order above @ 1999
                </div>
            </div>
        </div>
    );
};

export default SmallIndoorPlants;
