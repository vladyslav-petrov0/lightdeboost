import React, { useContext } from "react";
import classNames from "classnames";

import CardSection from "../CardSection/CardSection";
import { ServiceContext } from "../context/ServiceContext";

const OurProducts = ({ className }) => {
  const { service } = useContext(ServiceContext);
  const classes = classNames("OurProducts", [`${className}`]);

  return (
    <CardSection
      title="Our products"
      fetchItems={service.getProductList}
      className={classes}
    />
  );
};

OurProducts.defaultProps = {
  className: "",
};

export default OurProducts;
