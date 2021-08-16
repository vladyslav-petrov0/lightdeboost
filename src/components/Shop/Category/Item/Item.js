import React, { useContext } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import queryString from "query-string";

import { useHistory } from "react-router-dom";

import styles from "./Item.module.scss";
import { ShopContext } from "../../../context/ShopContext";

const ShopCategoryItem = ({ label, filterParams, className }) => {
  const history = useHistory();

  const { filter } = useContext(ShopContext);
  const classes = classNames(styles.Item, [`${className}`]);

  const onHandle = () => {
    const { category, value } = filterParams;

    const isActive =
      filter[category] == value || (!filter[category] && value == "all");

    if (!isActive) {
      let urlObj = { ...filter, page: 1, [category]: value };

      if (value == "all") {
        delete urlObj[category];
      }

      history.push(`/shop/?${queryString.stringify(urlObj)}`);
    }
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
