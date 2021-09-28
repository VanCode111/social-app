import React from "react";
import "./Template.scss";

function Template({ mainPage, otherCards }) {
  return (
    <div className="template">
      <div className="template__column">{mainPage}</div>
      <div className="template__column">{otherCards}</div>
    </div>
  );
}

export default Template;
