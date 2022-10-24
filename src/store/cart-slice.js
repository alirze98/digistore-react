import { createSlice } from "@reduxjs/toolkit";
const cartInitialState = { cart: [] };
const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    incrementItem(state, action) {
      const itemExist = state.cart.some((item) => {
        return item.id === action.payload.id;
      });

      if (itemExist) {
        const foundItem = state.cart.find((item) => {
          return item.id === action.payload.id;
        });
        foundItem.count++;
        return;
      }
      state.cart.push(action.payload);
    },
    decrementItem(state, action) {
      const foundItem = state.cart.find((item) => {
        return item.id === action.payload;
      });
      if (foundItem.count === 1) {
        const filteredArr = state.cart.filter((item) => {
          return item.id !== action.payload;
        });
        state.cart = filteredArr;
      }
      foundItem.count--;
    },
    removeItem(state, action) {
      const filteredArr = state.cart.filter((item) => {
        return item.id !== action.payload;
      });
      state.cart = filteredArr;
    },
    removeAllItems(state, action) {
      state.cart = [];
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
