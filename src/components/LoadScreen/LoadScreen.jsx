import React from "react";
import "./LoadScreen.scss";
import Logo from "../../assets/img/logo.svg";
import SyncLoader from "react-spinners/MoonLoader";

function LoadScreen() {
  return (
    <div className="load-screen">
      <SyncLoader
        color="#00acff"
        loading={true}
        size={30}
        style={{ zIndex: 10 }}
      />
    </div>
  );
}

export default LoadScreen;
