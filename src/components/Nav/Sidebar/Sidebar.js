import React, { useState } from "react";

import Portal from "../../Portal/Portal";
import Modal from "../../UI/Modal/Modal";
import Nav from "../Nav";
import CloseButton from "../../UI/CloseButton/CloseButton";

import styles from "./Sidebar.module.scss";

const rootNode = document.getElementById("root");

const NavSidebar = ({ children }) => {
  const [isShowed, setShowed] = useState(false);
  const onHandleMenu = () => setShowed((prevState) => !prevState);
  const onCloseMenu = () => setShowed(false);

  const onHandle = (e) => {
    const target = e.target?.closest("a") || e.target;
    if (target.tagName === "A") {
      onCloseMenu();
    }
  };

  return (
    <>
      <button onClick={onHandleMenu} className={styles.MenuBtn}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <Portal isOpen to={rootNode}>
        <Modal
          isActive={isShowed}
          className={styles.Nav}
          activeClassName={styles.showed}
          onCloseModal={onCloseMenu}
        >
          <CloseButton onClose={onCloseMenu} className={styles.CloseBtn} />
          <Nav onClick={onHandle}>{children}</Nav>
        </Modal>
      </Portal>
    </>
  );
};

export default NavSidebar;
