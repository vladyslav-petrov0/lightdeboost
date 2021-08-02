import React, { useState, useEffect, useContext } from "react";
import classNames from "classnames";

import LimitedSaleDetails from "../LimitedSaleDetails/LimitedSaleDetails";
import LimitedSaleTimer from "../LimitedSaleTimer/LimitedSaleTimer";
import Container from "../Container/Container";

import { makeFlexRequest } from "../../utils";

import "./LimitedSale.scss";
import { ServiceContext } from "../context/ServiceContext";

const LimitedSale = ({ className }) => {
  const [saleItem, setSaleItem] = useState({});
  const { service } = useContext(ServiceContext);
  const classes = classNames("LimitedSale", [`${className}`]);

  useEffect(
    () =>
      makeFlexRequest(service.getLimitedSaleItem, (data) =>
        setSaleItem(data[0])
      ),
    []
  );

  const { background, startTime } = saleItem;
  const style = { backgroundImage: `url(${background})` };

  return (
    <div className={classes} style={style}>
      <Container className="LimitedSaleContainer">
        <div className="LimitedSaleBody">
          <LimitedSaleDetails {...saleItem} />
          <LimitedSaleTimer startTime={startTime} />
        </div>
      </Container>
    </div>
  );
};

LimitedSale.defaultProps = {
  className: "",
};

export default LimitedSale;
