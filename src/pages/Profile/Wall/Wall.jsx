import React, { useEffect, useState } from "react";
import "./Wall.scss";
import PropTypes from "prop-types";
import PostCreator from "../../../components/PostCreator/PostCreator";
import SyncLoader from "react-spinners/MoonLoader";
import { PostCard } from "../../../components";
import { Posts } from "../../../components";
import { getProfilePosts } from "../../../http/ProfileAPI";
import { createPost, deletePost } from "../../../http/ProfileAPI";

function Wall({ userId, postCreator, className }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const postCreate = async (post) => {
    const formData = new FormData();
    formData.append("text", post.text);
    formData.append("photo", post.photo);
    formData.append("userId", userId);
    try {
      const res = await createPost(formData);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(posts);
  const deletePostHandle = async (index, postId) => {
    console.log(postId);
    try {
      const res = await deletePost({ postId });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const getPosts = async (userId) => {
    setLoading(true);
    try {
      const posts = await getProfilePosts({ userId });
      setPosts(posts);
      setLoading(false);
      console.log(posts);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getPosts(userId);
  }, [userId]);

  return (
    <div className={className ? className : ""}>
      {postCreator && <PostCard onClick={postCreate} />}
      {loading ? (
        <div className="post-loader">
          <SyncLoader color="#00acff" loading={loading} size={50} />
        </div>
      ) : (
        <Posts deletePost={deletePostHandle} posts={posts} />
      )}
    </div>
  );
}

Wall.propTypes = {
  className: PropTypes.string,
  userId: PropTypes.string.isRequired,
  postCreator: PropTypes.bool.isRequired,
};

export default Wall;
