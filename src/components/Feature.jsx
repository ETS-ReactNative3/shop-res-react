import React from "react";
import f1 from '../imges/features/f1.png'
import f2 from '../imges/features/f2.png'
import f3 from '../imges/features/f3.png'
import f4 from '../imges/features/f4.png'
import f5 from '../imges/features/f5.png'
import f6 from '../imges/features/f6.png'

const Feature = () => {
  return (
    <section className="feature">
      <div className="fe-box">
        <img src={f1} alt="rasm" />
        <h6>Yetkazib berish bepul</h6>
      </div>
      <div className="fe-box">
        <img src={f2} alt="rasm" />
        <h6>Online buyurtma</h6>
      </div>
      <div className="fe-box">
        <img src={f3} alt="rasm" />
        <h6>Pulni tejash</h6>
      </div>
      <div className="fe-box">
        <img src={f4} alt="rasm" />
        <h6>Aktsiyalar</h6>
      </div>
      <div className="fe-box">
        <img src={f5} alt="rasm" />
        <h6>Baxtli savdo</h6>
      </div>
      <div className="fe-box">
        <img src={f6} alt="rasm" />
        <h6>24/7 qo'llab-quvvatlash</h6>
      </div>
    </section>
  );
};

export default Feature;
