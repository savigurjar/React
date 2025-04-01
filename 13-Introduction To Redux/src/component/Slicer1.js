import { createSlice } from "@reduxjs/toolkit";
const reactSlicer = createSlice({
  //object return krke degi
  name: "sliceone",
  initialState: { count: 0 },
  reducers: {
    Increment: (state) => {
      //state = count=0 initial state
      state.count = state.count + 1;
    },
    Decrement: (state) => {
      state.count = state.count - 1;
    },
    Reset: (state) => {
      state.count = state.count = 0;
    },
  },
});
export const { Increment, Decrement, Reset } = reactSlicer.actions;
export default reactSlicer.reducer;
