import React from "react";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import AboutHero from "../components/AboutHero";
import Contact from "../components/Contact";
import ContactForm from "../components/Form";

const Contact = () => {
  return (
    <div>
      <AboutHero />
      <Contact />
      <ContactForm />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Contact;
