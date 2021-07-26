import React from 'react';

import Intro from '../../Intro/Intro.js';
import ItemsTabs from '../../ItemsTabs/ItemsTabs.js';
import LimitedSale from "../../LimitedSale/LimitedSale.js";
import OurProducts from "../../OurProducts/OurProducts";
import SubscribeSection from "../../SubscribeSection/SubscribeSection";

import './HomePage.scss';

const HomePage = () => {
    return (
        <main>
            <div className="home-page__intro">
                <Intro />
            </div>

            <div className="home-page__tabs">
                <ItemsTabs />
            </div>

            <div className="home-page__limited-sale">
                <LimitedSale />
            </div>

            <div className="home-page__products">
                <OurProducts />
            </div>

            <div className="home-page__subscribe">
                <SubscribeSection />
            </div>
        </main>
    );
};

export default HomePage;