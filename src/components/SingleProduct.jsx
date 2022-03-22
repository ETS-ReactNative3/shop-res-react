import React from "react";

const SingleProduct = () => {
  return (
    <section className="single-product">
      <div className="single-product-image-wrapper">
        <img src="./imges/products/f1.jpg" alt="" />
        <div className="single-product-image-group">
          <div className="small-image-wrapper">
            <img src="./imges/products/f1.jpg" alt="" />
          </div>
          <div className="small-image-wrapper">
            <img src="./imges/products/f2.jpg" alt="" />
          </div>
          <div className="small-image-wrapper">
            <img src="./imges/products/f3.jpg" alt="" />
          </div>
          <div className="small-image-wrapper">
            <img src="./imges/products/f4.jpg" alt="" />
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
          <input type="number" />
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
