import React, { useContext, useEffect } from "react";
import { ServiceContext } from "../../context/ServiceContext";

import ShopCategory from "../Category/Category";
import ShopCategoryLoader from "../Category/Loader/Loader";
import { useFetch } from "../../customHooks/useFetch";
import styles from "./Sidebar.module.scss";

const ShopSidebar = () => {
  const { service } = useContext(ServiceContext);

  const {
    fetchItems: fetchCategories,
    error,
    loading,
    items: categories = [],
  } = useFetch(service.getShopCategories);

  useEffect(() => fetchCategories(), []);

  return (
    <div className={styles.Sidebar}>
      {loading ? (
        <ShopCategoryLoader />
      ) : (
        categories.map(({ id, ...props }) => {
          return <ShopCategory key={id} {...props} />;
        })
      )}
      {/*<ShopInput />*/}
    </div>
  );
};

export default ShopSidebar;
