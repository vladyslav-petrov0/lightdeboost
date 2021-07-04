import React from 'react';
import { connect } from 'react-redux';

import { burgerMenuUpdate } from '../../actions/index.js';
import './BurgerMenu.scss';

const BurgerMenu = (props) => {
    return (
        <button {...props} >
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
};

const BurgerMenuContainer = ({ isActive, onToggleMenu }) => {
    let classes = 'burger-menu';
    classes += (isActive) ? ' active' : '';

    return (
        <BurgerMenu
        className={classes} 
        onClick={() => onToggleMenu(!isActive)} />
    );
}

const mapStateToProps = ({ header: { burgerMenuIsActive } }) => {
    return {
        isActive: burgerMenuIsActive
    };
}

const mapDispatchToProps = (dispatch) =>    {
    return {
        onToggleMenu: (state) => dispatch(burgerMenuUpdate(state))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenuContainer);