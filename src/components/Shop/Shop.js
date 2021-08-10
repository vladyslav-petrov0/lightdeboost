import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import Container from "../Container/Container";
import ShopProducts from "./Products/Products";
import ShopSidebar from "./Sidebar/Sidebar";

import styles from "./Shop.module.scss";

const Shop = ({ className }) => {
  const classes = classNames(styles.Shop, [`${className}`]);

  return (
    <div className={classes}>
      <Container className={styles.Body}>
        <ShopSidebar />
        <ShopProducts />
      </Container>
    </div>
  );
};

Shop.propTypes = {
  classNames: PropTypes.string,
};

Shop.defaultProps = {
  className: "",
};

export default Shop;
