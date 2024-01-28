import React from "react";
import PageLink from "./PageLink/PageLink";

export default function Pagination() {
  return (
    <ul className="pagination">
      <PageLink pageNumber="1" activePage={true} href="#"/>
      <PageLink pageNumber="2" activePage={false} href="#"/>
    </ul>
  );
}
