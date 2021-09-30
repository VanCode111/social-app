import React from "react";
import "./UserRow.scss";
import PersonIcon from "../../assets/img/PersonIcon.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function UserRow({ name, className, path, profile, img, clickHandler }) {
  return (
    <div href="" className="user-row__left">
      <img
        onClick={clickHandler}
        src={img ? img : ""}
        alt=""
        className="user-row__img"
      />
      <p onClick={clickHandler} className="user-row__name">
        {name}
      </p>
    </div>
  );
}

UserRow.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  img: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default UserRow;
