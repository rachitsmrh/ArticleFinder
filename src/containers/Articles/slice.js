import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  articles: [],
  article: {},
};

const articleslistSlice = createSlice({
  name: "articles-list",
  initialState,
  reducers: {
    fetchArticles() {},
    fetchArticle() {},

    updateAppData(state, action) {
      const { payload } = action;
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
    clearNewsArticle() {},

    clearAllData(state) {
      Object.keys(initialState).forEach((key) => {
        state[key] = initialState[key];
      });
    },
  },
});

// internal actions without saga and triggered by saga

export const {
  fetchArticles,
  updateAppData,
  clearAllData,
  fetchArticle,
  clearNewsArticle,
} = articleslistSlice.actions;

export default articleslistSlice.reducer;
