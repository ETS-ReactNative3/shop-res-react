import React from "react";
import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <section className="pagination">
      <Link to="/">1</Link>
      <Link to="/">2</Link>
      <Link to="/">
        <i className="fal fa-long-arrow-alt-right"></i>
      </Link>
    </section>
  );
};

export default Pagination;
