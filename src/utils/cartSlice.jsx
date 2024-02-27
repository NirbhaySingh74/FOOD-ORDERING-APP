import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter(
        (item) => item.info.id !== itemIdToRemove
      );
    },
    updateItemQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.info.id === itemId);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, updateItemQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
