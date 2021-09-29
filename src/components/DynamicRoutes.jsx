import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import { getPageByLink } from "../http/routerAPI";
import { Main } from "../pages";
import Profile from "../pages/Profile/Profile";
import LoadScreen from "./LoadScreen/LoadScreen";

function DynamicRoutes() {
  const override = {
    display: "block",
    margin: "0 auto",
  };
  const location = useLocation();
  console.log(location.state);
  const pathName = location.pathname;
  const link = pathName.slice(1);
  const [user, setUser] = useState(null);
  const [founded, setFounded] = useState(true);
  useEffect(async () => {
    if (location.state) {
      setUser(location.state.profile);
      console.log("asfasf", location.state);
      return;
    }
    setUser(null);
    try {
      const res = await getPageByLink({ link });
      setUser(res);
    } catch (e) {
      setFounded(false);
    }
  }, [location]);
  return (
    <div className="dynamic-route">
      {location.state || user ? (
        <Main>{<Profile user={user} link={link} />}</Main>
      ) : (
        <LoadScreen />
      )}
      {!founded && <NotFoundPage />}
    </div>
  );
}

export default DynamicRoutes;
