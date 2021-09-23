import React from "react";
import { routes, authRoutes } from "../routes";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function Routes() {
  const isAuth = useSelector((store) => store.isAuth);
  console.log(isAuth);
  const renderRoutes = (routes) => {
    routes = routes.map(({ path, component }) => {
      return <Route exact="true" path={path} component={component} />;
    });
    return routes;
  };
  return (
    <div class="routes">
      <Switch>
        {!isAuth && renderRoutes(routes)}
        {isAuth && renderRoutes(authRoutes)}
        <Redirect to={isAuth ? "/feeds" : "/"} />
      </Switch>
    </div>
  );
}

export default Routes;
