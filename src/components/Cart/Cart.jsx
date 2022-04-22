import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../features/shoppingCart/shoppingCartSlice";
import star from "../../assets/star.svg";
import styles from "./Cart.module.scss";
import Counter from "./Counter";

export default function Cart({ id, title, rate, price, offerPrice, off, img }) {
  const dispatch = useDispatch();
  const shoppingCartItemsById = useSelector(
    (state) => state.shoppingCart.itemsById
  );
  const shoppingCartItem = shoppingCartItemsById[id];

  return (
    <div className={styles["wrapper"]}>
      <span className={styles["off-badge"]}>{off * 100}%</span>
      <img className={styles["image"]} alt={title} src={img} />
      <h3 className={styles["title"]}>{title}</h3>
      <div className={styles["rate"]}>
        <img className={styles["rate-star"]} alt="star" src={star} />
        {rate}
      </div>
      <span className={styles["price-offer"]}>${offerPrice}</span>
      <span className={styles["price"]}>${price}</span>
      {!shoppingCartItem ? (
        <button
          className={styles["button-add"]}
          onClick={() => dispatch(addItem({ id }))}
        >
          Add to Cart
        </button>
      ) : (
        <Counter productId={id} />
      )}
    </div>
  );
}
