import React from 'react';

import './LimitedSaleDetails.scss';

const LimitedSaleDetails = ({ title, price = {}, description }) => {
    return (
        <div className="limited-sale__details">
            <h3 className="limited-sale__subtitle ">ELITE TOP PRIORITY</h3>

            <h1 className="limited-sale__title title title--big title--white">
                { title }
            </h1>

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