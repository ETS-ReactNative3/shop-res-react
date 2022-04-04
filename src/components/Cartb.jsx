import React from "react";
import { Link } from "react-router-dom";
import f1 from '../imges/products/f1.jpg'
import f2 from '../imges/products/f2.jpg'
import f3 from '../imges/products/f3.jpg'

const Cartb = () => {
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
              <Link to="/">
                <i className="far fa-times-circle"></i>
              </Link>
            </td>
            <td>
              <img src={f1} alt="" />
            </td>
            <td>Futbolka</td>
            <td>139 so'm</td>
            <td>
              <input type="number" defaultValue="1" />
            </td>
            <td>139 so'm</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <Link to="/">
                <i className="far fa-times-circle"></i>
              </Link>
            </td>
            <td>
              <img src={f2} alt="" />
            </td>
            <td>Futbolka</td>
            <td>139 so'm</td>
            <td>
              <input type="number" defaultValue="1" />
            </td>
            <td>139 so'm</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <Link to="/">
                <i className="far fa-times-circle"></i>
              </Link>
            </td>
            <td>
              <img src={f3} alt="" />
            </td>
            <td>Futbolka</td>
            <td>139 so'm</td>
            <td>
              <input type="number" defaultValue="1" />
            </td>
            <td>139 so'm</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Cartb;
