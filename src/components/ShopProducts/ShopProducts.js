import React from "react";

import { Tabs, TabsBody, TabsHeader, TabsHeaderItem, TabsItem } from "../Tabs";
import ShopCard from "../ShopCard/ShopCard";
import { divideArr } from "../../utils/funcs/divideArr";
import { useSelector } from "react-redux";

import styles from "./ShopProducts.module.scss";

const ShopProducts = () => {
  const products = useSelector((state) => state.shop.products.current);
  const dividedProducts = divideArr(products, 6);

  return (
    <div className={styles.ShopProducts}>
      <Tabs className={styles.Tabs}>
        <TabsBody>
          {dividedProducts.map(({ id, fragment }, idx) => {
            return (
              <TabsItem key={id} className={styles.ItemList}>
                {fragment.map((item) => {
                  return (
                    <ShopCard
                      key={item.id}
                      item={item}
                      className={styles.Card}
                    />
                  );
                })}
              </TabsItem>
            );
          })}
        </TabsBody>

        {dividedProducts.length > 1 && (
          <TabsHeader className={styles.Nav}>
            {dividedProducts.map(({ id }, idx) => {
              return (
                <TabsHeaderItem className={styles.Btn} key={id}>
                  {idx + 1}
                </TabsHeaderItem>
              );
            })}
          </TabsHeader>
        )}
      </Tabs>
    </div>
  );
};

export default ShopProducts;
