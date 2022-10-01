import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", description: "" });
  const [isDisabled, setIsDisabled] = useState(true);

  const createPost = (e) => {
    e.preventDefault();
    const newPost = { ...post, id: Date.now() };

    create(newPost);
    setPost({ title: "", description: "" });
  };

  const setButtonDisabled = (e) => {
    setIsDisabled(e.target.value.length === 0);
  };

  return (
    <div className="form">
      <h1 className="title">💡 Add new todo</h1>
      <form>
        <MyInput
          onChange={(e) => {
            setPost({ ...post, title: e.target.value });
            setButtonDisabled(e);
          }}
          value={post.title}
          type="text"
          placeholder="Title"
        />
        <MyInput
          onChange={(e) => {
            setPost({ ...post, description: e.target.value });
            setButtonDisabled(e);
          }}
          value={post.description}
          type="text"
          placeholder="Description"
        />
        <MyButton disabled={isDisabled} onClick={createPost}>
          ADD
        </MyButton>
      </form>
    </div>
  );
};

export default PostForm;
