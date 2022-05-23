import React from "react";
const ImageStack = ({ product, data }) => (
  <div className="product__image-stack">
    {data.map((src, idx2) => (
      <img
        key={`im-${idx2}`}
        src={`/products/P-${product.id}${src}`}
        alt={product.title}
      />
    ))}
  </div>
);
export default ImageStack;
