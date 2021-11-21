import React from "react";
import { routes, authRoutes } from "../routes";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import DynamicRoutes from "./DynamicRoutes";
import Main from "../pages/Main/Main";

function Routes() {
  const isAuth = useSelector(({ auth }) => auth.isAuth);
  const location = useLocation();
  const pathName = location.pathname;
  const renderRoutes = (routes) => {
    routes = routes.map(({ path, component, layout = null }, index) => {
      if (layout) {
        return (
          <Route
            key={index}
            exact={true}
            path={path}
            render={() =>
              React.createElement(layout, null, React.createElement(component))
            }
          />
        );
      }
      return (
        <Route key={index} exact={true} path={path} component={component} />
      );
    });
    return routes;
  };
  const getRedirect = (redirectTo, routes, location) => {
    let redirect;
    routes.forEach(({ path }) => {
      if (path == location) {
        redirect = <Redirect to={redirectTo} />;
      }
    });
    return redirect;
  };
  const redirect = getRedirect(
    isAuth ? "/profile" : "/",
    [...routes, ...authRoutes],
    pathName
  );
  console.log(redirect);
  return (
    <div className="routes">
      <Switch>
        {!isAuth && renderRoutes(routes)}
        {isAuth && renderRoutes(authRoutes)}

        {redirect ? (
          redirect
        ) : (
          <Route path={pathName} component={DynamicRoutes} />
        )}
      </Switch>
    </div>
  );
}

export default Routes;
