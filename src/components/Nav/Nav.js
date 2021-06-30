import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

const Nav = () => {
    return (
        <nav>
            <ul className='nav-list'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;