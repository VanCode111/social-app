import React from "react";
import { routes } from "../routes";
import { Route } from "react-router-dom";

function Routes() {
  return (
    <div class="routes">
      {routes.map(({ path, component }) => {
        return <Route exact="true" path={path} component={component} />;
      })}
    </div>
  );
}

export default Routes;
