import React from "react";
import { Link } from "react-router-dom";
import n1 from "../imges/products/n1.jpg";
import n2 from "../imges/products/n2.jpg";
import n3 from "../imges/products/n3.jpg";
import n4 from "../imges/products/n4.jpg";
import n5 from "../imges/products/n5.jpg";
import n6 from "../imges/products/n6.jpg";
import n7 from "../imges/products/n7.jpg";
import n8 from "../imges/products/n8.jpg";

const ProProduct = () => {
  return (
    <section className="product1">
      <h2>Yangi kelgan maxsulotlar</h2>
      <p>Yozgi kolleksiya yangi zamonaviy dizayn</p>
      <div className="pro-container">
        <Link to="singleproduct" className="pro">
          <img src={n1} alt="" />
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
          <Link to="/">
            <i className="fas fa-shopping-cart cart"></i>
          </Link>
        </Link>
        <Link to="singleproduct" className="pro">
          <img src={n2} alt="" />
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
          <Link to="/">
            <i className="fas fa-shopping-cart cart"></i>
          </Link>
        </Link>
        <Link to="singleproduct" className="pro">
          <img src={n3} alt="" />
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
          <Link to="/">
            <i className="fas fa-shopping-cart cart"></i>
          </Link>
        </Link>
        <Link to="singleproduct" className="pro">
          <img src={n4} alt="" />
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
          <Link to="/">
            <i className="fas fa-shopping-cart cart"></i>
          </Link>
        </Link>
        <Link to="singleproduct" className="pro">
          <img src={n5} alt="" />
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
          <Link to="/">
            <i className="fas fa-shopping-cart cart"></i>
          </Link>
        </Link>
        <Link to="singleproduct" className="pro">
          <img src={n6} alt="" />
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
          <Link to="/">
            <i className="fas fa-shopping-cart cart"></i>
          </Link>
        </Link>
        <Link to="singleproduct" className="pro">
          <img src={n7} alt="" />
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
          <Link to="/">
            <i className="fas fa-shopping-cart cart"></i>
          </Link>
        </Link>
        <Link to="singleproduct" className="pro">
          <img src={n8} alt="" />
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
          <Link to="/">
            <i className="fas fa-shopping-cart cart"></i>
          </Link>
        </Link>
      </div>
    </section>
  );
};

export default ProProduct;
