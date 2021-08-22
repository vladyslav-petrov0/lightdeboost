import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Container from "../UI/Container/Container";
import CardTabsHeader from "./Header/Header";
import CardTabsBody from "./Body/Body";

import styles from "./CardTabs.module.scss";

const CardTabs = ({ className }) => {
  const [fetchSrc, setFetchSrc] = useState("");
  const classes = cn(styles.CardTabs, className);

  return (
    <div className={classes}>
      <Container className={styles.Wrapper}>
        <CardTabsHeader setFetchSrc={setFetchSrc} />
        <CardTabsBody fetchSrc={fetchSrc} />
      </Container>
    </div>
  );
};

CardTabs.propTypes = {
  className: PropTypes.string,
};

CardTabs.defaultProps = {
  className: "",
};

export default CardTabs;
