import React, { useEffect, useState } from "react";
import "./Wall.scss";
import PropTypes from "prop-types";
import PostCreator from "../../../components/PostCreator/PostCreator";
import SyncLoader from "react-spinners/MoonLoader";
import { PostCard } from "../../../components";
import { Posts } from "../../../components";
import { getProfilePosts } from "../../../http/ProfileAPI";
import { createPost } from "../../../http/ProfileAPI";

function Wall({ userId, postCreator, className }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const postCreate = async (post) => {
    try {
      const res = await createPost({ userId, text: post.text });
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
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getPosts(userId);
  }, []);

  return (
    <div className={className ? className : ""}>
      {postCreator && <PostCard onClick={postCreate} />}
      {loading ? (
        <div className="post-loader">
          <SyncLoader color="#00acff" loading={loading} size={50} />
        </div>
      ) : (
        <Posts posts={posts} />
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
