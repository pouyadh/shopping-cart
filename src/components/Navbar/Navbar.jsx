import React from "react";
import "./Navbar.scss";
import { logo } from "../../constants/images";
import { useSelector } from "react-redux";
import { FaShoppingBag, FaSearch } from "react-icons/fa";
import { useModal } from "../../containers/Modals";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const shoppingCartItems = useSelector((state) => state.shoppingCart.items);
  const itemCount = shoppingCartItems.length;
  const modal = useModal();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img
        className="navbar__logo"
        src={logo}
        alt="logo"
        onClick={() => navigate("/")}
      />

      <span className="navbar__group">
        <span
          className="navbar__group__icon-button"
          onClick={() => modal.showShoppingCartModal()}
        >
          <FaShoppingBag className="navbar__group__icon-button__icon" />
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
          <FaSearch className="navbar__group__icon-button__icon" />
        </span>
      </span>
    </div>
  );
};

export default Navbar;
