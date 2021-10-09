import React from "react";
import InputFile from "../InputFile/InputFile";
import IconText from "../IconText/IconText";
import { MessageIcon } from "../../Icons";
import PlayIcon from "../../Icons/PlayIcon";
import { PhotoIcon } from "../../Icons";
import "./PostPanel.scss";

function PostPanel({ uploadPhoto, createPost }) {
  return (
    <div className="post-card__bottom">
      <ul className="post-card__list">
        <li className="post-card__item">
          <InputFile selectFile={uploadPhoto}>
            <IconText text="Фото" icon={<PhotoIcon />} />
          </InputFile>
        </li>
      </ul>
      <button onClick={createPost} className="post-card__btn">
        <MessageIcon />
      </button>
    </div>
  );
}

export default PostPanel;
