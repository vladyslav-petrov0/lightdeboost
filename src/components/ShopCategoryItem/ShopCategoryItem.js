import React from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { applyFilter } from "../../actions/shop";

import "./ShopCategoryItem.scss";

const ShopCategoryItem = ({ label, sortCategory, sortValue, className }) => {
  const dispatch = useDispatch();
  const onClick = () => dispatch(applyFilter(sortCategory, sortValue));

  const classes = classNames("ShopCategoryItem", [`${className}`]);

  return (
    <span className={classes} onClick={onClick}>
      {label}
    </span>
  );
};

ShopCategoryItem.defaultProps = {
  className: "",
};

export default ShopCategoryItem;
