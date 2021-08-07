import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import Container from "../Container/Container";
import ShopProducts from "../ShopProducts/ShopProducts";
import ShopSidebar from "../ShopSidebar/ShopSidebar";
import ShopCategoryItem from "../ShopCategoryItem/ShopCategoryItem";

import "./Shop.scss";

const Shop = ({ className }) => {
  const classes = classNames("Shop", [`${className}`]);

  return (
    <div className={classes}>
      <Container className="ShopBody">
        <ShopSidebar />
        <ShopProducts />
      </Container>
    </div>
  );
};

ShopCategoryItem.propTypes = {
  classNames: PropTypes.string,
};

Shop.defaultProps = {
  className: "",
};

export default Shop;
