import React, { Children, cloneElement } from "react";
import { number, func, node, oneOfType, string } from "prop-types";

const RadioGroup = ({ className, children, value, onChange }) => {
  return (
    <div className={className}>
      {Children.map(children, (child) => {
        return cloneElement(child, { currentValue: value, onChange });
      })}
    </div>
  );
};

RadioGroup.propTypes = {
  className: string,
  children: node.isRequired,
  value: oneOfType([string, number]),
  onChange: func,
};

export default RadioGroup;
