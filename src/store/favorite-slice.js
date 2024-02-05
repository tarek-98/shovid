import { createSlice } from "@reduxjs/toolkit";

export const favSlice = createSlice({
  initialState: [],
  name: "favSlice",
  reducers: {
    addToFav: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },
    deletFromFav: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clear: (state, action) => {
      return [];
    },
  },
});
export const { addToFav, deletFromFav, clear } = favSlice.actions;
export default favSlice.reducer;
