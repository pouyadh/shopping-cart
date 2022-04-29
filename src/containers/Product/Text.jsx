import React from "react";

const Text = ({ idx, product, title, text }) => (
  <div className="product__text">
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

export default Text;
