import React, { useContext, useEffect, useState } from "react";
import { ServiceContext } from "../context/ServiceContext";

import ShopCategory from "../ShopCategory/ShopCategory";
import ShopCategoryLoader from "../ShopCategoryLoader/ShopCategoryLoader";
import { useFetch } from "../customHooks/useFetch";

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
    <div className="ShopSidebar">
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
