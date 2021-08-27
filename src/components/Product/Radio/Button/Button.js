import React, { useEffect } from "react";
import { bool, func, node } from "prop-types";

import ToggleButton from "../../../UI/ToggleButton/ToggleButton";

import styles from "./Button.module.scss";

const ProductRadioButton = ({ onChange, isActive, children }) => {
  useEffect(() => isActive && onChange(), []); // callback that set initial value in useForm

  return (
    <ToggleButton
      className={styles.Button}
      isActive={isActive}
      onToggle={onChange}
    >
      {children}
    </ToggleButton>
  );
};

ProductRadioButton.propTypes = {
  onChange: func,
  isActive: bool.isRequired,
  children: node.isRequired,
};

ProductRadioButton.defaultProps = {
  isActive: false,
};

export default ProductRadioButton;
