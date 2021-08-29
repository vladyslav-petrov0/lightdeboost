import React from "react";
import { func, shape } from "prop-types";
import { rangeParamsType } from "../../../utils/types";

import Range from "../../UI/Range/Range";

import styles from "./Range.module.scss";

const ProductRange = ({ options, onChange }) => (
  <Range className={styles.Range} onChange={onChange} {...options} />
);

ProductRange.propTypes = {
  options: shape(rangeParamsType).isRequired,
  onChange: func.isRequired,
};

export default ProductRange;
