import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Modals.scss";

import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import { hideModal, MODALS } from "../../features/modal/modalSlice";
import ProductSearch from "../../components/ProductSearch/ProductSearch";

const ModalWrapper = ({ children, onClose }) => {
  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      if (typeof onClose === "function") {
        onClose();
      }
    }
  };

  useEffect(() => {
    document.querySelector("body").classList.add("modal-open");
    return () => {
      document.querySelector("body").classList.remove("modal-open");
    };
  }, []);
  return (
    <div className="modal__backdrop" onClick={handleClick}>
      {children}
    </div>
  );
};

const Modals = () => {
  const activeModal = useSelector((state) => state.modal.activeModal);
  const dispatch = useDispatch();

  if (activeModal === MODALS.NONE) return null;

  return (
    <ModalWrapper onClose={() => dispatch(hideModal())}>
      {activeModal === MODALS.SHOPPING_CART && <ShoppingCart />}
      {activeModal === MODALS.PRODUCT_SEARCH && <ProductSearch />}
    </ModalWrapper>
  );
};

export default Modals;
