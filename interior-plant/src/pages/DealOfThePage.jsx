import React from 'react';
import Header from '../components/Header';
import DealSection from '../components/DealSection';
import Footer from '../components/Footer';
import MustHavePlants from '../components/MustHavePlants';
import MonthlyMustHaves from '../components/MonthlyMustHaves';


const DealOfThePage = () => {
    return (
        <div className="deal-page-wrapper">
            <Header />
            <DealSection />
            <MustHavePlants />
            <MonthlyMustHaves />
            <Footer />
        </div>
    );
};

export default DealOfThePage;
