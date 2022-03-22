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
import AboutHero from "../components/AboutHero";
import Cart from "../components/Cart";
import Coupon from "../components/Coupon";

const Cart = () => {
  return (
    <div>
      <AboutHero />
      <Cart />
      <Coupon />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Cart;
