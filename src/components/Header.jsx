import React from "react";
import "./style.css";
import logo from "../imges/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section className="header">
      <Link to="/">
        <img src={logo} className="logo" />
      </Link>
      <div>
        <ul className="navbar">
          <li>
            <NavLink to="/" className="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <a href="cart.html">
              <i className="far fa-shopping-bag"></i>
            </a>
          </li>
        </ul>
        <div className="barWrapper">
          <div className="bar">
            <i className="fa fa-outdent"></i>
          </div>
          <div className="bar">
            <i className="far fa-shopping-bag"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
