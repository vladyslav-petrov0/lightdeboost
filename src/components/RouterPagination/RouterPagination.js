import React from "react";
import { Redirect } from "react-router-dom";

const RouterPagination = ({ active, children }) => {
  if (!children[active]) {
    return null;
  }

  return children[active];
};

export default RouterPagination;
