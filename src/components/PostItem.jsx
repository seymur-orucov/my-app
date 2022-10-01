import React from "react";

const PostItem = ({ post, remove }) => {
  return (
    <div className="post__item">
      <div>
        <h3 className="post__item-title">
          {post.id}. {post.title}
        </h3>
        <p className="post__item-description">{post.description}</p>
      </div>
      <div className="post__item-actions">
        <i onClick={() => remove(post)} className="fa-solid fa-trash"></i>
      </div>
    </div>
  );
};

export default PostItem;
