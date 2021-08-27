import { cloneElement } from "react";
import { func, node, number, oneOfType, string } from "prop-types";

const FormControlLabel = ({ currentValue, onChange, value, children }) => {
  return cloneElement(children, {
    onChange: () => onChange(value),
    isActive: currentValue === value,
  });
};

FormControlLabel.propTypes = {
  currentValue: oneOfType([string, number]),
  onChange: func,
  value: oneOfType([string, number]).isRequired,
  children: node.isRequired,
};

export default FormControlLabel;
