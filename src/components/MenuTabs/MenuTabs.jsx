import React, { useState } from "react";
import { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import "./MenuTabs.scss";

function MenuTabs({ IconTabs, className }) {
  const location = useLocation();
  const pathName = location.pathname;
  const [activeTab, setActiveTab] = useState(0);
  return (
    <ul className={"menu-tabs " + className}>
      {IconTabs.map(({ icon, path }, index) => {
        return (
          <li className="menu-tabs__tab" key={index}>
            <Link
              to={path}
              onClick={() => setActiveTab(index)}
              href="#"
              className={
                "menu-tabs__tab-link " + (pathName === path ? "active" : "")
              }
            >
              {icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default MenuTabs;
