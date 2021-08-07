import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

import { ServiceContext } from "../context/ServiceContext";
import { fetchCategories, fetchProducts, applyFilter } from "../../actions";

import Shop from "./Shop";
import { cleanShop } from "../../actions/shop";

const ShopContainer = () => {
  const { service } = useContext(ServiceContext);
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.shop.products.filter);

  const location = useLocation();
  const params = queryString.parse(location.search);

  if (!params.page) {
    params.page = 1;
  }

  useEffect(() => {
    dispatch(applyFilter(params));
  }, [location.search]);

  useEffect(() => fetchCategories(service, dispatch), []);
  useEffect(() => fetchProducts(service, filter, dispatch), [filter]);
  useEffect(() => () => dispatch(cleanShop()), []);

  return <Shop />;
};

export default ShopContainer;
