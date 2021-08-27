import React, { useEffect } from "react";
import PropTypes, { array, oneOfType } from "prop-types";

import Select from "react-select";

import stylesActive from "./Select.module.scss";
import { styles } from "./styles.js";

const ProductSelect = ({ options, ...props }) => {
  const selectOptions = options.map((el) => {
    return { value: el, label: el };
  });

  const onChange = ({ value }) => props.onChange(value); // sets value in useForm by using correct format
  const valueToSelectOption = (value) => {
    // transform useForm value format into select option
    return value.constructor === Object
      ? value
      : {
          value: value,
          label: value,
        };
  };

  useEffect(() => onChange(selectOptions[0]), []); // set initial value in useForm

  const selectProps = {
    isSearchable: false,
    options: selectOptions,
    onChange,
    value: valueToSelectOption(props.value),
    styles,
    className: stylesActive.Select,
  };

  return <Select {...selectProps} />;
};

ProductSelect.propTypes = {
  options: array.isRequired,
};

export default ProductSelect;
