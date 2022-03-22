import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="aboutimgWrapper">
        <img src="./imges/about/a6.jpg" alt="" />
      </div>
      <div className="aboutdeatels">
        <h2>Who we are?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sequi
          eius omnis maxime dicta veritatis labore sed voluptate quo! Iusto
          omnis cum consequuntur voluptatum accusamus corrupti rerum atque
          eligendi officiis, nobis molestias quos pariatur sit deserunt
          consectetur necessitatibus numquam asperiores nostrum odit hic amet!
          Est eius quis praesentium repellendus facere!
        </p>
        <abbr>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. AliquclassName
          maxime praesentium laboriosam hic rerum nemo tenetur repellat ipsam
          quis architecto!
        </abbr>
        <br />
        <br />
        <marquee loop="-1" bgcolor="gray" scrollamount="5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
          corrupti, cupclassNameitate commodi inventore veritatis debitis.
        </marquee>
      </div>
    </section>
  );
};

export default About;
