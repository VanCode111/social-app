import React from "react";
import "./Header.scss";
import mainLogo from "../../assets/img/logo.svg";
import { SearchBar, MenuTabs } from "../index";
import {
  HomeIcon,
  ComunityIcon,
  BusyIcon,
  BellIcon,
  MessageIcon,
  PersonIcon,
} from "../Icons";

const IconTabs = [
  {
    path: "/",
    icon: <HomeIcon width="28" height="28" />,
  },
  {
    path: "/comunity",
    icon: <ComunityIcon width="28" height="28" />,
  },
  {
    path: "/comunitys",
    icon: <BusyIcon width="28" height="28" />,
  },
  {
    path: "/comunitys",
    icon: <BellIcon width="28" height="28" />,
  },
  {
    path: "/comunitys",
    icon: <MessageIcon width="28" height="28" />,
  },
  {
    path: "/comunitys",
    icon: <PersonIcon width="28" height="28" />,
  },
];

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a href="#" className="header__logo">
            <img src={mainLogo} alt="logo" className="header__logo-img" />
          </a>
          <MenuTabs IconTabs={IconTabs} className="header__menu" />

          <div className="header__search-box">
            <SearchBar placeholder="Search for anything (Jobs)" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
