import React from "react";
import "./Posts.scss";
import { Post } from "../../components";

function Posts({ className, posts }) {
  return (
    <div className={"posts " + className}>
      {posts.map((post) => {
        return <Post text={post.text} className="posts__post" />;
      })}
    </div>
  );
}

export default Posts;
