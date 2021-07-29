import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import CardSection from "../CardSection/CardSectionContainer.js";
import withServiceContext from "../hoc/withServiceContext";

const TopSale = ({ service, className }) => {
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

export default withServiceContext(TopSale);
