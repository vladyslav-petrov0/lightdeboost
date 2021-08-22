import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ShopCategoryItem from "./Item/Item";
import Switcher from "../../UI/Switcher/Switcher";

import styles from "./Category.module.scss";
import { ShopContext } from "../../context/ShopContext";

const ShopCategory = ({ subcategories, className, title }) => {
  const { filter } = useContext(ShopContext);
  const classes = classNames(styles.ShopCategory, [`${className}`]);

  return (
    <div className={classes}>
      <h3 className={styles.Title}>{title}</h3>

      <ul className={styles.List}>
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
