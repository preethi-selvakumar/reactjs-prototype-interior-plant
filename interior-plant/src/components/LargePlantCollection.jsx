import React from "react";
import { FaStar } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";

// Plant Images
import plant1 from "../assets/images/agloanima-md.webp";
import plant2 from "../assets/images/areca-md.jpg";
import plant3 from "../assets/images/black-rubber-md.webp";
import plant4 from "../assets/images/calathiya-md.jpg";
import plant5 from "../assets/images/chamandero-md.webp";
import plant6 from "../assets/images/china-doll-md.webp";
import plant7 from "../assets/images/croton-md.webp";
import plant8 from "../assets/images/thuja-md.jpg";

// 4 more plants
import plant9 from "../assets/images/dieaffenachiya-md.png";
import plant10 from "../assets/images/black.png";
import plant11 from "../assets/images/zz-md.jpg";
import plant12 from "../assets/images/ice-plant.png";

// Banner image
import bannerBg from "../assets/images/pick-any-four-plant.png";

const firstSetPlants = [
    { img: plant1, name: "Aglaonema Ice Plant", price: "₹290", rating: 4.5, offer: "35% OFF", size: "Small", sunlight: "Low", water: "Spray" },
    { img: plant2, name: "Areca Plant", price: "₹580", rating: 4.3, offer: "45% OFF", size: "Medium", sunlight: "Medium", water: "Often" },
    { img: plant3, name: "Black rubbert", price: "₹560", rating: 4.0, offer: "25% OFF", size: "Large", sunlight: "Full", water: "Daily" },
    { img: plant4, name: "Calathiya Plan", price: "₹180", rating: 4.2, offer: "35% OFF", size: "Small", sunlight: "Low", water: "Spray" },
    { img: plant5, name: "Chamendia Plant", price: "₹290", rating: 4.3, offer: "35% OFF", size: "Medium", sunlight: "Medium", water: "Often" },
    { img: plant6, name: "China DollPlant", price: "₹340", rating: 4.1, offer: "40% OFF", size: "Medium", sunlight: "Full", water: "Daily" },
    { img: plant7, name: "Croton Red Plant", price: "₹250", rating: 4.6, offer: "50% OFF", size: "Large", sunlight: "Low", water: "Often" },
    { img: plant8, name: "Croton Red Plant", price: "₹250", rating: 4.1, offer: "20% OFF", size: "Small", sunlight: "Medium", water: "Spray" },
];

const secondSetPlants = [
    { img: plant9, name: "Dieffenbachia Plant", price: "Rs.190", rating: 4.8, offer: "50% OFF", size: "Small", sunlight: "Low", water: "Spray" },
    { img: plant10, name: "ZZ Black Plant", price: "Rs.290", rating: 4.8, offer: "35% OFF", size: "Medium", sunlight: "Medium", water: "Often" },
    { img: plant11, name: "ZZ Green Plan", price: "Rs.720", rating: 4.8, offer: "25% OFF", size: "Large", sunlight: "Full", water: "Daily" },
    { img: plant12, name: "Aglaonema Ice Plant", price: "Rs.280", rating: 4.8, offer: "30% OFF", size: "Small", sunlight: "Low", water: "Spray" },
];

const LargePlantCollection = () => {
    const { filters, updateFilter, addToCart } = useAppContext();

    const applyFilters = (plants) => {
        return plants.filter((plant) => {
            const priceNumber = parseInt(plant.price.replace(/[^\d]/g, ""), 10);

            if (filters.price && priceNumber >= parseInt(filters.price)) return false;
            if (filters.size && plant.size !== filters.size) return false;
            if (filters.sunlight && plant.sunlight !== filters.sunlight) return false;
            if (filters.water && plant.water !== filters.water) return false;

            return true;
        });
    };

    const renderPlantCards = (plants) => {
        const filtered = applyFilters(plants);

        return (
            <div className="plant-cards">
                {filtered.map((plant, idx) => (
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
        );
    };

    const Banner = () => (
        <div className="pick-banner">
            <img src={bannerBg} alt="Pick Any Four Plant Banner" className="pick-banner-img" />
            <div className="pick-banner-content">
                <h3>Pick Any Four<br />Plant At ₹1549/-</h3>
                <button>Shop Now</button>
            </div>
        </div>
    );

    return (
        <div className="plant-collection">
            {/* Filters */}
            <div className="filters">
                <select onChange={(e) => updateFilter("price", e.target.value)}>
                    <option value="" hidden>Price</option>
                    <option value="350">Below ₹350</option>
                    <option value="550">Below ₹550</option>
                    <option value="850">Below ₹850</option>
                </select>

                <select onChange={(e) => updateFilter("size", e.target.value)}>
                    <option value="" hidden>Size</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>

                <select onChange={(e) => updateFilter("sunlight", e.target.value)}>
                    <option value="" hidden>Sun Light</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>Full</option>
                </select>

                <select onChange={(e) => updateFilter("water", e.target.value)}>
                    <option value="" hidden>Water Level</option>
                    <option>Spray</option>
                    <option>Often</option>
                    <option>Daily</option>
                </select>
            </div>

            {/* First Set */}
            {renderPlantCards(firstSetPlants)}

            {/* Banner 1 */}
            <Banner />

            {/* Second Set (Only 4 Images) */}
            {renderPlantCards(secondSetPlants)}

            {/* Banner 2 */}
            <Banner />
        </div>
    );
};

export default LargePlantCollection;