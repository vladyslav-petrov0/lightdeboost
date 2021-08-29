import {
  string,
  array,
  number,
  shape,
  arrayOf,
  oneOfType,
  object,
} from "prop-types";

export const productOptionsType = arrayOf(
  shape({
    type: string.isRequired,
    label: string.isRequired,
    fieldName: string,
    options: oneOfType([array, object]),
    placeholder: oneOfType([string, number]),
  })
).isRequired;

export const rangeParamsType = {
  min: number.isRequired,
  max: number.isRequired,
  minDefault: number,
  minDistance: number,
};
