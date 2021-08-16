import React, { useContext, useEffect } from "react";
import { useFetch } from "../../customHooks/useFetch";
import { useMediaQuery } from "react-responsive";

import ShopCategory from "../Category/Category";
import SidebarFilter from "./Filter/Filter";
import Sidebar from "./Sidebar";

import { ServiceContext } from "../../context/ServiceContext";

const SidebarContainer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { service } = useContext(ServiceContext);

  const {
    fetchData: fetchCategories,
    error,
    loading,
    data = [],
  } = useFetch(service.getShopCategories);

  useEffect(() => fetchCategories(), []);

  const categories = data.map(({ id, ...props }) => {
    return <ShopCategory key={id} {...props} />;
  });

  return (
    <Sidebar error={error} loading={loading}>
      {isMobile ? <SidebarFilter body={categories} /> : categories}
    </Sidebar>
  );
};

export default SidebarContainer;
