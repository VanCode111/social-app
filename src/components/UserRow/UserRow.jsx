import React from "react";
import "./UserRow.scss";
import PersonIcon from "../../assets/img/PersonIcon.png";

function UserRow({ name, className }) {
  return (
    <a href="#" className={"user-row " + (className ? className : "")}>
      <div href="" className="user-row__left">
        <img src={PersonIcon} alt="" className="user-row__img" />
        <p className="user-row__name">{name}</p>
      </div>
      <button className="user-row__btn">Добавить</button>
    </a>
  );
}

export default UserRow;
