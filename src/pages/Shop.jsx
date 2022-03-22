import React from "react";
import ShopHero from "../components/ShopHero";
import Product from "../components/Product";
import Pagination from "../components/Pagination";
import Newslatter from "../components/Newsletter";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const Shop = () => {
  return (
    <div>
      <ShopHero />
      <Product />
      <Pagination />
      <Newslatter />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Shop;
