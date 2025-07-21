import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LargePlantCollection from "../components/LargePlantCollection";
import PlantCategorySection from "../components/PlantCategorySection";
import { categoryItems } from "../data/categoryItems";

const LargeIndoorPlants = () => {
    return (
        <div className="large-indoor-plants">
            <Header />
            <PlantCategorySection title="Large Indoor Plants" categories={categoryItems} />
            <LargePlantCollection />
            <Footer />
        </div>
    );
};

export default LargeIndoorPlants;
