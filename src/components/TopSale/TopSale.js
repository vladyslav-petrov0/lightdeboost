import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import CardSection from "../CardSection/CardSectionContainer.js";
import { ServiceContext } from "../context/ServiceContext";

const TopSale = ({ className }) => {
  const { service } = useContext(ServiceContext);
  const classes = classNames("TopSale", [`${className}`]);

  return (
    <CardSection
      fetchItems={service.getTopSaleList}
      title="Top sale"
      className={classes}
    />
  );
};

TopSale.defaultProps = {
  className: "",
};

export default TopSale;
