import { useState } from "react";
import { makeFlexRequest } from "../../utils/funcs/request";

export const useFetch = (fetchFunc) => {
  const [items, setItems] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchItems = () => {
    setLoading(true);
    return makeFlexRequest(
      fetchFunc,
      (data) => {
        setItems(data);
        setLoading(false);
      },
      setError
    );
  };

  return {
    fetchItems,
    error,
    loading,
    items,
  };
};
