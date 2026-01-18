import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieSlice,
    gpt: gptSlice,
  },
});

export default appStore;
