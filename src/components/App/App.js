import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header.js';
import HomePage from '../Pages/HomePage/HomePage.js';
import './App.scss';

const App = () => {
    return (
        <Fragment>
            <Header />
            <Switch>
                <Route path='/' exact
                component={HomePage} />
            </Switch>
        </Fragment>
    );
}

export default App;