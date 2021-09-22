import React from "react";
import "./ProgressBar.scss";

function ProgressBar({ current, end, className }) {
  const width = current && end ? (current / end) * 100 : 0;
  return (
    <div className={"progress-bar " + (className ? className : "")}>
      <div style={{ width: `${width}%` }} className="progress-bar__check"></div>
    </div>
  );
}

export default ProgressBar;
