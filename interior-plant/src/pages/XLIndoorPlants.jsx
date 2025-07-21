import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import XLPlantCollection from "../components/XLPlantCollection";
import PlantCategorySection from "../components/PlantCategorySection";
import { categoryItems } from "../data/categoryItems";

const XLIndoorPlants = () => {
    return (
        <div className="xl-indoor-plants">
            <Header />
            <PlantCategorySection title="XL Indoor Plants" categories={categoryItems} />
            <XLPlantCollection />
            <Footer />
        </div>
    );
};

export default XLIndoorPlants;
