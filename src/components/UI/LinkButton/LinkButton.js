import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import BaseButton from "../../BaseButton/BaseButton";

const LinkButton = ({ children, href, ...otherProps }) => {
  return (
    <BaseButton {...otherProps}>
      <Link to={href}>{children}</Link>
    </BaseButton>
  );
};

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
};

export default LinkButton;
