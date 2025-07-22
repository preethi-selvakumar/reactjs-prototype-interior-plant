import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import PlantCategorySection from "../components/PlantCategorySection";
import { categoryItems } from "../data/categoryItems";
import PlantFoodCollection from "../components/PlantFoodCollection";


const PlantFood = () => {
    return (
        <div className="plant-food">
            <Header />
            <PlantCategorySection title="Plant Food" categories={categoryItems} />
            <PlantFoodCollection />
            <Footer />
        </div>
    );
};

export default PlantFood;
