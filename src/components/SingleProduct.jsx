import React, { useState } from "react";
import img1 from "../imges/products/f1.jpg";
import img2 from "../imges/products/f2.jpg";
import img3 from "../imges/products/f3.jpg";
import img4 from "../imges/products/f4.jpg";

const SingleProduct = () => {
  const [data, setData] = useState(img1);
  return (
    <section className="single-product">
      <div className="single-product-image-wrapper">
        <img src={data} alt="" />
        <div className="single-product-image-group">
          <div className="small-image-wrapper">
            <img src={img1} alt="" onClick={() => setData(img1)} />
          </div>
          <div className="small-image-wrapper">
            <img src={img2} alt="" onClick={() => setData(img2)} />
          </div>
          <div className="small-image-wrapper">
            <img src={img3} alt="" onClick={() => setData(img3)} />
          </div>
          <div className="small-image-wrapper">
            <img src={img4} alt="" onClick={() => setData(img4)} />
          </div>
        </div>
      </div>
      <div className="single-title-desc">
        <h4 className="single-small-title">Plaj futbolkasi</h4>
        <h2 className="single-big-title">Erkaklar uchun futbolkalar</h2>
        <h4>139.000 so'm</h4>
        <select>
          <option value="">katta</option>
          <option value="">juda katta</option>
          <option value="">narmal</option>
          <option value="">o'rta</option>
          <option value="">kichik</option>
        </select>
        <div className="inputBtn">
          <input type="number" value={1} />
          <button className="normal">kartaga qo'shish</button>
        </div>
        <h3>Maxsulot mal'umotlari</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis non,
          ducimus adipisci velit quibusdam veritatis ipsa, mollitia sunt culpa
          praesentium asperiores atque nobis deserunt className libero nostrum a
          nihil odit iste doloremque quod! Perferendis dolores voluptatem,
          similique laborum molestiae earum aspernatur accusamus velit minus
          labore iure?
        </p>
      </div>
    </section>
  );
};

export default SingleProduct;
