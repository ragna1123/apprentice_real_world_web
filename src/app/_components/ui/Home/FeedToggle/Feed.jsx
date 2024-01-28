"use client";
import React, { useState } from "react";

export default function Feed(props) {
  const { isFeed, isUser } = props;
  const [activeFeed, setActiveFeed] = useState(isFeed);

  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        {isUser && (
          <li className="nav-item">
            <a
              className={activeFeed ? "nav-link active" : "nav-link"}
              href={"/feed"}
              onClick={() => setActiveFeed(true)}
            >
              YourFeed
            </a>
          </li>
        )}

        <li className="nav-item">
          <a
            className={!activeFeed ? "nav-link active" : "nav-link"}
            href={"/"}
            onClick={() => setActiveFeed(false)}
          >
            GlobalFeed
          </a>
        </li>
      </ul>
    </div>
  );
}
