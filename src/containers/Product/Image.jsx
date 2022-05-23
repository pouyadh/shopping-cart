import React from "react";

const Image = ({ product, image }) => (
  <div className="product__image">
    <img src={`/products/P-${product.id}${image}`} alt="im" />
  </div>
);

export default Image;
