import { createSlice } from "@reduxjs/toolkit";
import products from "../../constants/products";

const productsById = products.reduce(
  (obj, item) => ({ ...obj, [item.id]: item }),
  {}
);

const initialState = {
  items: products,
  itemsById: productsById,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

//export {  } = productSlice.actions;
export default productSlice.reducer;
