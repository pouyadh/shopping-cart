import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
import { useSelector } from "react-redux";
import { search, basket } from "../../constants/images";
import { useModal } from "../../containers/Modals";

const Navbar = () => {
  const shoppingCartItems = useSelector((state) => state.shoppingCart.items);
  const itemCount = shoppingCartItems.length;
  const modal = useModal();

  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo} alt="logo" />

      <span className="navbar__group">
        <span
          className="navbar__group__icon-button"
          onClick={() => modal.showShoppingCartModal()}
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
        <span
          className="navbar__group__icon-button"
          onClick={() => modal.showProductSearchModal()}
        >
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
