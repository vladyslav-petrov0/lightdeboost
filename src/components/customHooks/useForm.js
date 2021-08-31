import { useState } from "react";

export const useForm = (initialFields = {}) => {
  const [fields, setFields] = useState(initialFields);

  const register = (label, defaultValue = "") => {
    const onChange = (prop) => {
      let value;

      value = prop.target ? prop.target.value : prop;

      setFields((fields) => ({
        ...fields,
        [label]: value,
      }));
    };

    return {
      value: fields?.[label] || defaultValue,
      onChange,
      name: label,
    };
  };

  return { register, fields };
};
