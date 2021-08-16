import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { elems } from "../../../mocks/nav";

import styles from "./List.module.scss";
import { Link } from "react-router-dom";

const NavList = ({ children, className }) => {
  const classes = classNames(styles.List, [`${className}`]);

  return (
    <ul className={classes}>
      {elems.map((el) => {
        return (
          <li key={el.id}>
            <Link to={el.to}>{el.label}</Link>
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
