import { createSlice } from "@reduxjs/toolkit";

//immer is used internally by redux toolkit to handle immutability
const reactSlicer = createSlice({
  name: "sliceone",
  initialState: { count: 0 },
  reducers: {
    Increment: (state) => {
      state.count += 1;
    },
    Decrement: (state) => {
      state.count -= 1;
    },
    Reset: (state) => {
      state.count = 0;
    },
    CustomIncreaser: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { Increment, Decrement, Reset, CustomIncreaser } =
  reactSlicer.actions;
export { reactSlicer };
export default reactSlicer.reducer;
