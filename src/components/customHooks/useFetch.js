import { useState } from "react";
import { makeFlexRequest } from "../../utils/funcs/request";

export const useFetch = (fetchFunc) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = () => {
    setLoading(true);
    return makeFlexRequest(
      fetchFunc,
      (data) => {
        setData(data);
        setLoading(false);
      },
      setError
    );
  };

  return {
    fetchData,
    error,
    loading,
    data,
  };
};
