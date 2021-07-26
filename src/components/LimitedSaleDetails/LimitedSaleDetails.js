import React from 'react';

import Title from "../Title/Title";
import './LimitedSaleDetails.scss';

const LimitedSaleDetails = ({ title, price = {}, description }) => {
    return (
        <div className="limited-sale__details">
            <h3 className="limited-sale__subtitle ">ELITE TOP PRIORITY</h3>

            <Title className="limited-sale__title"
            size='xl' color="white">
                { title }
            </Title>

            <p className="limited-sale__description">
                { description }
            </p>

            <span className="limited-sale__price limited-sale__price--old">
                ${ price.old }
            </span>

            <span className="limited-sale__price limited-sale__price--new orange">
                ${ price.new }
            </span>
        </div>
    );
};

export default LimitedSaleDetails;