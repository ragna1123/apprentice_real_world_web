"use client";
import React, { useEffect, useState } from "react";
import UnauthenticatedNavLink from "./HeaderLink/UnauthenticatedNavLink";
import AuthenticatedNavLink from "./HeaderLink/AuthenticatedNavLink";

export default function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("token");
    if (storedUser) {
      setUser(true);
    }
  }, []);
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          conduit
        </a>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <a className="nav-link active" href="/">
              Home
            </a>
          </li>
          {!user && (
            <>
              <UnauthenticatedNavLink href="/login" title="Sign in" />
              <UnauthenticatedNavLink
                href="/register"
                title="Sign up"
                className="nav-link"
              />
            </>
          )}
          {user && (
            <>
              <AuthenticatedNavLink
                href="/editor"
                title="New Article"
                iconClassName="ion-compose"
              />
              <AuthenticatedNavLink
                href="/settings"
                title="Settings"
                iconClassName="ion-gear-a"
              />
              <li className="nav-item">
                <a className="nav-link" href="/profile/eric-simons">
                  <img src="" className="user-pic" />
                  Eric Simons
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
