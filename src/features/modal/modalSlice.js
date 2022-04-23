import { createSlice } from "@reduxjs/toolkit";

export const MODALS = {
  NONE: 0,
  PRODUCT_SEARCH: 1,
  SHOPPING_CART: 2,
};

const initialState = {
  activeModal: MODALS.NONE,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showProductModal: (state) => {
      state.activeModal = MODALS.PRODUCT_SEARCH;
    },
    showShoppingCartModal: (state) => {
      state.activeModal = MODALS.SHOPPING_CART;
    },
    hideModal: (state) => {
      state.activeModal = MODALS.NONE;
    },
  },
});

export const { showProductModal, showShoppingCartModal, hideModal } =
  modalSlice.actions;
export default modalSlice.reducer;
