import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
  status: false,
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      try {
        let newTodo = {
          id: Date.now(),
          task: action.payload.task,
        };

        state.todo.push(newTodo);
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
});
export const { addTodo } = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer;

//middleware to saveState to localStorage

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (error) {
    console.log("error while saving to local state", error);
  }
};

//middleware to load state from localStorage

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.log("error while loading state from localStorage", error);
  }
};

// load initial state from localStorage

export const preloadedState = loadState();
