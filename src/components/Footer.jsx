import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="col">
        <img src="imges/logo.png" alt="" className="logo" />
        <h4>Contact:</h4>
        <p>
          <strong>Manzil:</strong>Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <p>
          <strong>Telefon:</strong>Lorem ipsum dolor sit adipisicing elit.
        </p>
        <p>
          <strong>Vaqt:</strong>Lorem ipsum dolor
        </p>
        <h4>Bizdan uzoqlashmang</h4>
        <div className="icon">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>
      <div className="col-2">
        <h4>About</h4>
        <Link to="/">lorem</Link>
        <Link to="/">lorem</Link>
        <Link to="/">lorem</Link>
        <Link to="/">lorem</Link>
        <Link to="/">lorem</Link>
      </div>
      <div className="col-3">
        <h4>My Account</h4>
        <Link to="/">lorem</Link>
        <Link to="/">lorem</Link>
        <Link to="/">lorem</Link>
        <Link to="/">lorem</Link>
        <Link to="/">lorem</Link>
      </div>
      <div className="col install">
        <h4>Install App</h4>
        <p>Lorem ipsum dolor sit amet.</p>
        <div className="row">
          <img src="imges/pay/app.jpg" alt="" />
          <img src="imges/pay/play.jpg" alt="" />
        </div>
        <p>Lorem, ipsum dolor.</p>
        <img src="imges/pay/pay.png" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
