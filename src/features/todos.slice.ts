import todoList from "../data/todoList";
import { FilterValue, ITodo, TodosInitialState } from "../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: TodosInitialState = {
  todoList,
  todoForEdit: null,
  filterValue: "all",
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todoList = [...state.todoList, action.payload];
    },
    changeActive: (state, action: PayloadAction<number>) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, active: !todo.active };
        }
        return todo;
      });
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    setTodoForEdit: (state, action: PayloadAction<ITodo | null>) => {
      state.todoForEdit = action.payload;
    },
    changeTask: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.map((item) => {
        if (item.id === state.todoForEdit?.id) {
          return { ...item, name: action.payload };
        }
        return item;
      });
      state.todoForEdit = null;
    },
    changeFilterValue: (state, action: PayloadAction<FilterValue>) => {
      state.filterValue = action.payload;
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
} = todosSlice.actions;

export default todosSlice.reducer;
