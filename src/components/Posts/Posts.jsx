import React from "react";
import "./Posts.scss";
import { Post } from "../../components";
import { CSSTransition } from "react-transition-group";
import OwnPost from "../Post/OwnPost/OwnPost";
import { MdDelete } from "react-icons/md";

import IconText from "../UI/IconText/IconText";
import CellButton from "../UI/CellButton/CellButton";
import PostWrapper from "./PostWrapper/PostWrapper";
function Posts({ className, posts, deletePost }) {
  return (
    <div className={"posts " + className}>
      {posts.map((post, index) => {
        return (
          <PostWrapper
            deletePost={() => deletePost(index, post.post._id)}
            post={post.post}
            className="posts__post"
            index={index}
            profile={post.profile}
            authorLink={post.authorLink}
          />
        );
      })}
    </div>
  );
}

export default Posts;
