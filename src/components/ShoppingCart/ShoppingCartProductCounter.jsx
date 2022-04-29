import React from "react";
import "./ShoppingCartProductCounter.scss";
import { minus, trash, plus } from "../../constants/images";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  addItem,
} from "../../features/shoppingCart/shoppingCartSlice";

const ShoppingCartProductCounter = ({ productId }) => {
  const productsById = useSelector((state) => state.product.itemsById);
  const product = productsById[productId];
  const shoppingCartItemsById = useSelector(
    (state) => state.shoppingCart.itemsById
  );
  const item = shoppingCartItemsById[productId];
  const dispatch = useDispatch();

  if (!product?.availableInStock) {
    return (
      <div className="shopping-cart-product-counter">
        <div className="shopping-cart-product-counter__btn--disabled">
          Not Available
        </div>
      </div>
    );
  }

  if (!item)
    return (
      <div
        className="shopping-cart-product-counter"
        onClick={() => dispatch(addItem({ id: productId }))}
      >
        <div className="shopping-cart-product-counter__btn">Add to cart</div>
      </div>
    );

  return (
    <div className="shopping-cart-product-counter">
      <div className="shopping-cart-product-counter__counter">
        <img
          src={item.count > 1 ? minus : trash}
          alt="minus"
          className="shopping-cart-product-counter__counter__btn"
          onClick={() => dispatch(removeItem({ id: item.id }))}
        />
        <span className="shopping-cart-product-counter__counter__count">
          {item.count}
        </span>
        <img
          src={plus}
          alt="plus"
          className="shopping-cart-product-counter__counter__btn"
          onClick={() => dispatch(addItem({ id: item.id }))}
        />
      </div>
    </div>
  );
};

export default ShoppingCartProductCounter;
