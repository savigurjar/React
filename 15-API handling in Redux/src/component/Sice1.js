
// createAsyncThunk
//(type : "coin/fetch",payload: )
// bydefault dal dega
//type 'coin/fetch/pending ,payload : undefined
// type 'coin/fetch/fullfiled',payload : data
//type 'coin/fetch/rejected' ,payload : error


import {
    createAsyncThunk,
    createSlice,
  } from "@reduxjs/toolkit";
  
  // Async thunk to fetch crypto data
  const FetchData = createAsyncThunk(
    "coin/fetch",
    async (args, thunkAPI) => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  // Slice for crypto data
  const slicer1 = createSlice({
    name: "slice1",
    initialState: {
      data: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(FetchData.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(FetchData.fulfilled, (state, action) => {
          state.data = action.payload;
          state.loading = false;
        })
        .addCase(FetchData.rejected, (state, action) => {
          state.error = action.payload;
          state.loading = false;
        });
    },
  });
  
  export default slicer1.reducer;
  export { FetchData };
  