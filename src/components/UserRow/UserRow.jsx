import React from "react";
import "./UserRow.scss";
import PersonIcon from "../../assets/img/PersonIcon.png";
import { Link } from "react-router-dom";

function UserRow({ name, className, path, profile }) {
  return (
    <Link
      to={{ pathname: path ? path : "", state: { type: "user", profile } }}
      className={"user-row " + (className ? className : "")}
    >
      <div href="" className="user-row__left">
        <img src={PersonIcon} alt="" className="user-row__img" />
        <p className="user-row__name">{name}</p>
      </div>
      <button className="user-row__btn">Добавить</button>
    </Link>
  );
}

export default UserRow;
