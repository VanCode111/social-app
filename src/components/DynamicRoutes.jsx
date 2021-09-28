import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import { getPageByLink } from "../http/routerAPI";
import { Main } from "../pages";

function DynamicRoutes() {
  const location = useLocation();
  console.log(location);
  const pathName = location.pathname;
  const link = pathName.slice(1);
  const [email, setEmail] = useState("");
  const [founded, setFounded] = useState(true);
  useEffect(async () => {
    try {
      const res = await getPageByLink({ link });
      setEmail(res.email);
    } catch (e) {
      setFounded(false);
    }
  }, []);
  return (
    <div className="dynamic-route">
      {(location.state || email) && <Main>{email}</Main>}
      {!founded && <NotFoundPage />}
    </div>
  );
}

export default DynamicRoutes;
