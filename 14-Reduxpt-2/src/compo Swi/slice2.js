import { createSlice } from "@reduxjs/toolkit";

const FoodSlicere = createSlice({
  name: "slice2",
  initialState: { count: 0 },
  reducers: {
    addItems: (state) => {
      state.count++;
    },
    removeItems: (state) => {
      state.count--;
    },
  },
});

export default FoodSlicere.reducer;
export const{addItems,removeItems} = FoodSlicere.actions;