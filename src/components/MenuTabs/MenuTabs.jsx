import React, { useState, useEffect } from "react";
import { getMessagesSocket } from "../../sockets";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Label from "../UI/Label/Label";
import {
  HomeIcon,
  ComunityIcon,
  BusyIcon,
  BellIcon,
  MessageIcon,
  PersonIcon,
} from "../Icons";
import "./MenuTabs.scss";

function MenuTabs({ IconTabs, className }) {
  const location = useLocation();
  const { notReaded } = useSelector((state) => state.conversations);
  const pathName = location.pathname;
  //const [notReaded, setNotReaded] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const setLabel = (icon, path) => {
    switch (path) {
      case "/messenger":
        return (
          <Label text={notReaded} visible={notReaded > 0}>
            {icon}
          </Label>
        );
        break;
    }
    return icon;
  };

  return (
    <ul className={"menu-tabs " + className}>
      {IconTabs.map(({ icon, path, state }, index) => {
        return (
          <li className="menu-tabs__tab" key={index}>
            <Link
              to={{
                pathname: path,
                state: state || null,
              }}
              onClick={() => setActiveTab(index)}
              className={
                "menu-tabs__tab-link " +
                (pathName.includes(path) ? "active" : "")
              }
            >
              {setLabel(icon, path)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default MenuTabs;
