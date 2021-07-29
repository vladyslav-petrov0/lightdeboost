import React from "react";
import classNames from 'classnames';

import withServiceContext from "../hoc/withServiceContext";
import CardSection from "../CardSection/CardSectionContainer";

const OurProducts = ({ service, className }) => {
    const classes = classNames('OurProducts', [`${className}`]);

    return (
        <CardSection
        title="Our products"
        fetchItems={service.getProductList}
        className={classes} />
    );
};

OurProducts.defaultProps = {
    className: ''
};

export default withServiceContext(OurProducts);