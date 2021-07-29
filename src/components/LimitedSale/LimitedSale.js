import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import LimitedSaleDetails from "../LimitedSaleDetails/LimitedSaleDetails";
import LimitedSaleTimer from "../LimitedSaleTimer/LimitedSaleTimer";
import Container from "../Container/Container";

import withServiceContext from "../hoc/withServiceContext";
import { makeFlexRequest } from "../../utils";

import './LimitedSale.scss';

const LimitedSale = ({ service, className }) => {
    const [ saleItem, setSaleItem ] = useState({});
    const classes = classNames('LimitedSale', [`${className}`]);

    useEffect(() => makeFlexRequest(
        service.getLimitedSaleItem,
        (data) => setSaleItem(data[0])
    ), []);

    const { background, startTime } = saleItem;
    const style = { backgroundImage: `url(${background})` };

    return (
        <div className={classes} style={style}>
            <Container className="LimitedSaleContainer">
                <div className="LimitedSaleBody">
                    <LimitedSaleDetails { ...saleItem } />
                    <LimitedSaleTimer startTime={startTime} />
                </div>
            </Container>
        </div>
    );
};

LimitedSale.defaultProps = {
    className: ''
};

export default withServiceContext(LimitedSale);