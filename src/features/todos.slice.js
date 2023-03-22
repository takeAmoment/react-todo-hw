import todoList from "../data/todoList";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  todoList,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList = [...state.todoList, action.payload];
    },
    changeActive: (state, action) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, active: !todo.active };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, changeActive } = todosSlice.actions;

export default todosSlice.reducer;
