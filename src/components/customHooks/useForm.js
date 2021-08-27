import { useState } from "react";

export const useForm = (initialFields = {}) => {
  const [fields, setFields] = useState(initialFields);

  const register = (label, defaultValue = "") => {
    const onChange = (prop) => {
      const value = prop?.target?.value || prop;

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
