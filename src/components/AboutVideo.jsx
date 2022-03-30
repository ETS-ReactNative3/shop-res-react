import React from "react";
import mp4 from '../imges/about/1.mp4'

const AboutVideo = () => {
  return (
    <section className="about-video">
      <div className="WrapperVideo">
        <video loop controls src={mp4}></video>
      </div>
    </section>
  );
};

export default AboutVideo;
