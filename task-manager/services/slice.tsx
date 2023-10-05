import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTasks: (state: any, action) => {
      const newTask = {
        id: Date.now(),
        title: action.payload.title,
        body: action.payload.body,
      };
      state.tasks.push(newTask);
    },
  },
});

export const { addTasks } = taskSlice.actions;
const taskReducer = taskSlice.reducer;
export default taskReducer;
