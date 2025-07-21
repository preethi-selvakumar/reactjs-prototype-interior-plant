import React from 'react';
import { FaStar } from "react-icons/fa";
import { useAppContext } from '../context/AppContext'; 

const MonthlyMustHaves = () => {
    const { monthlyMustHavePlantsData, monthlyMustHaveIllustration, addToCart } = useAppContext();

    if (!monthlyMustHavePlantsData || !monthlyMustHaveIllustration) {
        return null; 
    }

    return (
        <div className="monthly-must-haves-section-wrapper">
            {/* Top Section: Image on left, text on right */}
            <div className="monthly-must-haves-top-banner">
                <div className="monthly-must-haves-illustration-box">
                    <img src={monthlyMustHaveIllustration} alt="Monthly Must-Haves Illustration" className="monthly-must-haves-illustration" />
                </div>
                <div className="monthly-must-haves-text-box">
                    <h3 className="monthly-must-haves-title">
                        Monthly Must-Haves<br />Long-lasting deals on<br />our most-loved plants.
                    </h3>
                </div>
            </div>

            {/* View All Button */}
            <div className="monthly-must-haves-view-all-container">
                <button className="monthly-must-haves-view-all-btn">View All</button>
            </div>

            {/* Four Plant Cards (Bottom Section) */}
            <div className="monthly-must-haves-plant-cards">
                {monthlyMustHavePlantsData.map((plant, idx) => (
                    <div className="plant-card" key={idx}> {/* Reusing existing plant-card class */}
                        <div className="image-wrapper">
                            <span className="offer-badge">{plant.offer}</span>
                            <img src={plant.img} alt={plant.name} />
                        </div>
                        <div className="info">
                            <div className="rating">
                                <FaStar />
                                <span className="rating-text">{plant.rating}</span>
                            </div>
                            <h4>{plant.name}</h4>
                            <p>{plant.price}</p>
                            <button onClick={() => addToCart(plant)}>Add to Basket</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MonthlyMustHaves;