import React from "react";
import cn from "classnames";

import FadeLoader from "../../../Loaders/FadeLoader/FadeLoader";

import styles from "./Loader.module.scss";
import PropTypes from "prop-types";

const FreeCardSliderLoader = ({ className }) => {
  const classes = cn(styles.Loader, [`${className}`]);
  const itemClasses = cn(styles.Item, "ShopCard");

  return (
    <div className={classes}>
      <FadeLoader className={itemClasses} />
      <FadeLoader className={itemClasses} />
      <FadeLoader className={itemClasses} />
      <FadeLoader className={itemClasses} />
    </div>
  );
};

FreeCardSliderLoader.propTypes = {
  classNames: PropTypes.string,
};

FreeCardSliderLoader.defaultProps = {
  className: "",
};

export default FreeCardSliderLoader;
