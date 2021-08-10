import React, { Children } from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import BurgerMenu from "../BurgerMenu/BurgerMenu.js";
import NavList from "../NavList/NavList";
import { burgerMenuUpdate } from "../../actions";

import "./Nav.scss";

const Nav = ({ classNames, children, closeMenu, isActive }) => {
  return (
    <nav className={classNames}>
      {isActive && <BurgerMenu />}

      <NavList className="NavListHeader">
        {Children.map(children, (child) => {
          if (child) {
            return <li>{React.cloneElement(child, { onClick: closeMenu })}</li>;
          }
        })}
      </NavList>
    </nav>
  );
};

const NavContainer = ({ isActive, children, closeMenu }) => {
  let classes = classNames("Nav", {
    showed: isActive,
  });

  document.body.style.overflow = isActive ? "hidden" : "";

  const onClick = (e) => {
    const target = e.target?.closest("a") || e.target;

    if (target.tagName === "A" && isActive) {
      closeMenu();
    }
  };

  return (
    <Nav closeMenu={onClick} classNames={classes} isActive={isActive}>
      {children}
    </Nav>
  );
};

const mapStateToProps = ({ header: { burgerMenuIsActive } }) => {
  return { isActive: burgerMenuIsActive };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeMenu: () => dispatch(burgerMenuUpdate(false)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);
