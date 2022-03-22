import React from "react";

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
          <img src="./imges/people/1.png" alt="" />
          <p>
            <span>John Doe</span>Senior Marketing maneger <br />
            Phone +998977777777 <br />
            Email john@gmail.com
          </p>
        </div>
        <div className="contactimgWrapper">
          <img src="./imges/people/2.png" alt="" />
          <p>
            <span>John Doe</span>Senior Marketing maneger <br />
            Phone +998977777777 <br />
            Email john@gmail.com
          </p>
        </div>
        <div className="contactimgWrapper">
          <img src="./imges/people/3.png" alt="" />
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
