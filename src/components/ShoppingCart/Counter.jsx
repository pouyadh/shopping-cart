import React from "react";
import "./Counter.scss";
import { minus, trash, plus } from "../../constants/images";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  addItem,
} from "../../features/shoppingCart/shoppingCartSlice";

const Counter = ({ productId }) => {
  const itemsById = useSelector((state) => state.shoppingCart.itemsById);
  const item = itemsById[productId];
  const dispatch = useDispatch();

  return (
    <div className="shopping-cart-counter">
      <img
        src={item.count > 1 ? minus : trash}
        className="shopping-cart-counter__btn"
        alt="minus"
        onClick={() => dispatch(removeItem({ id: item.id }))}
      />
      <span className="shopping-cart-counter__count">{item.count}</span>
      <img
        src={plus}
        className="shopping-cart-counter__btn"
        alt="plus"
        onClick={() => dispatch(addItem({ id: item.id }))}
      />
    </div>
  );
};

export default Counter;
