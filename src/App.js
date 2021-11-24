import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Routes } from "./components";
import { setAuth, setUser } from "./store";
import { check } from "./http/userAPI";
import { connectToSocket } from "./sockets";
import LoadScreen from "./components/LoadScreen/LoadScreen";
import "./store";
import { io } from "socket.io-client";
function App() {
  const dispatch = useDispatch();
  const socket = useRef();
  const [loading, setLoadig] = useState(true);
  useEffect(async () => {
    try {
      const res = await check();
      dispatch(setAuth(true));
      dispatch(setUser({ link: "/" + res.link, profile: res.profile }));
      connectToSocket(res.profile.user);
    } catch (e) {
      console.log(e);
    }
    setLoadig(false);
  }, []);
  if (loading) {
    return <LoadScreen />;
  }
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
