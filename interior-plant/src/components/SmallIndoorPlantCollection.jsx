import React from "react";
import { FaStar } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";

// Plant images
import plant1 from "../assets/images/bamboo.webp";
import plant2 from "../assets/images/aglonima.webp";
import plant3 from "../assets/images/snak.webp";
import plant4 from "../assets/images/rhio.webp";
import plant5 from "../assets/images/bansai.webp";
import plant6 from "../assets/images/jade-plant.jpg";
import plant7 from "../assets/images/spider.webp";
import plant8 from "../assets/images/aralia.webp";

import plant9 from "../assets/images/oyster.webp";
import plant10 from "../assets/images/jade-plant.jpg";
import plant11 from "../assets/images/peacock-plant.webp";
import plant12 from "../assets/images/peperomia.webp";
import plant13 from "../assets/images/philiyodendro.webp";
import plant14 from "../assets/images/syngo.webp";
import plant15 from "../assets/images/calathiya-md.jpg";
import plant16 from "../assets/images/agloanima-md.webp";

// Banner
import bannerBg from "../assets/images/pick-any-four-plant.png";

// Data
const allPlants = [
    { img: plant1, name: "Lucky Bonsai Plant", price: "₹290", rating: 4.5, offer: "35% OFF", size: "Small", sunlight: "Low", water: "Spray" },
    { img: plant2, name: "Lucky Jade Plant", price: "₹340", rating: 4.3, offer: "45% OFF", size: "Medium", sunlight: "Medium", water: "Often" },
    { img: plant3, name: "Zamio's Green Plant", price: "₹260", rating: 4.0, offer: "25% OFF", size: "Large", sunlight: "Full", water: "Daily" },
    { img: plant4, name: "Spider Plant", price: "₹250", rating: 4.2, offer: "35% OFF", size: "Small", sunlight: "Low", water: "Spray" },
    { img: plant5, name: "Lucky Bamboo Plant", price: "₹280", rating: 4.3, offer: "35% OFF", size: "Medium", sunlight: "Medium", water: "Often" },
    { img: plant6, name: "Aglaonema Red Plant", price: "₹380", rating: 4.1, offer: "40% OFF", size: "Medium", sunlight: "Full", water: "Daily" },
    { img: plant7, name: "Snake Plant", price: "₹350", rating: 4.6, offer: "50% OFF", size: "Large", sunlight: "Low", water: "Often" },
    { img: plant8, name: "Rhoeo Plant", price: "₹180", rating: 4.1, offer: "20% OFF", size: "Small", sunlight: "Medium", water: "Spray" },

    { img: plant9, name: "Oyster Plant", price: "₹190", rating: 4.8, offer: "50% OFF", size: "Small", sunlight: "Low", water: "Spray" },
    { img: plant10, name: "Lucky Jade Plant", price: "₹290", rating: 4.8, offer: "35% OFF", size: "Medium", sunlight: "Medium", water: "Often" },
    { img: plant11, name: "Peacock Plant", price: "₹720", rating: 4.8, offer: "25% OFF", size: "Large", sunlight: "Full", water: "Daily" },
    { img: plant12, name: "Peperomia Plant", price: "₹390", rating: 4.8, offer: "30% OFF", size: "Small", sunlight: "Low", water: "Spray" },
    { img: plant13, name: "Philodendron Plant", price: "₹290", rating: 4.8, offer: "35% OFF", size: "Medium", sunlight: "Medium", water: "Often" },
    { img: plant14, name: "Syngonium Plant with Self Watering Plant", price: "₹690", rating: 4.8, offer: "25% OFF", size: "Large", sunlight: "Full", water: "Daily" },
    { img: plant15, name: "Fidal Fig Plant", price: "₹450", rating: 4.8, offer: "35% OFF", size: "Medium", sunlight: "Medium", water: "Daily" },
    { img: plant16, name: "Aralia Plant", price: "₹190", rating: 4.8, offer: "30% OFF", size: "Small", sunlight: "Low", water: "Spray" },
];

const SmallIndoorPlantCollection = () => {
    const { filters, updateFilter, addToCart } = useAppContext();

    const applyFilters = (plants) => {
        return plants.filter((plant) => {
            const price = parseInt(plant.price.replace(/[^\d]/g, ""), 10);
            if (filters.price && price >= parseInt(filters.price)) return false;
            if (filters.size && plant.size !== filters.size) return false;
            if (filters.sunlight && plant.sunlight !== filters.sunlight) return false;
            if (filters.water && plant.water !== filters.water) return false;
            return true;
        });
    };

    const filteredPlants = applyFilters(allPlants);
    const firstHalf = filteredPlants.slice(0, 8);
    const secondHalf = filteredPlants.slice(8, 16);

    const renderPlantCards = (plants) => (
        <div className="plant-cards">
            {plants.map((plant, idx) => (
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

    const renderBanner = () => (
        <div className="pick-banner">
            <img src={bannerBg} alt="Pick Any Four Plant" className="pick-banner-img" />
            <div className="pick-banner-content">
                <h3>Pick Any Five<br />Plant At ₹1549</h3>
                <button>Shop Now</button>
            </div>
        </div>
    );

    return (
        <div className="plant-collection">
            <div className="filters">
                <select onChange={(e) => updateFilter("price", e.target.value)}>
                    <option value="" hidden>Price</option>
                    <option value="150">Below 150</option>
                    <option value="350">Below 350</option>
                    <option value="850">Below 850</option>
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

            {/* First 8 plants */}
            {renderPlantCards(firstHalf)}

            {/* First Banner */}
            {renderBanner()}

            {/* Next 8 plants */}
            {renderPlantCards(secondHalf)}

            {/* Second Banner */}
            {renderBanner()}
        </div>
    );
};

export default SmallIndoorPlantCollection;
