import React from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

import { burgerMenuUpdate } from "../../actions";

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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onCloseOverlay: () => dispatch(burgerMenuUpdate(false)),
//   };
// };
//
// const mapStateToProps = ({ header: { burgerMenuIsActive } }) => {
//   return {
//     isActive: burgerMenuIsActive,
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(OverlayBackground);
export default OverlayBackground;
