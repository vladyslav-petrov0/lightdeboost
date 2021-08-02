import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Input/Input";
import { applyFilter } from "../../actions/shop";

import styles from "./ShopInput.module.scss";

const ShopInput = () => {
  const dispatch = useDispatch();
  const { title: value } = useSelector(
    ({
      shop: {
        products: { filterObj },
      },
    }) => filterObj
  );

  const onInput = (e) => {
    const value = e.target.value.toLowerCase().trim();
    dispatch(applyFilter("title", value));
  };

  return <Input className={styles.Input} value={value} onInput={onInput} />;
};

export default ShopInput;
