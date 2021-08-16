import React, { useEffect, useState } from "react";

import queryString from "query-string";
import { useLocation } from "react-router-dom";

import Shop from "./Shop";
import { ShopContext } from "../context/ShopContext";

const ShopContainer = () => {
  const [filter, setFilter] = useState({});

  const location = useLocation();
  const params = queryString.parse(location.search);

  if (!params.page) {
    params.page = 1;
  }

  useEffect(() => setFilter(params), [location.search]);

  return (
    <ShopContext.Provider value={{ filter, setFilter }}>
      <Shop />
    </ShopContext.Provider>
  );
};

export default ShopContainer;
