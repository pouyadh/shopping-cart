import React, { useEffect } from "react";
import "./Modals.scss";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import ProductSearch from "../../components/ProductSearch/ProductSearch";
import { useSearchParams } from "react-router-dom";

export const MODALS = {
  PRODUCT_SEARCH: "1",
  SHOPPING_CART: "2",
};

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
  const searchParams = useSearchParams()[0];
  const activeModal = searchParams.get("modal");
  if (!activeModal) return null;

  return (
    <ModalWrapper onClose={() => searchParams.delete("modal")}>
      {activeModal === MODALS.SHOPPING_CART && <ShoppingCart />}
      {activeModal === MODALS.PRODUCT_SEARCH && <ProductSearch />}
    </ModalWrapper>
  );
};

export default Modals;
