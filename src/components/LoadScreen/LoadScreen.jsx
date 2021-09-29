import React from "react";
import "./LoadScreen.scss";
import Logo from "../../assets/img/logo.svg";

function LoadScreen() {
  return (
    <div className="load-screen">
      <img src={Logo} alt="" className="load-screen__logo" />
    </div>
  );
}

export default LoadScreen;
