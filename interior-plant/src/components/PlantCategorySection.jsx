import React from "react";
import { Link } from "react-router-dom";

const PlantCategorySection = ({ title, categories }) => {
    return (
        <div className="plant-category-section">
            <h2 className="section-title">{title}</h2>
            <div className="plant-items">
                {categories.map((item, index) => (
                    <Link to={item.path} className="plant-item" key={index}>
                        <img src={item.img} alt={`${item.label[0]} ${item.label[1]}`} />
                        <p>
                            {item.label[0]}<br />{item.label[1]}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PlantCategorySection;
