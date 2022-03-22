import React from "react";

const Coupon = () => {
  return (
    <section className="coupon">
      <div className="coupon-form">
        <h3>Apply Coupon</h3>
        <div>
          <input type="text" placeholder="Enter your Coupon" />
          <button className="normal">Apply</button>
        </div>
      </div>
      <div className="coupon-table">
        <h3>Cart Totals</h3>
        <table>
          <tr>
            <td>Cart subtotal</td>
            <td>$ 335</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td>Free</td>
          </tr>
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td>
              <strong>$ 335</strong>
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default Coupon;
