import { routeMatches } from "../../mocks/routeMatches";
import { useLocation } from "react-router-dom";
import { urlRegExp } from "../../mocks/regExp";

const desctructureRoute = (route) => route.match(urlRegExp);
const matchRouteParts = (routeParts) => {
  return routeParts?.map((part) => ({ to: part, name: routeMatches[part] }));
};
const root = { name: routeMatches["/"], to: "/" };

export const useBreadcrumbs = () => {
  const location = useLocation();

  const routeParts = desctructureRoute(location.pathname);
  const breadcrumbs = matchRouteParts(routeParts);
  breadcrumbs.unshift(root);

  return breadcrumbs.length > 1 ? breadcrumbs : null;
};
