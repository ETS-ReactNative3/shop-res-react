import React from "react";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import CartHero from "../components/CartHero";
import Cartb from "../components/Cartb";
import Coupon from "../components/Coupon";

const Cart = () => {
  return (
    <div>
      <CartHero />
      <Cartb />
      <Coupon />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Cart;
