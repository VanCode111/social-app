import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes } from "./components";
import { setAuth, setUser } from "./store";
import { check } from "./http/userAPI";
import "./store";
function App() {
  const dispatch = useDispatch();
  const [loading, setLoadig] = useState(true);
  useEffect(async () => {
    try {
      const res = await check();
      dispatch(setAuth(true));
      dispatch(setUser({ link: res.link }));
      setLoadig(false);
    } catch (e) {
      console.log(e);
    }
  }, []);
  if (loading) {
    return "";
  }
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
