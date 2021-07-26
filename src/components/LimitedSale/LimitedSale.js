import React, { useState, useEffect } from 'react';

import LimitedSaleDetails from "../LimitedSaleDetails/LimitedSaleDetails";
import LimitedSaleTimer from "../LimitedSaleTimer/LimitedSaleTimer";

import withServiceContext from "../hoc/withServiceContext";
import { makeFlexRequest } from "../../utils";

import './LimitedSale.scss';

const LimitedSale = ({ service }) => {
    const [ saleItem, setSaleItem ] = useState({});

    useEffect(() => makeFlexRequest(
        service.getLimitedSaleItem,
        (data) => setSaleItem(data[0])
    ), []);

    const { background, startTime } = saleItem;
    const style = { backgroundImage: `url(${background})` };

    return (
        <div className="limited-sale" style={style}>
            <div className="limited-sale__container container">
                <div className="limited-sale__body">
                    <LimitedSaleDetails { ...saleItem } />
                    <LimitedSaleTimer startTime={startTime} />
                </div>
            </div>
        </div>
    );
};

export default withServiceContext(LimitedSale);