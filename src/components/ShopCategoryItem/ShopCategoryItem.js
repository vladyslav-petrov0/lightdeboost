import React, { useContext } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import queryString from "query-string";

import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import "./ShopCategoryItem.scss";
import { ShopContext } from "../context/ShopContext";

const ShopCategoryItem = ({ label, filterParams, className }) => {
  const history = useHistory();

  const { filter } = useContext(ShopContext);
  const classes = classNames("ShopCategoryItem", [`${className}`]);

  const onHandle = () => {
    const { category, value } = filterParams;

    let urlObj = { ...filter, [category]: value };

    if (value == "all") {
      delete urlObj[category];
    }

    history.push(`/shop/?${queryString.stringify(urlObj)}`);
  };

  return (
    <button onClick={onHandle} className={classes}>
      {label}
    </button>
  );
};

ShopCategoryItem.propTypes = {
  label: PropTypes.node.isRequired,
  filterParams: PropTypes.object.isRequired,
  classNames: PropTypes.string,
};

ShopCategoryItem.defaultProps = {
  className: "",
};

export default ShopCategoryItem;
