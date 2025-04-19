import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slice2";

const stored = configureStore({
  reducer: {
    slice2: CartReducer,
  },
});
export default stored;
