import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, remove }) => {
  return (
    <div className="post__list">
      <h1 className="title">📒 Todo list</h1>

      {posts.length ? (
        posts.map((post, index) => (
          <PostItem remove={remove} post={post} key={post.id} />
        ))
      ) : (
        <h2
          style={{
            textAlign: "center",
            fontWeight: "500",
            marginBottom: "6em",
          }}
        >
          No task is added 🤔
        </h2>
      )}
    </div>
  );
};

export default PostList;
