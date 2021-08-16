import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../Header/Header.js";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Footer from "../Footer/Footer";

import HomePage from "../Pages/HomePage/HomePage.js";
import ShopPage from "../Pages/ShopPage/ShopPage";

import "./App.scss";

const App = () => {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shop" exact>
          <ShopPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
