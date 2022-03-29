import React from "react";
import p1 from '../imges/people/1.png'
import p2 from '../imges/people/2.png'
import p3 from '../imges/people/3.png'

const ContactForm = () => {
  return (
    <section className="contact-form">
      <form action="">
        <p>Habar qoldiring</p>
        <h2>Biz siz bilan tez orada bog'lanamiz!</h2>
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea
          name=""
          className=""
          cols="30"
          rows="10"
          placeholder="your massage"
        ></textarea>
        <button className="normal">Submit</button>
      </form>
      <div className="contact-form-deteals">
        <div className="contactimgWrapper">
          <img src={p1} alt="" />
          <p>
            <span>John Doe</span>Senior Marketing maneger <br />
            Phone +998977777777 <br />
            Email john@gmail.com
          </p>
        </div>
        <div className="contactimgWrapper">
          <img src={p2} alt="" />
          <p>
            <span>John Doe</span>Senior Marketing maneger <br />
            Phone +998977777777 <br />
            Email john@gmail.com
          </p>
        </div>
        <div className="contactimgWrapper">
          <img src={p3} alt="" />
          <p>
            <span>John Doe</span>Senior Marketing maneger <br />
            Phone +998977777777 <br />
            Email john@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
