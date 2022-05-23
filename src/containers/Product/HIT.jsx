import React from "react";
const HIT = ({ product, title, image, text }) => (
  <div className="product__hit">
    <h1>{title}</h1>
    <img src={`/products/P-${product.id}${image}`} alt={title} />
    <p>{text}</p>
  </div>
);

export default HIT;
