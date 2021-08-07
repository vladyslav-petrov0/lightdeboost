import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useSelector } from "react-redux";

import ShopCategoryItem from "../ShopCategoryItem/ShopCategoryItem";
import Switcher from "../Switcher/Switcher";

import "./ShopCategory.scss";

const ShopCategory = ({ subcategories, className, title }) => {
  const filter = useSelector((state) => state.shop.products.filter);
  const classes = classNames("ShopCategory", [`${className}`]);

  return (
    <div className={classes}>
      <h3 className="ShopCategoryTitle">{title}</h3>

      <ul className="ShopCategoryList">
        {subcategories.map(({ id, ...props }) => {
          const { category, value } = props.filterParams;

          const isActive = filter[category]
            ? filter[category] == value
            : value == "all";

          return (
            <li key={id}>
              <Switcher isActive={isActive}>
                <ShopCategoryItem {...props} />
              </Switcher>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ShopCategory.propTypes = {
  className: PropTypes.string,
  title: PropTypes.node,
  subcategories: PropTypes.array.isRequired,
};

ShopCategory.defaultProps = {
  className: "",
};

export default ShopCategory;
