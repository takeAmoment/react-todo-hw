const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  todoList: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList = [...state.todoList, action.payload];
    },
  },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
