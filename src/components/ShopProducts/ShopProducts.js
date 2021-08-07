import React from "react";
import { Redirect, useHistory } from "react-router-dom";

import ShopCard from "../ShopCard/ShopCard";
import { divideArr } from "../../utils/funcs/divideArr";
import { useSelector } from "react-redux";

import styles from "./ShopProducts.module.scss";
import queryString from "query-string";
import FadeLoader from "../Loaders/FadeLoader/FadeLoader";

const checkPageParamForErrors = (maxLength, currentPage) => {
  return maxLength && (currentPage > maxLength || currentPage < 1);
};

const getRedirectUrl = (filter) => {
  const searchParams = { ...filter };
  searchParams["page"] = 1;
  return `/shop/?${queryString.stringify(searchParams)}`;
};

const ShopProducts = () => {
  const history = useHistory();

  const {
    items: products,
    loading,
    filter,
  } = useSelector(({ shop }) => shop.products);

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

  if (loading) {
    return (
      <div className={styles.ShopProducts}>
        <div className={styles.ItemList}>
          <FadeLoader className={styles.Card} />
          <FadeLoader className={styles.Card} />
          <FadeLoader className={styles.Card} />
          <FadeLoader className={styles.Card} />
          <FadeLoader className={styles.Card} />
          <FadeLoader className={styles.Card} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.ShopProducts}>
      <div className={styles.ItemList}>{pages[filter.page - 1]}</div>
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
