import React from "react";
import BlogHero from "../components/BlogHero";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const Blog = () => {
  return (
    <div>
      <BlogHero />
      <Blogs />
      <Pagination />
      <Newsletter />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Blog;
