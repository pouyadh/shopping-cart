import React from "react";
import { FaStar } from "react-icons/fa";
import "./Cart.scss";
import { useNavigate } from "react-router-dom";
import ShoppingCartProductCounter from "../ShoppingCart/ShoppingCartProductCounter";

export default function Cart({
  id,
  title,
  rate,
  price,
  offerPrice,
  off,
  availableInStock,
  img256,
}) {
  const navigate = useNavigate();

  return (
    <div className="product-cart">
      <div
        className="product-cart__body"
        onClick={() => navigate(`/product/${id}`)}
      >
        {off !== 0 && (
          <span className="product-cart__body__off-badge">{off * 100}%</span>
        )}
        <img className="product-cart__body__image" alt={title} src={img256} />
        <h3 className="product-cart__body__title">{title}</h3>
        <div className="product-cart__body__rate">
          <FaStar />
          <span>{rate}</span>
        </div>
        {availableInStock && (
          <>
            <span className="product-cart__body__price--offer">
              ${offerPrice}
            </span>
            {off !== 0 && (
              <span className="product-cart__body__price">${price}</span>
            )}
          </>
        )}
      </div>
      <ShoppingCartProductCounter productId={id} />
    </div>
  );
}
