import React from "react";
import { Link } from "react-router-dom";
import f1 from '../imges/products/f1.jpg'
import f2 from '../imges/products/f2.jpg'
import f3 from '../imges/products/f3.jpg'
import f4 from '../imges/products/f4.jpg'
import f5 from '../imges/products/f5.jpg'
import f6 from '../imges/products/f6.jpg'
import f7 from '../imges/products/f7.jpg'
import f8 from '../imges/products/f8.jpg'

const Product = () => {
  return (
    <section className="product1">
      <h2>Tanlangan mahsulotlar</h2>
      <p>Yozgi kolleksiya yangi zamonaviy dizayn</p>
      <Link to='singleproduct' className="pro-container">
        <div className="pro">
          <img src={f1} alt="" />
          <div className="des">
            <span>adclassNameas </span>
            <h5>Kosmonavt futbolkalari</h5>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h4>350 So'm</h4>
          </div>
          <a href="#">
            <i className="fas fa-shopping-cart cart"></i>
          </a>
        </div>
        <div className="pro">
          <img src={f2} alt="" />
          <div className="des">
            <span>adclassNameas </span>
            <h5>Kosmonavt futbolkalari</h5>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h4>350 So'm</h4>
          </div>
          <a href="#">
            <i className="fas fa-shopping-cart cart"></i>
          </a>
        </div>
        <div className="pro">
          <img src={f3} alt="" />
          <div className="des">
            <span>adclassNameas </span>
            <h5>Kosmonavt futbolkalari</h5>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h4>350 So'm</h4>
          </div>
          <a href="#">
            <i className="fas fa-shopping-cart cart"></i>
          </a>
        </div>
        <div className="pro">
          <img src={f4} alt="" />
          <div className="des">
            <span>adclassNameas </span>
            <h5>Kosmonavt futbolkalari</h5>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h4>350 So'm</h4>
          </div>
          <a href="#">
            <i className="fas fa-shopping-cart cart"></i>
          </a>
        </div>
        <div className="pro">
          <img src={f5} alt="" />
          <div className="des">
            <span>adclassNameas </span>
            <h5>Kosmonavt futbolkalari</h5>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h4>350 So'm</h4>
          </div>
          <a href="#">
            <i className="fas fa-shopping-cart cart"></i>
          </a>
        </div>
        <div className="pro">
          <img src={f6} alt="" />
          <div className="des">
            <span>adclassNameas </span>
            <h5>Kosmonavt futbolkalari</h5>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h4>350 So'm</h4>
          </div>
          <a href="#">
            <i className="fas fa-shopping-cart cart"></i>
          </a>
        </div>
        <div className="pro">
          <img src={f7} alt="" />
          <div className="des">
            <span>adclassNameas </span>
            <h5>Kosmonavt futbolkalari</h5>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h4>350 So'm</h4>
          </div>
          <a href="#">
            <i className="fas fa-shopping-cart cart"></i>
          </a>
        </div>
        <div className="pro">
          <img src={f8} alt="" />
          <div className="des">
            <span>adclassNameas </span>
            <h5>Kosmonavt futbolkalari</h5>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h4>350 So'm</h4>
          </div>
          <a href="#">
            <i className="fas fa-shopping-cart cart"></i>
          </a>
        </div>
      </Link>
    </section>
  );
};

export default Product;
