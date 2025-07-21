import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import PlantCategorySection from "../components/PlantCategorySection";
import { categoryItems } from "../data/categoryItems";
import discountIcon from "../assets/images/discount-offer.png";
import MediumPlantCollection from "../components/MediumPlantCollection";

const MediumIndoorPlants = () => {
    return (
        <div className="medium-indoor-plants">
            <Header />

            <PlantCategorySection
                title="Medium Indoor Plants"
                categories={categoryItems}
            />

            {/* Discount Banner */}
            <div className="discount-wrapper">
                <div className="discount-banner">
                    <img
                        src={discountIcon}
                        alt="Discount Offer"
                        className="discount-icon"
                    />
                    Get 12% off on order above @ 1999
                </div>
            </div>

            <MediumPlantCollection />
            <Footer />
        </div>
    );
};

export default MediumIndoorPlants;
