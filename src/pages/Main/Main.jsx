import React from "react";
import "./Main.scss";
import { Header } from "../../components";
import { Route } from "react-router-dom";
import { mainRoutes } from "../../routes";
import { useSelector } from "react-redux";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
const audio = new Audio();
function Home({ children }) {
  const { isAuth, user } = useSelector(({ auth }) => auth);
  return (
    <div className="main">
      <Header isAuth={isAuth} user={user} />
      <div className="main__content">
        <div className="container">
          <div className="main__content-inner">
            <div className="main__left-menu">
              <LeftMenu user={user} audio={audio} />
            </div>
            {children}
            {mainRoutes.map(({ path, component }, index) => {
              return (
                <Route
                  key={index}
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
