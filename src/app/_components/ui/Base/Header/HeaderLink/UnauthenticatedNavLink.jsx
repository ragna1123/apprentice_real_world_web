import React from "react";

export default function UnauthenticatedNavLink(props) {
  const { href, title } = props;
  return (
    <li className="nav-item">
      <a className="nav-link" href={href}>
        {title}
      </a>
    </li>
  );
}
