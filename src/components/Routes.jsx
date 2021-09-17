import React from "react";
import { routes } from "../routes";
import { Route, Switch, Redirect } from "react-router-dom";

function Routes() {
  return (
    <div class="routes">
      <Switch>
        {routes.map(({ path, component }) => {
          return <Route exact="true" path={path} component={component} />;
        })}
        <Redirect to="/feeds" />
      </Switch>
    </div>
  );
}

export default Routes;
