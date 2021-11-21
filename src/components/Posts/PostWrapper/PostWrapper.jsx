import React, { useState } from "react";
import IconText from "../../UI/IconText/IconText";
import CellButton from "../../UI/CellButton/CellButton";
import "./PostWrapper.scss";
import { MdDelete } from "react-icons/md";
import "./PostWrapper";
import PropTypes from "prop-types";
import Post from "../../Post/Post";
import TextArea from "../../UI/TextArea/TextArea";
import DeleteWrapper from "../../Wrappers/DeleteWrapper/DeleteWrapper";
import PostPanel from "../../UI/PostPanel/PostPanel";

function PostWrapper({
  className,
  profile,
  authorLink,
  post,
  deletePost,
  ownPage,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const text = post.text;
  const postPhoto = post.photo;

  const [photo, setPhoto] = useState(postPhoto);
  const [textPost, setTextPost] = useState(text);
  const [isDel, setIsDel] = useState(false);
  const editPost = () => {
    setIsEdit(true);
  };
  const changeText = (e) => {
    setTextPost(e.target.value);
  };

  const deletePostHandle = () => {
    setIsEdit(false);
    setIsDel(true);
  };
  const deletePhoto = () => {
    setPhoto(null);
  };
  const wrapItemEdit = (item, onClick) => {
    return isEdit ? (
      <DeleteWrapper clickDelete={onClick}>{item}</DeleteWrapper>
    ) : (
      item
    );
  };
  return (
    <div
      className={
        "post-wrapper " +
        (className && className) +
        " " +
        (isDel ? "deleted" : "")
      }
    >
      {
        <Post
          ownPage={ownPage}
          settings={
            <>
              {ownPage && (
                <CellButton onClick={editPost}>
                  <IconText
                    icon={<MdDelete color="gray" size="1.5em" />}
                    text="Редактировать"
                  />
                </CellButton>
              )}
              {ownPage && (
                <CellButton onClick={deletePostHandle}>
                  <IconText
                    icon={<MdDelete color="gray" size="1.5em" />}
                    text="Удалить"
                  />
                </CellButton>
              )}
            </>
          }
          post={post}
          profile={profile}
          authorLink={authorLink}
          bottom={isEdit && <PostPanel createPost={() => setIsEdit(false)} />}
        >
          {isEdit ? (
            <TextArea
              onChange={changeText}
              value={textPost}
              placeholder="Что у вас нового?"
            />
          ) : (
            <p className="post-wrapper__text">{textPost}</p>
          )}
          {photo &&
            wrapItemEdit(
              <img src={photo} alt="photo post" className="post__img" />,
              deletePhoto
            )}
        </Post>
      }
    </div>
  );
}

export default PostWrapper;
