import React, { useState } from "react";
import "./style.css";
import logo from "../imges/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <section className="header">
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <div>
        <ul className="navbar">
          <li>
            <NavLink to="/" className="nav">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" className="nav">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="nav">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="nav">
              <i className="far fa-shopping-bag"></i>
            </NavLink>
          </li>
        </ul>
        <div className="barWrapper">
          <div className="bar" onClick={() => setOpenMenu(!openMenu)}>
            <i className="fa fa-outdent"></i>
          </div>
          <NavLink to="/cart" className="bar">
            <i className="far fa-shopping-bag"></i>
          </NavLink>
        </div>
      </div>
      <div
        className="mobile"
        style={openMenu ? { width: "100%", cursor: "pointer" } : {}}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <div className="mobileRight"></div>
        <div className="mobileLeft">
          <NavLink
            className="m-nav"
            style={openMenu ? { display: "flex" } : {}}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="m-nav"
            style={openMenu ? { display: "flex" } : {}}
            to="/shop"
          >
            Shop
          </NavLink>
          <NavLink
            className="m-nav"
            style={openMenu ? { display: "flex" } : {}}
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            className="m-nav"
            style={openMenu ? { display: "flex" } : {}}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="m-nav"
            style={openMenu ? { display: "flex" } : {}}
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Header;
