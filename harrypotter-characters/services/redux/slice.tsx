import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  characters: [{ name: "Joseph" }],
  status: false,
};

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: {},
});

const charactersReducers = characterSlice.reducer;
export default charactersReducers;
