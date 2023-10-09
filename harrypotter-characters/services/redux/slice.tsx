import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const charUrl = "https://hp-api.onrender.com/api/characters";

export const fetchChar = createAsyncThunk("characters/fetchChar", async () => {
  try {
    const response = await axios.get(charUrl);
    return response.data;
  } catch (error) {
    throw error; // Propagate the error
  }
});

const initialState = {
  characters: [],
  status: "idle",
  error: null,
};

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    getCharacters: (state, { type, payload }) => {
      return { ...state, characters: payload };
    },
    charDetail: (state, { type, payload }) => {
      return { ...state, characters: payload };
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchChar.pending, (state) => {
  //       state.status = "loading";
  //     })
  //     .addCase(fetchChar.fulfilled, (state, action) => {
  //       state.status = "succeeded";
  //       state.characters = action.payload;
  //     })
  //     .addCase(fetchChar.rejected, (state: any, action) => {
  //       state.status = "failed";
  //       state.error = action.error.message;
  //     });
  // },
});

export const { getCharacters, charDetail } = characterSlice.actions;
const charactersReducers = characterSlice.reducer;
export default charactersReducers;
