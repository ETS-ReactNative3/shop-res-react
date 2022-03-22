import React from "react";
import Feature from "../components/Feature";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import AboutHero from "../components/AboutHero";
import About from "../components/About";
import AboutVideo from "../components/AboutVideo";

const About = () => {
  return (
    <div>
      <AboutHero />
      <About />
      <AboutVideo />
      <Feature />
      <Newsletter />
      <Footer />
      <Copyright />
    </div>
  );
};

export default About;
