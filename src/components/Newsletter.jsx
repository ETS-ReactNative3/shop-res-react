import React from "react";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="letter">
        <h3 className="letterTitle">
          Yangiliklarni o'tkazmaslik uchun ro'yhatdan o'ting!
        </h3>
        <p className="letterText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="form">
        <input type="text" placeholder="enter your email" />
        <button>Submit</button>
      </div>
    </section>
  );
};

export default Newsletter;
