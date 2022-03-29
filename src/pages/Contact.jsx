import React from "react";
import Footer from "../components/Footer.jsx";
import Copyright from "../components/Copyright.jsx";
import ContactHero from "../components/ContactHero.jsx";
import Contactb from "../components/Contactb.jsx";
import ContactForm from "../components/ContactForm.jsx";

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <Contactb />
      <ContactForm />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Contact;
