import React from "react";
import PostCard from "../PostCard/PostCard";
import { createPost } from "../../http/ProfileAPI";
import { Posts } from "..";

function PostCreator({
  userId,
  className,
  posts,
  postCreator,
  loading,
  loadingSpinner,
}) {
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
      {loading ? (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
        >
          {loadingSpinner}
        </div>
      ) : (
        <Posts posts={posts} />
      )}
    </div>
  );
}

export default PostCreator;
