import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const recipeUrl =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=pasta&cuisine=italian";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5609c6b61fmsh712758e3c1c2ff6p176cc7jsn14cf0bd40367",
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

interface RecipeState {
  recipes: any[]; // Type of recipes as array
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined; // Type of error as string or null
}

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    try {
      const response = await fetch(recipeUrl, options);
      const parseData = await response.json();
      console.log(parseData);
      return parseData;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const initialState: RecipeState = {
  recipes: [],
  status: "idle",
  error: null,
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    getRecipes: (state, { type, payload }) => {
      return { ...state, recipes: payload };
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchRecipes.pending, (state) => {
  //         state.status = "loading";
  //       })
  //       .addCase(fetchRecipes.fulfilled, (state, action) => {
  //         state.status = "succeeded";
  //         state.recipes = action.payload;
  //       })
  //       .addCase(fetchRecipes.rejected, (state, action) => {
  //         state.status = "failed";
  //         state.error = action.error.message;
  //       });
  //   },
});
export const { getRecipes } = recipeSlice.actions;
const recipeReducers = recipeSlice.reducer;
export default recipeReducers;
