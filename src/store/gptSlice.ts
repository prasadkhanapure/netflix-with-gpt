import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addSearchedMovie: (state, action) => {
      state.movieResults = action.payload;
    },
  },
});

export const { toggleGptSearchView, addSearchedMovie } = gptSlice.actions;
export default gptSlice.reducer;
