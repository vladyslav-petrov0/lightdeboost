import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from "classnames";

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

const BurgerMenuContainer = ({ isActive, onToggle }) => {
    let classes = classNames('BurgerMenu', {
        'active': isActive
    });

    const onClick = () => onToggle(!isActive);

    return (
        <BurgerMenu
        className={classes} 
        onClick={onClick} />
    );
}

BurgerMenuContainer.propTypes = {
    isActive: PropTypes.bool,
    onToggleMenu: PropTypes.func,
};

const mapStateToProps = ({ header: { burgerMenuIsActive } }) => {
    return {
        isActive: burgerMenuIsActive
    };
}

const mapDispatchToProps = (dispatch) =>    {
    return {
        onToggle: (state) => dispatch(burgerMenuUpdate(state))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenuContainer);