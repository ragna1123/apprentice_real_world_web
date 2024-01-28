import React from "react";

export default function Tag(props) {
  const { tagName, href } = props;
  return (
    <a href={href} className="tag-pill tag-default">
      {tagName}
    </a>
  );
}
