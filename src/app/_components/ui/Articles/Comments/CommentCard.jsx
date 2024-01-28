import React from "react";

export default function CommentCard(props) {
  const { commentData } = props;
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{commentData.body}</p>
      </div>
      <div className="card-footer">
        <a href="/profile/author" className="comment-author">
          <img src={commentData.author.image} className="comment-author-img" />
        </a>
        &nbsp;
        <a href="/profile/jacob-schmidt" className="comment-author">
          {commentData.author.username}
        </a>
        <span className="date-posted">{commentData.createdAt}</span>
      </div>
    </div>
  );
}
