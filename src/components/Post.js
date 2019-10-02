import React from "react";
import Comment from "./Comment";

function Post({ post }) {
  return (
    <div className="post">
      <div className="post-header">
        <img className="avatar" src={post.author.avatar} />
        <div className="details">
          <span>{post.author.name}</span>
          <span>{post.date}</span>
        </div>
      </div>
      <p className="post-content">{post.content}</p>
      <div className="post-comments">
        <div className="divider" />
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default Post;
