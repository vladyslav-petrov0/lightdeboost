import React from "react";
import { func } from "prop-types";
import { productOptionsType } from "../../../utils/types";

import ProductRadio from "../Radio/Radio";
import ProductClue from "../Clue/Clue";
import ProductRange from "../Range/Range";
import ProductSelect from "../Select/Select";
import ProductToggle from "../Toggle/Toggle";

const ProductOptions = ({ register, options }) => {
  return options.map(({ type, ...props }) => {
    const { label, fieldName } = props;

    const controlComponentProps = {
      ...props,
      ...register(fieldName),
      key: fieldName,
    };

    switch (type) {
      case "radio":
        return (
          <ProductRadio
            {...controlComponentProps}
            {...register(fieldName, props.options[0])}
          />
        );
      case "clue":
        return <ProductClue {...props} key={label} />;
      case "range":
        return <ProductRange {...controlComponentProps} />;
      case "select":
        return <ProductSelect {...controlComponentProps} />;
      case "toggle":
        return <ProductToggle {...controlComponentProps} />;
      default:
        return null;
    }
  });
};

ProductOptions.propTypes = {
  register: func.isRequired,
  options: productOptionsType,
};

export default ProductOptions;
