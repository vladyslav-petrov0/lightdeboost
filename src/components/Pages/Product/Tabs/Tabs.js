import React from "react";

import { TabsPanel, Tab, Tabs, TabsList } from "../../../UI/Tabs";

import styles from "./Tabs.module.scss";

const ProductPageTabs = () => {
  return (
    <Tabs className={styles.Tabs}>
      <TabsList className={styles.List}>
        <Tab index={0}>Information</Tab>
        <Tab index={1}>Reviews</Tab>
        <Tab index={2}>Payment</Tab>
        <Tab index={3}>Other</Tab>
        <Tab index={4}>Other</Tab>
      </TabsList>

      <TabsPanel index={0}>1</TabsPanel>
      <TabsPanel index={1}>2</TabsPanel>
      <TabsPanel index={2}>3</TabsPanel>
      <TabsPanel index={3}>4</TabsPanel>
      <TabsPanel index={4}>5</TabsPanel>
    </Tabs>
  );
};

export default ProductPageTabs;
