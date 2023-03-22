import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "../features/username.slice";

export const store = configureStore({
  reducer: {
    username: usernameReducer,
  },
});
