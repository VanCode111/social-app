import React from "react";
import PostCard from "../PostCard/PostCard";
import { createPost } from "../../http/ProfileAPI";
import { Posts } from "..";

function PostCreator({ userId, className, posts, postCreator }) {
  const postCreate = async (post) => {
    try {
      const res = await createPost({ userId, text: post.text });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(posts);
  return (
    <div className={className ? className : ""}>
      {postCreator && <PostCard onClick={postCreate} />}
      <Posts posts={posts} />
    </div>
  );
}

export default PostCreator;
