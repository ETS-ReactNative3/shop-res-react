import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../imges/products/f1.jpg";
import img2 from "../imges/products/f2.jpg";
import img3 from "../imges/products/f3.jpg";
import img4 from "../imges/products/f4.jpg";
import img5 from "../imges/products/f5.jpg";
import img6 from "../imges/products/f6.jpg";

const DemoCarousel = () => {
  return (
    <div className="WrapperDemoCon">
      <div className="WrapperDemo">
        <div className="caruitems">
          <Carousel>
            <div>
              <img src={img1} alt="rasm" />
            </div>
            <div>
              <img src={img2} alt="rasm" />
            </div>
            <div>
              <img src={img3} alt="rasm" />
            </div>
            <div>
              <img src={img4} alt="rasm" />
            </div>
            <div>
              <img src={img5} alt="rasm" />
            </div>
            <div>
              <img src={img6} alt="rasm" />
            </div>
            <div>
              <img src={img2} alt="rasm" />
            </div>
            <div>
              <img src={img4} alt="rasm" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default DemoCarousel;
