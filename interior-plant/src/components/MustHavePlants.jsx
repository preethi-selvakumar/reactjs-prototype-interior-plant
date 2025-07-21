import React from 'react';
import { FaStar } from "react-icons/fa";
import { useAppContext } from '../context/AppContext'; 

const MustHavePlants = () => {
    const { mustHavePlantsData, mustHaveLogo, addToCart } = useAppContext();

    if (!mustHavePlantsData || !mustHaveLogo) {
        return null; 
    }

    return (
        <div className="must-have-section-wrapper">
            {/* Green Banner at the top */}
            <div className="must-have-banner">
                <div className="must-have-banner-left">
                    <img src={mustHaveLogo} alt="Plant Logo" className="must-have-logo" />
                </div>
                <div className="must-have-banner-right">
                    <h3 className="must-have-banner-text">
                        Must-Haves<br />Long-lasting deals on<br />our most-loved plants.
                    </h3>
                </div>
            </div>

            {/* Four Plant Cards below the banner */}
            <div className="must-have-plant-cards">
                {mustHavePlantsData.map((plant, idx) => (
                    <div className="plant-card" key={idx}> 
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

export default MustHavePlants;