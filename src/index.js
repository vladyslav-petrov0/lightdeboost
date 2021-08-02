import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { ServiceContext } from "./components/context/ServiceContext.js";
import LightBoostService from "./services/LightBoost.js";

import { Provider } from "react-redux";
import store from "./store.js";

import ErrorBoundry from "./components/ErrorBoundry/ErrorBoundry.js";
import App from "./components/App/App.js";

const service = new LightBoostService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ServiceContext.Provider value={{ service }}>
        <Router>
          <App />
        </Router>
      </ServiceContext.Provider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
