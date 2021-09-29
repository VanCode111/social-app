import React, { useState, useEffect } from "react";
import { PostCard, Posts } from "../../components";
import PeopleMayKnow from "../PeopleMayKnow/PeopleMayKnow";
import "./Feeds.scss";

function Feeds({ className }) {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts((prev) => [...prev, post]);
  };
  useEffect(() => {
    document.title = "Новости";
  }, []);
  return (
    <div className={"feeds"}>
      <div className="feeds__column">
        <PostCard className="main__post-card" addPost={addPost} />
        <Posts posts={posts} />
      </div>
      <div className="feeds__column">
        <PeopleMayKnow />
      </div>
    </div>
  );
}

export default Feeds;
