import React from "react";

const Cart = () => {
  return (
    <section className="cart">
      <table>
        <thead>
          <tr>
            <td>O'chirish</td>
            <td>Rasm</td>
            <td>Maxsulot</td>
            <td>Narx</td>
            <td>Soni</td>
            <td>Jami</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="#">
                <i className="far fa-times-circle"></i>
              </a>
            </td>
            <td>
              <img src="./imges/products/f1.jpg" alt="" />
            </td>
            <td>Futbolka</td>
            <td>139 so'm</td>
            <td>
              <input type="number" value="1" />
            </td>
            <td>139 so'm</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <a href="#">
                <i className="far fa-times-circle"></i>
              </a>
            </td>
            <td>
              <img src="./imges/products/f3.jpg" alt="" />
            </td>
            <td>Futbolka</td>
            <td>139 so'm</td>
            <td>
              <input type="number" value="1" />
            </td>
            <td>139 so'm</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <a href="#">
                <i className="far fa-times-circle"></i>
              </a>
            </td>
            <td>
              <img src="./imges/products/f2.jpg" alt="" />
            </td>
            <td>Futbolka</td>
            <td>139 so'm</td>
            <td>
              <input type="number" value="1" />
            </td>
            <td>139 so'm</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Cart;
