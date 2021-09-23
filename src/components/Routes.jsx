import React from "react";
import { routes, authRoutes } from "../routes";
import { Route, Switch, Redirect } from "react-router-dom";

function Routes() {
  const renderRoutes = (routes) => {
    routes = routes.map(({ path, component }) => {
      return <Route exact="true" path={path} component={component} />;
    });
    return routes;
  };
  const auth = false;
  return (
    <div class="routes">
      <Switch>
        {!auth && renderRoutes(routes)}
        {auth && renderRoutes(authRoutes)}
        <Redirect to={auth ? "/feeds" : "/"} />
      </Switch>
    </div>
  );
}

export default Routes;
