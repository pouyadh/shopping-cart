import React from "react";
const CartStack = ({ product, title, data }) => (
  <div className="product__cart-stack">
    <h3>{title}</h3>
    <div className="product__cart-stack__wrapper">
      {data.map((item, idx2) => (
        <div key={`cs${idx2}`} className="product__cart-stack__wrapper__cart">
          <img
            src={`/products/P-${product.id}${item.image}`}
            alt={product.title}
          />
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  </div>
);

export default CartStack;
