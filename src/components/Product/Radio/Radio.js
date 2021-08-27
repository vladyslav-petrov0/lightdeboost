import React from "react";
import { array, string } from "prop-types";

import RadioGroup from "../../UI/RadioGroup/RadioGroup";
import FormControlLabel from "../../UI/FormControlLabel/FormControlLabel";
import RadioButton from "./Button/Button";

import styles from "./Radio.module.scss";

const ProductRadio = ({ label, options, ...props }) => {
  return (
    <div className={styles.RadioWrapper}>
      <span className={styles.Label}>{label}</span>

      <RadioGroup className={styles.Radio} {...props}>
        {options.map((el) => {
          return (
            <FormControlLabel key={el} value={el}>
              <RadioButton>{el}</RadioButton>
            </FormControlLabel>
          );
        })}
      </RadioGroup>
    </div>
  );
};

ProductRadio.propTypes = {
  label: string.isRequired,
  options: array.isRequired,
};

export default ProductRadio;
