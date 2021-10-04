import React from "react";
import "./Posts.scss";
import { Post } from "../../components";
import { CSSTransition } from "react-transition-group";
import OwnPost from "../Post/OwnPost/OwnPost";

function Posts({ className, posts, deletePost }) {
  return (
    <div className={"posts " + className}>
      {posts.map((post, index) => {
        return (
          <CSSTransition
            in={!post.deleted}
            timeout={500}
            classNames="example"
            unmountOnExit
          >
            <Post
              className={"posts__post " + (post.deleted ? "deleted" : "")}
              deletePost={() => deletePost(index, post.post._id)}
              post={post.post}
              profile={post.profile}
              authorLink={post.authorLink}
            />
          </CSSTransition>
        );
      })}
    </div>
  );
}

export default Posts;
