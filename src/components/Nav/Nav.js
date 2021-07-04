import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Nav.scss';

const Nav = ({ classNames, children }) => {
    return (
        <nav className={classNames}>
            <ul className='nav-list'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
                <li> {children} </li>
            </ul>
        </nav>
    );
};

const NavContainer = ({ isActive, children }) => {
    let classes = "nav";
    if (isActive) {
        classes += " showed";
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
    
    return (
        <Nav classNames={classes}> 
            { children } 
        </Nav>
    );
};

const mapStateToProps = ({ header: { burgerMenuIsActive } }) => { 
    return { isActive: burgerMenuIsActive };
}

export default connect(mapStateToProps)(NavContainer);