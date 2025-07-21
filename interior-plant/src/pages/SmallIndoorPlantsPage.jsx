import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import PlantCategorySection from "../components/PlantCategorySection";
import { categoryItems } from "../data/categoryItems";
import SmallIndoorPlantCollection from "../components/SmallIndoorPlantCollection";

const SmallIndoorPlants = () => {
    return (
        <div className="small-indoor-plants1">
            <Header />
            <PlantCategorySection title="Small Indoor Plants" categories={categoryItems} />
            <SmallIndoorPlantCollection />
            <Footer />
        </div>
    );
};

export default SmallIndoorPlants;
