import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./features/shoppingCart/shoppingCartSlice";
import productReducer from "./features/product/productSlice";
import modalReducer from "./features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    product: productReducer,
    modal: modalReducer,
  },
});
