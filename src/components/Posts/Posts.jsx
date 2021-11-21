import React from "react";
import "./Posts.scss";
import PostWrapper from "./PostWrapper/PostWrapper";
function Posts({ className, posts, deletePost, ownPage }) {
  return (
    <div className={"posts " + className}>
      {posts.map((post, index) => {
        return (
          <PostWrapper
            ownPage={ownPage}
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
