import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useFetch } from "../../customHooks";
import { ServiceContext } from "../../context/ServiceContext";

import CardTabsHeaderItem from "./Item/Item";
import CardTabsHeaderLoader from "./Loader/Loader";

import styles from "./Header.module.scss";

const CardTabsHeader = ({ setFetchSrc }) => {
  const [activeTab, setActiveTab] = useState(0);
  const { service } = useContext(ServiceContext);
  const {
    fetchData,
    loading,
    data: headers = [],
  } = useFetch(service.getItemsTabsHeaders);

  useEffect(() => fetchData(), []);

  return (
    <div className={styles.Header}>
      {loading ? (
        <CardTabsHeaderLoader />
      ) : (
        headers.map(({ id, contentId, label }, idx) => {
          const isActive = activeTab === idx;
          const onToggle = () => {
            setFetchSrc(contentId);
            setActiveTab(idx);
          };

          return (
            <CardTabsHeaderItem
              key={id}
              isActive={isActive}
              onToggle={onToggle}
            >
              {label}
            </CardTabsHeaderItem>
          );
        })
      )}
    </div>
  );
};

CardTabsHeader.propTypes = {
  setFetchSrc: PropTypes.func.isRequired,
};

export default CardTabsHeader;
