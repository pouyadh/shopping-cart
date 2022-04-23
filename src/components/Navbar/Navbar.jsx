import React from "react";
import "./Navbar.scss";

import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { showShoppingCartModal } from "../../features/modal/modalSlice";

import { search, basket } from "../../constants/images";

const Navbar = () => {
  const shoppingCartItems = useSelector((state) => state.shoppingCart.items);
  const dispatch = useDispatch();
  const itemCount = shoppingCartItems.length;

  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo} alt="logo" />

      <span className="navbar__group">
        <span
          className="navbar__group__icon-button"
          onClick={() => dispatch(showShoppingCartModal())}
        >
          <img
            src={basket}
            className="navbar__group__icon-button__icon"
            alt="basket"
          />
          {!!itemCount && (
            <span className="navbar__group__icon-button__badge">
              {itemCount}
            </span>
          )}
        </span>
        <span className="navbar__group__icon-button">
          <img
            src={search}
            className="navbar__group__icon-button__icon"
            alt="search"
          />
        </span>
      </span>
    </div>
  );
};

export default Navbar;
