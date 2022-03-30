import React from "react";
import Maps from "./Maps";

const Contactb = () => {
  return (
    <section className="contact">
      <div className="contact-deatels">
        <p>Bizga bog'laning</p>
        <h2>
          Bizning agentlik manzillarclassNamean biriga tashrif buyuring yoki
          bugun biz bilan bog'laning
        </h2>
        <h3>Bosh classNameora</h3>
        <div>
          <li>
            <i className="fa fa-map"></i>
            <p>Toshkent shahri maksim gorkiy</p>
          </li>
          <li>
            <i className="fa fa-envelope"></i>
            <p>contact@gmail.com</p>
          </li>
          <li>
            <i className="fa fa-phone-alt"></i>
            <p>+99897 777 77 77</p>
          </li>
          <li>
            <i className="fa fa-clock"></i>
            <p>12:00</p>
          </li>
        </div>
      </div>
      <div className="contact-map">
        <Maps />
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.5026461673!2d69.13928013748432!3d41.282512542897464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1647401552466!5m2!1sru!2s"
          wclassNameth="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe> */}
      </div>
    </section>
  );
};

export default Contactb;
