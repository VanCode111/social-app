import React from "react";
import "./Main.scss";
import { Header, PostCard, Feeds, MenuPlayer } from "../../components";
import { Route } from "react-router-dom";
import { mainRoutes } from "../../routes";

function Home() {
  return (
    <div className="main">
      <Header />
      <div className="main__content">
        <div className="container">
          <div className="main__content-inner">
            <div className="main__left-menu">
              <MenuPlayer />
            </div>
            {mainRoutes.map(({ path, component }) => {
              console.log(component);
              return <Route component={component} path={path} exact />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
