import React from "react";
import { CSSTransition } from "react-transition-group";

import "./OverlayBackground.scss";
import "../../utils/scss/transition-group-anims/fade-in.scss";

const OverlayBackground = ({ isActive, onCloseOverlay }) => {
  return (
    <CSSTransition
      in={isActive}
      classNames="fade-in"
      timeout={500}
      unmountOnExit
    >
      <div className="OverlayBackground" onClick={onCloseOverlay}></div>
    </CSSTransition>
  );
};

export default OverlayBackground;
