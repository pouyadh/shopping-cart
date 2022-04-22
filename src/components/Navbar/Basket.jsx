import React from "react";
import styles from "./Basket.module.scss";
import basket from "../../assets/basket.svg";

const Basket = ({ itemCount, ...props }) => (
  <span className={styles.wrapper} {...props}>
    <img src={basket} className={styles.icon} alt="basket" />
    {!!itemCount && <span className={styles.badge}>{itemCount}</span>}
  </span>
);

export default Basket;
