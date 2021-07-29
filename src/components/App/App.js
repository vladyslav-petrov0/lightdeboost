import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../Header/Header.js";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Footer from "../Footer/Footer";
import OverlayBackground from "../OverlayBackground/OverlayBackground.js";

import HomePage from "../Pages/HomePage/HomePage.js";
import Shop from "../Pages/Shop/Shop";

import "./App.scss";

const App = () => {
  return (
    <>
      <Header />
      <OverlayBackground />
      <Breadcrumbs />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shop" exact>
          <Shop />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
