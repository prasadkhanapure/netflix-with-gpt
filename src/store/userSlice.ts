import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {return state},
    removeUser: (state, action) => {return state},
  },
});
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
