import React from "react";
import "./Posts.scss";
import { Post } from "../../components";

function Posts({ className, posts }) {
  console.log(posts);
  return (
    <div className={"posts " + className}>
      {posts.map(({ text, authorLink, profile }) => {
        return (
          <Post
            text={text}
            profile={profile}
            authorLink={authorLink}
            className="posts__post"
          />
        );
      })}
    </div>
  );
}

export default Posts;
