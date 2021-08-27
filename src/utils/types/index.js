import { string, array, number, shape, arrayOf, oneOfType } from "prop-types";

export const productOptionsType = arrayOf(
  shape({
    type: string.isRequired,
    label: string.isRequired,
    fieldName: string,
    options: array,
    placeholder: oneOfType([string, number]),
  })
).isRequired;
