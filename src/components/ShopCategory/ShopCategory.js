import React, { cloneElement, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ShopCategoryItem from "../ShopCategoryItem/ShopCategoryItem";

import "./ShopCategory.scss";

const ShopCategory = ({ subcategories, className, title }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const classes = classNames("ShopCategory", [`${className}`]);

  return (
    <div className={classes}>
      <h3 className="ShopCategoryTitle">{title}</h3>

      <ul className="ShopCategoryList">
        {subcategories.map(({ id, ...props }, idx) => {
          const onToggleStatus = () => setActiveCategory(idx);
          const isActive = activeCategory === idx;

          return (
            <li key={id}>
              <Switcher isActive={isActive} onToggleStatus={onToggleStatus}>
                <ShopCategoryItem {...props} />
              </Switcher>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Switcher = ({ children, isActive, onToggleStatus }) => {
  const className = classNames({ active: isActive });
  return (
    <span onClick={onToggleStatus}>
      {cloneElement(children, { className })}
    </span>
  );
};

ShopCategory.defaultProps = {
  className: "",
};

export default ShopCategory;
