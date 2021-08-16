import React, { useContext, useEffect } from "react";
import styles from "./Products.module.scss";
import { useFetch } from "../../customHooks/useFetch";
import { useMediaQuery } from "react-responsive";

import ShopCard from "../../ShopCard/ShopCard";
import ShopProductsLoader from "./Loader/Loader";
import ShopProductsPagination from "./Pagination/Pagination";
import FreeCardSlider from "../../UI/FreeCardSlider/FreeCardSlider";
import FreeCardSliderLoader from "../../UI/FreeCardSlider/Loader/Loader";

import { ServiceContext } from "../../context/ServiceContext";
import { ShopContext } from "../../context/ShopContext";

const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 501 });
  return isNotMobile ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return isMobile ? children : null;
};

const ShopProducts = () => {
  const { service } = useContext(ServiceContext);
  const { filter } = useContext(ShopContext);

  const {
    fetchData: fetchProducts,
    error,
    loading,
    data: pages = {},
  } = useFetch(() => service.getShopProducts(filter));

  useEffect(() => fetchProducts(), [filter]);

  const products = pages.products?.map((item) => {
    return <ShopCard key={item.id} item={item} className={styles.Card} />;
  });

  return (
    <div className={styles.ShopProducts}>
      <Default>
        <div className={styles.ItemList}>
          {loading ? <ShopProductsLoader /> : products}
        </div>
      </Default>

      <Mobile>
        <FreeCardSlider
          sliderClassName={styles.Slider}
          loaderClassName={styles.Slider}
          items={pages.products}
          loading={loading}
        />
      </Mobile>

      <ShopProductsPagination count={pages.length} />
    </div>
  );
};

export default ShopProducts;
