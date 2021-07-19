import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header.js';
import OverlayBackground from '../OverlayBackground/OverlayBackground.js';
import HomePage from '../Pages/HomePage/HomePage.js';

import './App.scss';

const App = () => {
    return (
        <>
            <Header />
            <OverlayBackground />
            <Switch>
                <Route path='/' exact
                component={HomePage} />
            </Switch>
        </>
    );
};

export default App;