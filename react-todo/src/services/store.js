import { configureStore } from "@reduxjs/toolkit";
import todoReducer, { preloadedState, saveState } from "./redux/slice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    preloadedState,
  },
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
