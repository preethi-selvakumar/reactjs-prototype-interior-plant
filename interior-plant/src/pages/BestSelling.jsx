import React, { useState } from "react";
import { FaStar, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ← Step 1

// Product Images
import product1 from "../assets/images/water-globe.jpg";
import product2 from "../assets/images/vermi.jpg";
import product3 from "../assets/images/straw.jpg";
import product4 from "../assets/images/water-meter.jpg";

import product5 from "../assets/images/oyster.webp";
import product6 from "../assets/images/jade-plant.jpg";
import product7 from "../assets/images/peacock-plant.webp";
import product8 from "../assets/images/peperomia.webp";

// Banner & Discount Icon
import bannerBg from "../assets/images/pick-any-four-plant.png";
import discountIcon from "../assets/images/discount-offer.png";

// Product Data
const products = [
    { img: product1, name: "Water Globe", price: "₹390", rating: 4.5 },
    { img: product4, name: "Vermicompost", price: "₹540", rating: 4.3 },
    { img: product3, name: "Plant Straw", price: "₹520", rating: 4.0 },
    { img: product2, name: "Water meter", price: "₹290", rating: 4.0 },
    { img: product5, name: "Oyster Plant with Self Watering Plant", price: "₹300", rating: 4.5, offer: "35% OFF" },
    { img: product6, name: "Lucky Jade Plant with Self Watering Plant", price: "₹280", rating: 4.8, offer: "35% OFF" },
    { img: product7, name: "Peacock Plant with Self Watering Plant", price: "₹720", rating: 4.8, offer: "35% OFF" },
    { img: product8, name: "Peperomia Plant with Self Watering Plant", price: "₹390", rating: 4.3, offer: "35% OFF" },
];

const BestSelling = () => {
    const [show] = useState(true);
    const navigate = useNavigate(); 

    if (!show) return null;

    return (
        <div className="best-selling-modal">
            {/* Header with Close */}
            <div className="modal-header">
                <h2>Our Best Sellings</h2>
                <button className="close-btn" onClick={() => navigate("/")}>
                    <FaTimes />
                </button>
            </div>

            {/* First 4 Products */}
            <div className="plant-cards">
                {products.slice(0, 4).map((product, idx) => (
                    <div className="plant-card" key={idx}>
                        <div className="image-wrapper">
                            {product.offer && <span className="offer-badge">{product.offer}</span>}
                            <img src={product.img} alt={product.name} />
                        </div>
                        <div className="info">
                            <div className="rating">
                                <FaStar />
                                <span className="rating-text">{product.rating}</span>
                            </div>

                            <h4>{product.name}</h4>
                            <p>{product.price}</p>
                            <button>Add to Basket</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Banner Section */}
            <div className="pick-banner">
                <img src={bannerBg} alt="Pick Any Five Banner" className="pick-banner-img" />
                <div className="pick-banner-content">
                    <h3>Pick Any Five<br />Plant At ₹1549/-</h3>
                    <button>Shop Now</button>
                </div>
            </div>

            {/* Next 4 Products */}
            <div className="plant-cards">
                {products.slice(4).map((product, idx) => (
                    <div className="plant-card" key={idx + 4}>
                        <div className="image-wrapper">
                            {product.offer && <span className="offer-badge">{product.offer}</span>}
                            <img src={product.img} alt={product.name} />
                        </div>
                        <div className="info">
                            <div className="rating">
                                <FaStar />
                                <span>{product.rating}</span>
                            </div>
                            <h4>{product.name}</h4>
                            <p>{product.price}</p>
                            <button>Add to Basket</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Discount Footer */}
            <div className="discount-wrapper">
                <div className="discount-banner">
                    <img src={discountIcon} alt="Discount Offer" className="discount-icon" />
                    Get 12% off on order above @ 1999
                </div>
            </div>
        </div>
    );
};

export default BestSelling;
