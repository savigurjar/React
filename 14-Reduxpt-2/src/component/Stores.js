import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./Slicer1";
const stores = configureStore({
  reducer: {
    sliceone: slice1Reducer,
    // slice2: slice2Reducer,
  },
});
// slice name : Reducer
export default stores;