import React from "react";
import PropTypes from "prop-types";

import "./AdvantagesItem.scss";

const AdvantagesItem = ({ children, img }) => {
  return (
    <div className="AdvantagesItem">
      <div className="AdvantagesItemImg">
        <img src={img} alt="" />
      </div>

      <span>{children}</span>
    </div>
  );
};

AdvantagesItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdvantagesItem;
