import React from "react";
import { Header, PostCard } from "../../components";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home__content">
        <div className="container">
          <PostCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
