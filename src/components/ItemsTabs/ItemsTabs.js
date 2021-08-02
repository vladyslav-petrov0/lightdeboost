import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames";

import {
  FetchTabs as Tabs,
  FetchTabsHeader as TabsHeader,
  FetchTabsPanel as TabsPanel,
  FetchTabsHeaderItem as TabsHeaderItem,
} from "../FetchTabs";

import Container from "../Container/Container";
import ItemsTabsContent from "../ItemsTabsContent/ItemsTabsContent";

import { makeFlexRequest } from "../../utils";

import "./ItemsTabs.scss";
import tabsStyles from "../Tabs/Tabs.module.scss";
import { ServiceContext } from "../context/ServiceContext";

const ItemsTabs = ({ children, className }) => {
  return (
    <div className={className}>
      <Container>
        <Tabs className={tabsStyles.Tabs}>
          <TabsHeader className={`ItemsTabsHeader ${tabsStyles.Header}`}>
            {children}
          </TabsHeader>

          <TabsPanel className="ItemsTabsPanel">
            <ItemsTabsContent />
          </TabsPanel>
        </Tabs>
      </Container>
    </div>
  );
};

const ItemsTabsContainer = ({ className }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [headers, setHeaders] = useState([]);

  const { service } = useContext(ServiceContext);

  const classes = classNames("ItemsTabs", [`${className}`]);

  useEffect(
    () => makeFlexRequest(service.getItemsTabsHeaders, setHeaders, setError),
    []
  );

  return (
    <ItemsTabs className={classes}>
      {headers.map((el) => {
        return (
          <TabsHeaderItem
            className={`ItemsTabsHeaderItem ${tabsStyles.Item}`}
            key={el.id}
            fetchSrc={el.contentId}
          >
            {el.label}
          </TabsHeaderItem>
        );
      })}
    </ItemsTabs>
  );
};

ItemsTabsContainer.defaultProps = {
  className: "",
};

export default ItemsTabsContainer;
