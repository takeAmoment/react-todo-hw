import todoList from "../data/todoList";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  todoList,
  todoForEdit: null,
  filterValue: "all",
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
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    setTodoForEdit: (state, action) => {
      state.todoForEdit = action.payload;
    },
    changeTask: (state, action) => {
      state.todoList = state.todoList.map((item) => {
        if (item.id === state.todoForEdit.id) {
          return { ...item, name: action.payload };
        }
        return item;
      });
      state.todoForEdit = null;
    },
    changeFilterValue: (state, action) => {
      state.filterValue = action.payload;
    },
    cancelEdition: (state) => {
      state.todoForEdit = null;
    },
  },
});

export const {
  addTodo,
  changeActive,
  deleteTodo,
  setTodoForEdit,
  changeTask,
  changeFilterValue,
  cancelEdition,
} = todosSlice.actions;

export default todosSlice.reducer;
