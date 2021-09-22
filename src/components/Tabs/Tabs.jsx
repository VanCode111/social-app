import React, { useState } from "react";
import "./Tabs.scss";

function Tabs({ children, tabs }) {
  children = Array.isArray(children) ? children : [children];

  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="tabs">
      <div className="tabs__top">
        {tabs.map(({ name, id }) => {
          return (
            <a
              href="#"
              className={"tabs__tab " + (activeTab === id ? "active" : "")}
              onClick={() => setActiveTab(id)}
            >
              {name}
            </a>
          );
        })}
      </div>
      {children.filter((children) => {
        if (children.props.id === activeTab) {
          return children;
        }
      })}
    </div>
  );
}

export default Tabs;
