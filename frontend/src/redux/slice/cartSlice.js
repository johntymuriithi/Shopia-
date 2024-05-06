// Create a slice that will eventually give us our reducers

import { createSlice } from "@reduxjs/toolkit";

// create initial state for the user state

const initialState = {
  currentCart: null,
};

// Create slice with createSlice function

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadCartSuccess: (state, action) => {
      state.currentCart = action.payload;
    },
    updateCartSuccess: (state, action) => {
      // check if the cart contains the payload
      // if it does, then remove it, else add it.
      if (
        state.currentCart.products.some(
          (item) => item.id === action.payload.product.id
        )
      ) {
        // get current item's price to deduct

        // const prevproduct = state.currentCart.products.filter(item=> item.id === action.payload.product.id);
        //
        const filtered = state.currentCart.products.filter(
          (item) => item.id !== action.payload.product.id
        );

        state.currentCart.products = filtered;
        if (state.currentCart.totalAmount < 0) {
          state.currentCart.totalAmount = 0;
          return;
        }
        state.currentCart.totalAmount -= action.payload.amount;
        return;
      } else {
        state.currentCart.products = [
          ...state.currentCart.products,
          action.payload.product,
        ];
        state.currentCart.totalAmount += action.payload.amount;
      }
    },
    clearCartSuccess: (state) => {
      state.currentCart = null;
    },
    deleteCartOnSignOut: (state) => {
      state.currentCart = null;
    },
  },
});

// export the automatic actions that have been created by the toolkit
export const {
  loadCartSuccess,
  updateCartSuccess,
  clearCartSuccess,
  deleteCartOnSignOut,
} = cartSlice.actions;

// Export the reducers to be combined in the store
export default cartSlice.reducer;
