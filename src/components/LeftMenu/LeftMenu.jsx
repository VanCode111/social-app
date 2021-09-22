import React from "react";
import { useSelector } from "react-redux";
import { MenuPlayer } from "..";
function LeftMenu({ audio }) {
  const currentMusic = useSelector((store) => store.currentMusic);
  return (
    <div className="left-menu">
      {currentMusic && <MenuPlayer currentMusic={currentMusic} audio={audio} />}
    </div>
  );
}

export default LeftMenu;
