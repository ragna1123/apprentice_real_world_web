import React from "react";
import Tag from "./Tag/Tag";

export default function TagList() {
  const tagsList = [
    "programming",
    "javascript",
    "emberjs",
    "angularjs",
    "react",
    "mean",
    "node",
    "rails",
  ];

  return (
    <div className="sidebar">
      <p>Popular Tags</p>

      <div className="tag-list">
        {tagsList.map((ele, key) => (
          <Tag tagName={ele} href={"#" + ele} key={ele} />
        ))}
      </div>
    </div>
  );
}
