import React from "react";
const ImageStack = ({ idx, product, data }) => (
  <div className="product__image-stack">
    {data.map((src, idx2) => (
      <img
        key={`other-${product.id}-${idx}-${idx2}`}
        src={`/products/P-${product.id}${src}`}
        alt={product.title}
      />
    ))}
  </div>
);
export default ImageStack;
