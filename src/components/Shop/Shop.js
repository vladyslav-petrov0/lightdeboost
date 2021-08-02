import React, { useContext, useEffect } from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";

import { ServiceContext } from "../context/ServiceContext";
import { fetchCategories, fetchProducts } from "../../actions";

import Container from "../Container/Container";
import ShopProducts from "../ShopProducts/ShopProducts";
import ShopSidebar from "../ShopSidebar/ShopSidebar";

import "./Shop.scss";

const Shop = ({ className }) => {
  const { service } = useContext(ServiceContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories(service)());
    dispatch(fetchProducts(service)());
  }, []);

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

Shop.defaultProps = {
  className: "",
};

export default Shop;
