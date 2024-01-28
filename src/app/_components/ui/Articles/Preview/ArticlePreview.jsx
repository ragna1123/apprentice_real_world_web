import Link from "next/link";
import React from "react";

export default function ArticlePreview(props) {
  const { article_id, username, date, likes, title, about } = props;

  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href="/profile/eric-simons">
          <img src="http://i.imgur.com/Qr71crq.jpg" />
        </a>
        <div className="info">
          <a href="/profile/eric-simons" className="author">
            {username}
          </a>
          <span className="date">{date}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> {likes}
        </button>
      </div>
      <Link href={`/article/` + article_id} className="preview-link">
        <h1>{title}</h1>
        <p>{about}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          <li className="tag-default tag-pill tag-outline">realworld</li>
          <li className="tag-default tag-pill tag-outline">implementations</li>
        </ul>
      </Link>
    </div>
  );
}
