import React from "react";
import "./Label.scss";

interface ILabel {
  visible?: boolean;
  text: string;
}

const Label: React.FC<ILabel> = ({ children, text, visible }) => {
  return (
    <div className="label">
      {children}
      <div
        className={"label__content" + " " + (visible === false ? "hidden" : "")}
      >
        {text}
      </div>
    </div>
  );
};

export default Label;
