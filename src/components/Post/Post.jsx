import React from "react";
import "./Post.scss";
import PersonIcon from "../../assets/img/PersonIcon.png";
import { BellIcon } from "../Icons";

function Post({ className, text }) {
  return (
    <div className={"post " + className}>
      <div className="post__header">
        <div className="post__header-left">
          <a href="" className="post__icon-link">
            <img src={PersonIcon} alt="" className="post__icon" />
          </a>
          <p className="post__author-name">Ivan Eliseev</p>
        </div>
        <button className="post__setting">
          <BellIcon />
        </button>
      </div>
      <div className="post__content">
        <p className="post__text">{text}</p>
      </div>
    </div>
  );
}

export default Post;
