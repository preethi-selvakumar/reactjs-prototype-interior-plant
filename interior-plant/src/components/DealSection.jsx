import React from 'react';
import { FaStar } from "react-icons/fa";
import { useAppContext } from '../context/AppContext';


const DealSection = () => {
    const { firstPlantData, addToCart } = useAppContext();

    if (!firstPlantData) {
        return null;
    }

    return (
        <div className="deal-section-wrapper">
            {/* Top Deal Row */}
            <div className="deal-top-row">
                <div className="deal-left-box">
                    <h2>Deal Of<br />the Day</h2>
                </div>
                <div className="deal-right-box">
                    <h3>Today's Green Glory</h3>
                    <div className="timer-boxes">
                        <div className="time-box"><span>13</span><p>Hour</p></div>
                        <div className="time-box"><span>11</span><p>Min</p></div>
                        <div className="time-box"><span>10</span><p>Sec</p></div>
                    </div>
                </div>
            </div>

            {/* Main Deal Content: Plant Card on Left, Description on Right */}
            <div className="deal-product-content-row"> 
                {/* Product Card (Left Side) */}
                <div className="deal-product-left-card">
                    <div className="plant-card">
                        <div className="image-wrapper">
                            <span className="offer-badge">{firstPlantData.offer}</span>
                            <img src={firstPlantData.img} alt={firstPlantData.name} />
                        </div>
                        <div className="info">
                            <div className="rating">
                                <FaStar />
                                <span className="rating-text">{firstPlantData.rating}</span>
                            </div>
                            <h4>{firstPlantData.name}</h4>
                            <p>{firstPlantData.price}</p>
                            <button onClick={() => addToCart(plant)}>Add to Basket</button>
                        </div>
                    </div>
                </div>

                {/* Right Side Text Content */}
                <div className="deal-right-description">
                    <h3 className="deal-description-title">
                        Set Of 2 Lucky Bonsai Plant with<br />Self Watering Plant<br />only At
                    </h3>
                    <p className="deal-description-price"> 
                        Rs. 400
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DealSection;