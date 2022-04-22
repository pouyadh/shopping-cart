import React from "react";
import styles from "./Navbar.module.scss";
import logo from "../../assets/logo.png";
import Basket from "./Basket";
import { useDispatch, useSelector } from "react-redux";
import { showShoppingCartModal } from "../../features/shoppingCart/shoppingCartSlice";

const Navbar = () => {
  const shoppingCartItems = useSelector((state) => state.shoppingCart.items);
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <img className={styles.logo} src={logo} alt="logo" />
      <Basket
        itemCount={shoppingCartItems.length}
        onClick={() => dispatch(showShoppingCartModal())}
      />
    </div>
  );
};

export default Navbar;
