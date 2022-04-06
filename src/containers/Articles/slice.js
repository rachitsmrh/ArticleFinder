import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  articles: [],
  article: {},
  page: 0,
  rowsPerPage: 10,
  sideFilter: "",
};

const articleslistSlice = createSlice({
  name: "articles-list",
  initialState,
  reducers: {
    fetchArticles() {},
    fetchArticle() {},
    updatedsideFilter(state, action) {
      const { payload } = action;
      state.sideFilter = payload;
    },
    updatePage(state, action) {
      const { payload } = action;
      state.page = payload;
    },
    updateRowsPerPage(state, action) {
      const { payload } = action;
      state.rowsPerPage = payload;
    },

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
  updatePage,
  updateRowsPerPage,
  updatedsideFilter,
} = articleslistSlice.actions;

export default articleslistSlice.reducer;
