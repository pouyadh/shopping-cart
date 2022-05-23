import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { productApi } from "../../api";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAll",
  async () => {
    const response = await productApi.fetchAll();
    return response;
  }
);

const getItemsById = (items) =>
  items.reduce((obj, item) => ({ ...obj, [item.id]: item }), {});

const initialState = {
  items: [],
  itemsById: {},
  state: "idle",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.state = "pending";
    });
    builder.addCase(fetchAllProducts.rejected, (state) => {
      state.state = "failed";
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.state = "success";
      state.items = action.payload;
      state.itemsById = getItemsById(action.payload);
    });
  },
});

//export { } = productSlice.actions;
export default productSlice.reducer;

export const useProducts = () => useSelector((state) => state.product.items);
export const useProductsById = () =>
  useSelector((state) => state.product.itemsById);
