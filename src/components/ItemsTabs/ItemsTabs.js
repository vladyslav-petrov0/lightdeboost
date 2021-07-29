import React, { useEffect, useState } from "react";
import classNames from "classnames";

import {
  FetchTabs as Tabs,
  FetchTabsHeader as TabsHeader,
  FetchTabsPanel as TabsPanel,
  FetchTabsHeaderItem as TabsHeaderItem,
} from "../FetchTabs";

import Container from "../Container/Container";
import ItemsTabsContent from "../ItemsTabsContent/ItemsTabsContent";

import withServiceContext from "../hoc/withServiceContext";
import { makeFlexRequest } from "../../utils";

import "./ItemsTabs.scss";
import "../Tabs/Tabs.scss";

const ItemsTabs = ({ children, className }) => {
  return (
    <div className={className}>
      <Container>
        <Tabs className="Tabs">
          <TabsHeader className="ItemsTabsHeader TabsHeader">
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

const ItemsTabsContainer = ({ service, className }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [headers, setHeaders] = useState([]);

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
            className="ItemsTabsHeaderItem TabsHeaderItem"
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

export default withServiceContext(ItemsTabsContainer);
