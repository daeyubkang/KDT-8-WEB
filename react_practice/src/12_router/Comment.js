import React from "react";
import { useOutletContext } from "react-router-dom";

const Comment = () => {
  const { comment } = useOutletContext();
  console.log(comment);
  return (
    <div>
      {comment.map((value, idx) => {
        return <div key={idx}>{value.text}</div>;
      })}
    </div>
  );
};

export default Comment;
