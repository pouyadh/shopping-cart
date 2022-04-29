import React from "react";

const Bullet = ({ idx, product, title, data }) => (
  <div className="product__bullets">
    <h3>{title}</h3>
    <ul>
      {data.map((blt, idx) => (
        <li key={`pb-${product.id}-${idx}`}>{blt}</li>
      ))}
    </ul>
  </div>
);

export default Bullet;
