import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../features/shoppingCart/shoppingCartSlice";
import star from "../../assets/star.svg";
import styles from "./Cart.module.scss";
import Counter from "./Counter";
import { useNavigate } from "react-router-dom";

export default function Cart({
  id,
  title,
  rate,
  price,
  offerPrice,
  off,
  img256,
}) {
  const dispatch = useDispatch();
  const shoppingCartItemsById = useSelector(
    (state) => state.shoppingCart.itemsById
  );
  const shoppingCartItem = shoppingCartItemsById[id];

  const navigate = useNavigate();

  return (
    <div className={styles["wrapper"]}>
      <div onClick={() => navigate(`/product/${id}`)}>
        {off !== 0 && <span className={styles["off-badge"]}>{off * 100}%</span>}
        <img className={styles["image"]} alt={title} src={img256} />
        <h3 className={styles["title"]}>{title}</h3>
        <div className={styles["rate"]}>
          <img className={styles["rate-star"]} alt="star" src={star} />
          <span>{rate}</span>
        </div>
        <span className={styles["price-offer"]}>${offerPrice}</span>
        <span className={styles["price"]}>${price}</span>
      </div>
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
