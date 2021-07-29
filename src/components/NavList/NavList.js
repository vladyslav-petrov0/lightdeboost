import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { elems } from "../../mocks/nav";
import NavItem from "../NavItem";

import "./NavList.scss";

const NavList = ({ children, className }) => {
  const classes = classNames("NavList", [`${className}`]);

  return (
    <ul className={classes}>
      {elems.map((el) => {
        return (
          <li key={el.id}>
            <NavItem>{el}</NavItem>
          </li>
        );
      })}
      {children}
    </ul>
  );
};

NavList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

NavList.defaultProps = {
  className: "",
};

export default NavList;
