import React, { useState, useEffect } from 'react';

import LimitedSaleDetails from "../LimitedSaleDetails/LimitedSaleDetails";
import LimitedSaleTimer from "../LimitedSaleTimer/LimitedSaleTimer";
import withServiceContext from "../hoc/withServiceContext";

import './LimitedSale.scss';

const LimitedSale = ({ service }) => {
    const [ saleItem, setSaleItem ] = useState({});

    const fetchSaleItem = () => {
        service.getLimitedSaleItem()
            .then(setSaleItem);
    };

    useEffect(fetchSaleItem, []);

    const style = { backgroundImage: `url(${saleItem.background})` };

    return (
        <div className="limited-sale" style={style}>
            <div className="limited-sale__container container">
                <div className="limited-sale__body">
                    <LimitedSaleDetails { ...saleItem } />
                    <LimitedSaleTimer startTime={saleItem.startTime} />
                </div>
            </div>
        </div>
    );
};

export default withServiceContext(LimitedSale);