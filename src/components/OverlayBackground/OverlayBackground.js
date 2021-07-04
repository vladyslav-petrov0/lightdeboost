import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import { burgerMenuUpdate } from '../../actions/index.js';
import './OverlayBackground.scss';

const OverlayBackground = ({ isActive, closeOverlay}) => {
    return (
        <CSSTransition
        in={isActive}
        classNames="fade-in"
        timeout={500}
        unmountOnExit>
            <div className="overlay-background"
            onClick={closeOverlay}></div>          
        </CSSTransition>
    );

};

const mapDispatchToProps = (dispatch) => {
    return {
        closeOverlay: () => dispatch(burgerMenuUpdate(false))
    };
}

const mapStateToProps = ({ header: { burgerMenuIsActive } }) => {
    return {
        isActive: burgerMenuIsActive,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OverlayBackground);