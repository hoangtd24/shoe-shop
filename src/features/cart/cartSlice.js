import {
  createImmutableStateInvariantMiddleware,
  createSlice,
} from "@reduxjs/toolkit";
import db from "../../database/db.json";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productList: db.shoes,
    cart: JSON.parse(localStorage.getItem("cart"))
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  },
  reducers: {
    addProductToCart: (state, action) => {
      const item = { ...action.payload };
      item["count"] = 1;
      state.cart.push(item);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeProductFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    increseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      item.count++;
    },
    decreseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      item.count = item.count - 1;
      if (item.count === 0) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  increseQuantity,
  decreseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
