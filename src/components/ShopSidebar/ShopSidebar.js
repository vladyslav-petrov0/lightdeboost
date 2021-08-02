import React from "react";
import ShopInput from "../ShopInput/ShopInput";
import ShopCategory from "../ShopCategory/ShopCategory";
import { useSelector } from "react-redux";

const ShopSidebar = () => {
  const categories = useSelector((state) => state.shop.categories.immutable);

  return (
    <div className="ShopSidebar">
      {categories.map(({ id, ...props }) => {
        return <ShopCategory key={id} {...props} />;
      })}
      <ShopInput />
    </div>
  );
};

export default ShopSidebar;
