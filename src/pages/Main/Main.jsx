import React from "react";
import "./Main.scss";
import { Header, PostCard, Feeds, MenuPlayer } from "../../components";
import { Route } from "react-router-dom";
import { mainRoutes } from "../../routes";
import { useSelector } from "react-redux";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
const audio = new Audio();
function Home() {
  return (
    <div className="main">
      <Header />
      <div className="main__content">
        <div className="container">
          <div className="main__content-inner">
            <div className="main__left-menu">
              <LeftMenu audio={audio} />
            </div>
            {mainRoutes.map(({ path, component }) => {
              console.log(component);
              return (
                <Route
                  audio={audio}
                  path={path}
                  render={(routeProps) =>
                    React.createElement(component, {
                      audio: audio,
                      ...routeProps,
                    })
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
