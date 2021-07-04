import React from 'react';
import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav.js';
import BurgerMenu from '../BurgerMenu/BurgerMenu.js';
import './Header.scss';

import headerLogo from './img/header_logo.svg';
import userImg from './img/user.svg';
import cartImg from './img/cart.svg';

const Header = () => {
    const isMobile = (window.innerWidth <= 830);

    const iconLinks = (
        <div>
            <Link to="/loggin" className="header__loggin">
                <img src={userImg} alt="" />
            </Link>

            <Link to="/cart" className="header__cart">
                <img src={cartImg} alt="" />
            </Link>
        </div>
    );
    
    return (
        <header className="header">
            <div className="container">
                <div className="header__body">
                    
                    <Link to="/" className="header__logo">
                        <img src={headerLogo} alt='' />
                    </Link>

                    <Nav>
                        { isMobile && iconLinks }
                    </Nav>

                    { !isMobile && iconLinks }

                    <BurgerMenu />
                </div>
            </div>
        </header>
    );
};

export default Header;