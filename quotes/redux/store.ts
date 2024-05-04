import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slice/QuotesSlice";

const store = configureStore({
  reducer: {
    quotes: rootReducer,
  },
});
export default store;
