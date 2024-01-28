import React from "react";

export default function PageLink(props) {
  const {pageNumber, activePage, href} = props;
  return (
    <li className={activePage ? "page-item active" : "page-item"}>
      <a className="page-link" href={href}>
        {pageNumber}
      </a>
    </li>
  );
}
