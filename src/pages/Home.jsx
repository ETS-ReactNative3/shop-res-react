import React from "react";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Product from "../components/Product";
import Banner from "../components/Banner";
import Smbanner from "../components/Smbanner";
import BannerTree from "../components/BannerTree";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import ProProduct from "../components/ProProduct";

const Home = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <Product />
      <Banner />
      <ProProduct />
      <Smbanner />
      <BannerTree />
      <Newsletter />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Home;
