import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes } from "./components";
import { setAuth, setUser } from "./store";
import { check } from "./http/userAPI";
import "./store";
import LoadScreen from "./components/LoadScreen/LoadScreen";
function App() {
  const dispatch = useDispatch();
  const [loading, setLoadig] = useState(true);
  useEffect(async () => {
    try {
      const res = await check();
      dispatch(setAuth(true));
      dispatch(setUser({ link: "/" + res.link }));
    } catch (e) {
      console.log(e);
    }
    setLoadig(false);
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
