import React from "react";
import { useLocation, Link } from "react-router-dom";

import Container from "../Container/Container";

import { divideUrl } from "../../utils/funcs/divideUrl";
import { routeMatches } from "../../mocks/routeMatches";

import "./Breadcrumbs.scss";

const urlsToBreadcrumbs = (urls) => {
  return urls?.map((el) => ({ to: el, name: routeMatches[el] }));
};

const Breadcrumbs = () => {
  const location = useLocation();

  const breadcrumbs = urlsToBreadcrumbs(divideUrl(location.pathname));
  const root = { name: routeMatches["/"], to: "/" };

  if (!breadcrumbs) {
    return null;
  }

  return (
    <Container>
      <div className="Breadcrumbs">
        <Link to={root.to} className="BreadcrumbsItem BreadcrumbsItem--root">
          {root.name}
        </Link>
        {breadcrumbs.map(({ name, to }) => (
          <Link key={name} to={to} className="BreadcrumbsItem">
            {name}
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Breadcrumbs;
