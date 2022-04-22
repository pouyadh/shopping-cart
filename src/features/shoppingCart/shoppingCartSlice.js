import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // example : [{id:1,count:2} , {id:3,count:1}]
  itemsById: {},
  isModalShowing: false,
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const { id } = payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.count++;
        state.itemsById[id].count++;
      } else {
        state.items.push({ id: id, count: 1 });
        state.itemsById[id] = { id: id, count: 1 };
      }
    },
    removeItem: (state, { payload }) => {
      const { id } = payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        if (item.count > 1) {
          item.count--;
          state.itemsById[id].count--;
        } else {
          state.items = state.items.filter((item) => item.id !== id);
          delete state.itemsById[id];
        }
      }
    },
    showShoppingCartModal: (state) => {
      state.isModalShowing = true;
    },
    hideShoppingCartModal: (state) => {
      state.isModalShowing = false;
    },
  },
});

export const {
  addItem,
  removeItem,
  showShoppingCartModal,
  hideShoppingCartModal,
} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
