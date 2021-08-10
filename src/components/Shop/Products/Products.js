import React, { useContext, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";

import ShopCard from "../../ShopCard/ShopCard";
import { divideArr } from "../../../utils/funcs/divideArr";

import styles from "./Products.module.scss";
import queryString from "query-string";
import { ServiceContext } from "../../context/ServiceContext";
import { ShopContext } from "../../context/ShopContext";
import ShopProductsLoader from "./Loader/Loader";
import { useFetch } from "../../customHooks/useFetch";
import ShopProductsPagination from "./Pagination/Pagination";

const checkPageParamForErrors = (maxLength, currentPage) => {
  return maxLength && (currentPage > maxLength || currentPage < 1);
};

const getRedirectUrl = (filter) => {
  const searchParams = { ...filter };
  searchParams["page"] = 1;
  return `/shop/?${queryString.stringify(searchParams)}`;
};

const ShopProducts = () => {
  const { service } = useContext(ServiceContext);
  const { filter } = useContext(ShopContext);

  const {
    fetchItems: fetchProducts,
    error,
    loading,
    items: products = [],
  } = useFetch(() => service.getShopProducts(filter));

  useEffect(() => fetchProducts(), [filter]);

  const pages = divideArr(
    products.map((item) => {
      return <ShopCard key={item.id} item={item} className={styles.Card} />;
    }),
    6
  );

  const pageCountError = checkPageParamForErrors(pages.length, filter.page);

  if (pageCountError) {
    const redirectUrl = getRedirectUrl(filter);
    return <Redirect to={redirectUrl} />;
  }

  return (
    <div className={styles.ShopProducts}>
      <div className={styles.ItemList}>
        {loading ? <ShopProductsLoader /> : pages[filter.page - 1]}
      </div>

      {!loading && <ShopProductsPagination count={pages.length} />}
    </div>
  );
};

export default ShopProducts;
