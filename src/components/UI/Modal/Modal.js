import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import styles from "./Modal.module.scss";
import Portal from "../../Portal/Portal";
import OverlayBackground from "../../OverlayBackground/OverlayBackground";

const appNode = document.getElementById("root");

const Modal = ({
  isActive,
  children,
  className,
  onCloseModal,
  activeClassName,
}) => {
  const classes = cn(styles.Modal, [`${className}`], {
    [`${activeClassName}`]: isActive,
  });

  document.body.style.overflow = isActive ? "hidden" : "";

  return (
    <div className={classes}>
      {children}

      <Portal isOpen to={appNode}>
        <OverlayBackground isActive={isActive} onCloseOverlay={onCloseModal} />
      </Portal>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  className: "",
  isActive: false,
};

export default Modal;
