import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UsernameInitialState } from "../types/types";

const initialState: UsernameInitialState = {
  username: localStorage.getItem("username") ?? "",
};

export const usernameSlice = createSlice({
  name: "username",
  initialState,
  reducers: {
    addUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
      localStorage.setItem("username", action.payload);
    },
  },
});

export const { addUsername } = usernameSlice.actions;

export default usernameSlice.reducer;
