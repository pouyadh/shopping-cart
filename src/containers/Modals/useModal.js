import { useSearchParams } from "react-router-dom";
import { MODALS } from "./Modals";

const useModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSearchParams = { ...Object.fromEntries(searchParams.entries()) };
  const closeModal = () => {
    if (!currentSearchParams.modal) return;
    delete currentSearchParams.modal;
    setSearchParams(currentSearchParams);
  };
  const showShoppingCartModal = () => {
    currentSearchParams.modal = MODALS.SHOPPING_CART;
    setSearchParams(currentSearchParams);
  };
  const showProductSearchModal = () => {
    currentSearchParams.modal = MODALS.PRODUCT_SEARCH;
    setSearchParams(currentSearchParams);
  };

  return { closeModal, showProductSearchModal, showShoppingCartModal };
};

export default useModal;
