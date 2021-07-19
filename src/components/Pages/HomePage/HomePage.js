import React from 'react';

import Intro from '../../Intro/Intro.js';
import ItemsTabs from '../../ItemsTabs/ItemsTabs.js';
import LimitedSale from "../../LimitedSale/LimitedSale";

const HomePage = () => {
    return (
        <main>
            <Intro />
            <ItemsTabs />
            <LimitedSale />
        </main>
    );
};

export default HomePage;