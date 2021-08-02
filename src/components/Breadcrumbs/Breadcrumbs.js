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
    <div className="Breadcrumbs">
      <Container>
        <div className="BreadcrumbsBody">
          <Link to={root.to} className="BreadcrumbsItem BreadcrumbsItem--root">
            {root.name}
          </Link>
          {breadcrumbs.map(
            ({ name, to }) =>
              name && (
                <Link key={name} to={to} className="BreadcrumbsItem">
                  {name}
                </Link>
              )
          )}
        </div>
      </Container>
    </div>
  );
};

export default Breadcrumbs;
