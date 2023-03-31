import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "../features/username.slice";
import todosReducer from "../features/todos.slice";

export const store = configureStore({
  reducer: {
    username: usernameReducer,
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
