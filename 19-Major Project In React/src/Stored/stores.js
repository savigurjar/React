// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Stored/CartSlice"; // adjust path

export const store = configureStore({
  reducer: {
    cartslice: cartReducer,  // this name must match the useSelector key
  },
});
