import { AppState, QuoteData } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRandomQuotes = createAsyncThunk(
  "quote/fetchQuotes",
  async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    return data;
  }
);

const initialState: AppState = {
  quote: [],
  status: "idle",
  error: null,
};

const QuotesSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomQuotes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRandomQuotes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.quote = action.payload;
      })
      .addCase(fetchRandomQuotes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

const rootReducer = QuotesSlice.reducer;

export default rootReducer;
