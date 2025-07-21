import React from 'react';
import Header from '../components/Header';
import HomeBanner from '../components/HomeBanner';
import SmallIndoorPlants from '../components/SmallIndoorPlants';
import PlantCollection from '../components/PlantCollection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <HomeBanner />
            <SmallIndoorPlants />
            <PlantCollection />
            <FAQ />
            <Footer />
        </div>
    );
};

export default Home;
