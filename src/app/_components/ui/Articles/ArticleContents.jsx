import React from "react";

export default function ArticleContents(props) {
  const { articleData } = props;
  return (
    <div className="row article-content">
      <div className="col-md-12">
        <p>{articleData.description}</p>
        <h2 id="introducing-ionic">{articleData.title}</h2>
        <p>{articleData.body}</p>
        <ul className="tag-list">
          <li className="tag-default tag-pill tag-outline">realworld</li>
          <li className="tag-default tag-pill tag-outline">implementations</li>
        </ul>
      </div>
    </div>
  );
}
