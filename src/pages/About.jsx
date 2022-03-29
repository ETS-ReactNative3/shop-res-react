import React from "react";
import Feature from "../components/Feature";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import AboutHero from "../components/AboutHero";
import Aboutb from "../components/Aboutb";
import AboutVideo from "../components/AboutVideo";
import DemoCarousel from "../components/Carousel";

const About = () => {
  return (
    <div>
      <AboutHero />
      <Aboutb />
      <DemoCarousel/>
      <AboutVideo />
      <Feature />
      <Newsletter />
      <Footer />
      <Copyright />
    </div>
  );
};

export default About;
