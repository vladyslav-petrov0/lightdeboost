import React from "react";
import ShopInput from "../ShopInput/ShopInput";
import ShopCategory from "../ShopCategory/ShopCategory";
import { useSelector } from "react-redux";
import ShopCategoryLoader from "../ShopCategoryLoader/ShopCategoryLoader";

const ShopSidebar = () => {
  const { items: categories, loading } = useSelector(
    ({ shop }) => shop.categories
  );

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
