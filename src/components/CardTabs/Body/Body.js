import React, { useContext, useEffect } from "react";
import { useFetch } from "../../customHooks";
import PropTypes from "prop-types";

import CardTabsContent from "./Content/Content";

import { ServiceContext } from "../../context/ServiceContext";

import styles from "./Body.module.scss";

const CardTabsBody = ({ fetchSrc }) => {
  const { service } = useContext(ServiceContext);

  const { loading, error, data, fetchData } = useFetch(() =>
    service.getItemsTabsContent(fetchSrc)
  );

  useEffect(() => fetchData(), [fetchSrc]);

  return (
    <div className={styles.Body}>
      <CardTabsContent loading={loading} error={error} items={data?.items} />
    </div>
  );
};

CardTabsBody.propTypes = {
  fetchSrc: PropTypes.string.isRequired,
};

export default CardTabsBody;
