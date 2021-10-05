import React, { useState } from "react";
import "./PostCard.scss";
import TextareaAutosize from "react-textarea-autosize";
import { MessageIcon } from "../Icons";
import { PhotoIcon } from "../Icons";
import PersonIcon from "../../assets/img/PersonIcon.png";
import InputFile from "../UI/InputFile/InputFile";
import IconText from "../UI/IconText/IconText";
import PlayIcon from "../Icons/PlayIcon";
import PostPanel from "../UI/PostPanel/PostPanel";
import DeleteWrapper from "../Wrappers/DeleteWrapper/DeleteWrapper";
function PostCard({ className, addPost, onClick }) {
  const [text, setText] = useState("");
  const [photo, setPhoto] = useState(null);
  const changeText = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  };

  const deletePhoto = () => {
    setPhoto(null);
  };

  const uploadPhoto = (e) => {
    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    setPhoto({ fileUrl, file });
  };

  const createPost = () => {
    if (!onClick) {
      return;
    }
    const post = {
      text,
      photo: photo && photo.file,
    };

    onClick(post);
  };
  return (
    <div className={"post-card " + className}>
      <div className="post-card__top">
        <a href="" className="post-card__link">
          <img src={PersonIcon} alt="" className="post-card__img" />
        </a>
        <div className="post-card__content">
          <TextareaAutosize
            onChange={changeText}
            value={text}
            placeholder="Что у вас нового?"
            className="post-card__input"
            minRows="3"
          />
          {photo && (
            <DeleteWrapper clickDelete={deletePhoto}>
              <img className="post-card__photo" src={photo.fileUrl} />
            </DeleteWrapper>
          )}
        </div>
      </div>
      <PostPanel createPost={createPost} uploadPhoto={uploadPhoto} />
    </div>
  );
}

export default PostCard;
