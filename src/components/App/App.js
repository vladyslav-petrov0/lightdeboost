import React from "react";
import { Route, Switch } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop.js";

import Header from "../Header/Header.js";
import Footer from "../Footer/Footer";

import HomePage from "../Pages/Home/Home.js";
import ShopPage from "../Pages/Side/Shop/Shop";
import AboutPage from "../Pages/Side/About/About";
import ErrorPage from "../Pages/Error/Error.js";
import ProductPage from "../Pages/Product/Product.js";

import "./App.scss";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/shop" exact>
          <ShopPage />
        </Route>

        <Route path="/shop/product/:id" exact>
          <ProductPage />
        </Route>

        <Route path="/about" exact>
          <AboutPage />
        </Route>

        <ErrorPage />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
