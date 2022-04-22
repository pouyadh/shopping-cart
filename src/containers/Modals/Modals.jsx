import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Modals.scss";

import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import { hideShoppingCartModal } from "../../features/shoppingCart/shoppingCartSlice";

const ModalWrapper = ({ children, onClose }) => {
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      if (typeof onClose === "function") {
        onClose();
      }
    }
  };
  return (
    <div className="modal__backdrop" onClick={handleClick}>
      {children}
    </div>
  );
};

const Modals = () => {
  const isShoppingCartModalShowing = useSelector(
    (state) => state.shoppingCart.isModalShowing
  );
  const dispatch = useDispatch();
  return (
    <>
      {isShoppingCartModalShowing && (
        <ModalWrapper onClose={() => dispatch(hideShoppingCartModal())}>
          <ShoppingCart />
        </ModalWrapper>
      )}
    </>
  );
};

export default Modals;
