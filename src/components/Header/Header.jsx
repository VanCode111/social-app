import React from "react";
import "./Header.scss";
import mainLogo from "../../assets/img/logo2.svg";
import { SearchBar, MenuTabs } from "../index";
import SearchHelper from "../SearchHelper/SearchHelper";
import {
  HomeIcon,
  ComunityIcon,
  BusyIcon,
  BellIcon,
  MessageIcon,
  PersonIcon,
} from "../Icons";

function Header({ isAuth, user }) {
  const IconTabs = [
    {
      path: "/feeds",
      icon: <HomeIcon width="28" height="28" />,
    },
    {
      path: "/profile",
      icon: <ComunityIcon width="28" height="28" />,
    },
    {
      path: "/comunity",
      icon: <BusyIcon width="28" height="28" />,
    },
    {
      path: "/comunitys",
      icon: <BellIcon width="28" height="28" />,
    },
    {
      path: "/messenger",
      icon: <MessageIcon width="28" height="28" />,
    },
    {
      path: user && user.link,
      state: { type: "user", profile: user?.profile },
      icon: <PersonIcon width="28" height="28" />,
    },
  ];
  return (
    <header className="header">
      <div className="container">
        <div className={"header__inner " + (!isAuth ? "no-auth" : "")}>
          <a href="#" className="header__logo">
            <img src={mainLogo} alt="logo" className="header__logo-img" />
          </a>
          {isAuth && <MenuTabs IconTabs={IconTabs} className="header__menu" />}

          <div className={"header__search-box " + (!isAuth ? "no-auth" : "")}>
            <SearchHelper />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
