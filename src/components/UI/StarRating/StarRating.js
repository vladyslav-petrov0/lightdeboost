import React from "react";
import { func, number, bool, string } from "prop-types";
import cn from "classnames";

import Star from "./Star/Star";

import styles from "./StarRating.module.scss";

const StarRating = ({ quantity, onChange, value, disabled, className }) => {
  /* generate array with props.quantity size,
    then reverse it for correct outside value */
  const arr = Array.from({ length: quantity })
    .map((el, idx) => idx)
    .reverse();

  const classes = cn(styles.StarRating, className);

  return (
    <div className={classes}>
      {arr.map((el) => {
        const onClick = () => onChange(el + 1);
        return (
          <Star
            key={el}
            onChange={disabled ? null : onClick}
            isActive={el + 1 === +value}
            isDisabled={disabled}
          />
        );
      })}
    </div>
  );
};

StarRating.propTypes = {
  quantity: number,
  onChange: func,
  value: number,
  disabled: bool,
  className: string,
};

StarRating.defaultProps = {
  quantity: 5,
  value: 1,
  disabled: false,
  className: "",
};

export default StarRating;
