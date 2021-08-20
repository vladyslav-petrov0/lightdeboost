import React from "react";
import PropTypes from "prop-types";

import styles from "./Item.module.scss";

const AdvantagesItem = ({ children, img }) => {
  return (
    <div className={styles.Item}>
      <div className={styles.Img}>
        <img src={img} alt="" />
      </div>

      <span>{children}</span>
    </div>
  );
};

AdvantagesItem.propTypes = {
  children: PropTypes.node.isRequired,
  img: PropTypes.string,
};

export default AdvantagesItem;
