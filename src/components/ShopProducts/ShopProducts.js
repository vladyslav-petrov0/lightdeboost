import React, { useContext, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";

import ShopCard from "../ShopCard/ShopCard";
import { divideArr } from "../../utils/funcs/divideArr";

import styles from "./ShopProducts.module.scss";
import queryString from "query-string";
import { ServiceContext } from "../context/ServiceContext";
import { ShopContext } from "../context/ShopContext";
import ShopProductsLoader from "../ShopProductsLoader/ShopProductsLoader";
import { useFetch } from "../customHooks/useFetch";

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
  const history = useHistory();

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

      {pages.map((el, idx) => {
        const onHandle = () => {
          const url = queryString.stringify({ ...filter, page: idx + 1 });
          history.push(`/shop/?${url}`);
        };

        return <button onClick={onHandle}>{idx + 1}</button>;
      })}
    </div>
  );
};

export default ShopProducts;
