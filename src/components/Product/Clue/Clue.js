import React from "react";
import { string } from "prop-types";

import styles from "./Clue.module.scss";

const ProductClue = ({ label }) => {
  return <span className={styles.Clue}>{label}</span>;
};

ProductClue.propTypes = {
  label: string.isRequired,
};

export default ProductClue;
