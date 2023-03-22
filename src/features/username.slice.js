import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: localStorage.getItem("username") ?? "",
};

export const usernameSlice = createSlice({
  name: "username",
  initialState,
  reducers: {
    addUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { addUsername } = usernameSlice.actions;

export default usernameSlice.reducer;
