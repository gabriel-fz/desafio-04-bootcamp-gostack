import React from "react";

function Comment({ comment }) {
  return (
    <div className="comment">
      <img className="avatar" src={comment.author.avatar} />
      <p>
        <span>{comment.author.name}</span>
        {comment.content}
      </p>
    </div>
  );
}

export default Comment;
