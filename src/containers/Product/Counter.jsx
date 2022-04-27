import React from "react";
import "./Counter.scss";
import { minus, trash, plus } from "../../constants/images";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  addItem,
} from "../../features/shoppingCart/shoppingCartSlice";

const Counter = ({ productId }) => {
  const shoppingCartItemsById = useSelector(
    (state) => state.shoppingCart.itemsById
  );
  const item = shoppingCartItemsById[productId];
  const dispatch = useDispatch();

  if (!item)
    return (
      <div
        className="add-to-cart--btn"
        onClick={() => dispatch(addItem({ id: productId }))}
      >
        Add to cart
      </div>
    );

  return (
    <div className="cart-counter">
      <img
        src={item.count > 1 ? minus : trash}
        className="cart-counter__btn"
        alt="minus"
        onClick={() => dispatch(removeItem({ id: item.id }))}
      />
      <span className="cart-counter__count">{item.count}</span>
      <img
        src={plus}
        className="cart-counter__btn"
        alt="plus"
        onClick={() => dispatch(addItem({ id: item.id }))}
      />
    </div>
  );
};

export default Counter;
