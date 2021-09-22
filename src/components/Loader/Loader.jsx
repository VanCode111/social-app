import React from "react";
import "./Loader.scss";

function Loader({ className }) {
  return <div className={"loader " + className}></div>;
}

export default Loader;
