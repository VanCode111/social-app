import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MenuPlayer } from "..";
function LeftMenu({ audio, user }) {
  const currentMusic = useSelector(({ tracks }) => tracks.currentMusic);
  return (
    <div className="left-menu">
      <Link to={{ pathname: user.link, state: { type: "user" } }}>
        Моя страница
      </Link>
      {currentMusic && <MenuPlayer currentMusic={currentMusic} audio={audio} />}
    </div>
  );
}

export default LeftMenu;
