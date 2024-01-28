import React from "react";

export default function AuthenticatedNavLink(props) {
  const { href, title, iconClassName } = props;
  return (
    <li className="nav-item">
      <a className="nav-link" href={href}>
        <i className={iconClassName}></i>&nbsp;{title}
      </a>
    </li>
  );
}
