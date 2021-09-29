import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import { getPageByLink } from "../http/routerAPI";
import { Main } from "../pages";
import Profile from "../pages/Profile/Profile";

function DynamicRoutes() {
  const location = useLocation();
  console.log(location, "asfasfasf");
  const pathName = location.pathname;
  const link = pathName.slice(1);
  const [user, setUser] = useState(null);
  const [founded, setFounded] = useState(true);
  useEffect(async () => {
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
      {(location.state || user) && (
        <Main>{<Profile user={user} link={link} />}</Main>
      )}
      {!founded && <NotFoundPage />}
    </div>
  );
}

export default DynamicRoutes;
