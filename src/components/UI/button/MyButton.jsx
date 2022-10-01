import React from "react";
import classes from "./MyButton.module.css";

const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.button__submit}>
      {children}
    </button>
  );
};

export default MyButton;
