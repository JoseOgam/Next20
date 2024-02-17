import { configureStore } from "@reduxjs/toolkit";
import recipeReducers from "./redux/slice";

const store = configureStore({
  reducer: {
    recipes: recipeReducers,
  },
});

export default store;
