import React from "react";

import withServiceContext from "../hoc/withServiceContext";
import ShopCardList from "../CardSection/CardSection";

import './OurProducts.scss';

const OurProducts = ({ service }) => {
    return (
        <ShopCardList
        title="Our products"
        fetchItems={service.getProductList}
        className="our-products" />
    );
};

export default withServiceContext(OurProducts);