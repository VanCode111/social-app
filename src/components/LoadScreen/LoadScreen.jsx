import React from "react";
import "./LoadScreen.scss";
import Logo from "../../assets/img/logo.svg";
import ClipLoader from "react-spinners/HashLoader";

function LoadScreen() {
  return (
    <div className="load-screen">
      <ClipLoader color={"#00acff"} loading={true} size={100} />
    </div>
  );
}

export default LoadScreen;
