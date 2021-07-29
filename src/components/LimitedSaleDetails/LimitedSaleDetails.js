import React from 'react';

import Title from "../Title/Title";
import './LimitedSaleDetails.scss';

const LimitedSaleDetails = ({ title, price = {}, description }) => {
    return (
        <div className="LimitedSaleDetails">
            <h3 className="LimitedSaleSubtitle ">ELITE TOP PRIORITY</h3>

            <Title className="LimitedSaleTitle"
            size='xl' color="white">
                { title }
            </Title>

            <p className="LimitedSaleDescription">
                { description }
            </p>

            <span className="LimitedSalePrice LimitedSalePrice--old">
                ${ price.old }
            </span>

            <span className="LimitedSalePrice LimitedSalePrice--new orange">
                ${ price.new }
            </span>
        </div>
    );
};

export default LimitedSaleDetails;