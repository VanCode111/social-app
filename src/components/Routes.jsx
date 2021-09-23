import React from "react";
import { routes, authRoutes } from "../routes";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function Routes() {
  const isAuth = useSelector(({ auth }) => auth.isAuth);
  const renderRoutes = (routes) => {
    routes = routes.map(({ path, component }, index) => {
      return (
        <Route key={index} exact={true} path={path} component={component} />
      );
    });
    return routes;
  };
  return (
    <div className="routes">
      <Switch>
        {!isAuth && renderRoutes(routes)}
        {isAuth && renderRoutes(authRoutes)}
        <Redirect to={isAuth ? "/feeds" : "/"} />
      </Switch>
    </div>
  );
}

export default Routes;
