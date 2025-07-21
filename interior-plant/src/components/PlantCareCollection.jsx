import React from "react";
import { FaStar } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";

// Product Images
import product1 from "../assets/images/neem-cake.jpg";
import product2 from "../assets/images/care-kit.jpg";
import product3 from "../assets/images/cowdung.jpg";
import product4 from "../assets/images/pot-soli.jpg";
import product5 from "../assets/images/water-globe.jpg";
import product6 from "../assets/images/vermi.jpg";
import product7 from "../assets/images/straw.jpg";
import product8 from "../assets/images/water-meter.jpg";

// Banner
import bannerBg from "../assets/images/pick-any-four-plant.png";

// Product Data
const products = [
    { img: product1, name: "Neem Cake Powder 5Kg", price: "₹880", rating: 4.5, offer: "35% OFF", size: "Large", sunlight: "Full", water: "Daily" },
    { img: product2, name: "All in One plant care", price: "₹580", rating: 4.3, size: "Medium", sunlight: "Medium", water: "Often" },
    { img: product3, name: "Cow dung mannure", price: "₹560", rating: 4.1, size: "Small", sunlight: "Low", water: "Spray" },
    { img: product4, name: "Cocopet", price: "₹180", rating: 4.2, size: "Large", sunlight: "Full", water: "Daily" },
    { img: product5, name: "Water Globe", price: "₹790", rating: 4.5, size: "Medium", sunlight: "Medium", water: "Often" },
    { img: product6, name: "Vermicomposit", price: "₹540", rating: 4.2, size: "Medium", sunlight: "Medium", water: "Often" },
    { img: product7, name: "Plant Straw", price: "₹250", rating: 4.5, offer: "35% OFF", size: "Large", sunlight: "Full", water: "Daily" },
    { img: product8, name: "Water meter--", price: "₹290", rating: 4.3, size: "Large", sunlight: "Low", water: "Spray" },
];

const PlantCareCollection = () => {
    const { filters, updateFilter, addToCart } = useAppContext();

    const applyFilters = (list) => {
        return list.filter((item) => {
            const priceNumber = parseInt(item.price.replace(/[^\d]/g, ""), 10);
            if (filters.price && priceNumber >= parseInt(filters.price)) return false;
            if (filters.size && item.size !== filters.size) return false;
            if (filters.sunlight && item.sunlight !== filters.sunlight) return false;
            if (filters.water && item.water !== filters.water) return false;
            return true;
        });
    };

    const Banner = () => (
        <div className="pick-banner">
            <img src={bannerBg} alt="Pick Any Four Plant Banner" className="pick-banner-img" />
            <div className="pick-banner-content">
                <h3>Pick Any Five<br />Plant At ₹1549/-</h3>
                <button>Shop Now</button>
            </div>
        </div>
    );

    const filteredProducts = applyFilters(products);

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

            {/* Product Cards */}
            <div className="plant-cards">
                {filteredProducts.map((product, idx) => (
                    <div className="plant-card" key={idx}>
                        <div className="image-wrapper">
                            {product.offer && (
                                <span className="offer-badge">{product.offer}</span>
                            )}
                            <img src={product.img} alt={product.name} />
                        </div>
                        <div className="info">
                            <div className="rating">
                                <FaStar />
                                <span className="rating-text">{product.rating}</span>
                            </div>
                            <h4>{product.name}</h4>
                            <p>{product.price}</p>
                            <button onClick={() => addToCart(product)}>Add to Basket</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Banner */}
            <Banner />
        </div>
    );
};

export default PlantCareCollection;
