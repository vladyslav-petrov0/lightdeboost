import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav.js';
import BurgerMenu from '../BurgerMenu/BurgerMenu.js';
import Portal from '../Portal/Portal.js';
import './Header.scss';

import headerLogo from './img/header_logo.svg';
import userImg from './img/user.svg';
import cartImg from './img/cart.svg';

const Header = () => {
    const [ isAttached, setAttached ] = useState(true);
    const header = useRef(null);

    const onScroll = () => {
        const elemHeight = parseFloat(getComputedStyle(header.current).height);

        let y = 0,
        yPrev = 0;
        
        return () => {
            y = window.pageYOffset;
            
            if (y > yPrev && y > elemHeight) {
                setAttached(false);
            } else {
                setAttached(true)
            };

            yPrev = y;
        }
    };

    useEffect(() => {
        const f = onScroll();

        window.addEventListener('scroll', f);
        return () => window.removeEventListener('scroll', f);
    }, []);

    let className = 'header';
    if (isAttached) {
        className += ' showed';
    }

    const isMobile = (window.innerWidth <= 830);
    const iconLinks = (<div>
            <Link to="/loggin" className="header__loggin">
                <img src={userImg} alt="" />
            </Link>

            <Link to="/cart" className="header__cart">
                <img src={cartImg} alt="" />
            </Link>
        </div>);
    
    return (
        <header className={className} ref={header}>
            <div className="container">
                <div className="header__body">
                    <Link to="/" className="header__logo">
                        <img src={headerLogo} alt='' />
                    </Link>

                    <Portal isOpen={isMobile}
                    to={document.getElementById('root')}>
                        <Nav>
                            { isMobile && iconLinks }
                        </Nav>
                    </Portal>

                    { !isMobile && iconLinks }
                    
                    <BurgerMenu />
                </div>
            </div>
        </header>
    );
};

export default Header;