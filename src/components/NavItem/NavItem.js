import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { connect } from "react-redux";

import { burgerMenuUpdate } from "../../actions";

const NavItem = ({ children, className, closeMenu }) => {
  const classes = classNames("NavItem", [`${className}`]);

  return (
    <Link className={classes} to={children.to} onClick={closeMenu}>
      {children.label}
    </Link>
  );
};

NavItem.propTypes = {
  children: PropTypes.object.isRequired,
  className: PropTypes.string,
};

NavItem.defaultProps = {
  className: "",
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeMenu: () => dispatch(burgerMenuUpdate(false)),
  };
};

export default connect(null, mapDispatchToProps)(NavItem);
