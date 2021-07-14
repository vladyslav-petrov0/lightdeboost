import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import BurgerMenu from '../BurgerMenu/BurgerMenu.js';
import { burgerMenuUpdate } from '../../actions/index.js';
import { elems } from '../../mocks/nav.js';
import './Nav.scss';

const Nav = ({ classNames, children, closeMenu, isActive }) => {
    return (
        <nav className={classNames}>
            { isActive && <BurgerMenu /> }
            
            <ul className='nav-list'>
            {
                elems.map(el => {
                    return (
                        <li key={el.id}>
                            <Link to={el.to}
                            onClick={closeMenu}>
                                { el.label }
                            </Link>
                        </li>
                    );
                })
            }{
                Children.map(children, (child) => {
                    if (child) {
                        return (
                            <li>
                            { React.cloneElement(child, { onClick: closeMenu } )}
                            </li>
                        );
                    };
                })
            }
            </ul>
        </nav>
    );
};

const NavContainer = ({ isActive, children, closeMenu }) => {
    let classes = "nav";
    if (isActive) {
        classes += " showed";
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
    
    const onClick = (e) => {
        const target = e.target?.closest('a') || e.target;

        if (target.tagName == 'A' && isActive) {
            closeMenu();
        }
    }

    return (
        <Nav closeMenu={onClick}
        classNames={classes}
        isActive={isActive}> 
            { children } 
        </Nav>
    );
};

const mapStateToProps = ({ header: { burgerMenuIsActive } }) => { 
    return { isActive: burgerMenuIsActive };
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeMenu: () => dispatch(burgerMenuUpdate(false))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);