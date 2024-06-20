import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async ({ country, category, pageSize, page }, { rejectWithValue }) => {
    const apiKey = import.meta.env.VITE_REACT_APP_NEWS_API_KEY;
    if (!apiKey) {
      return rejectWithValue('API Key is not defined.');
    }
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return { articles: data.articles, totalResults: data.totalResults };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const searchNews = createAsyncThunk(
  'news/searchNews',
  async ({ country, category, pageSize, page, query }, { rejectWithValue }) => {
    const apiKey = import.meta.env.VITE_REACT_APP_NEWS_API_KEY;
    if (!apiKey) {
      return rejectWithValue('API Key is not defined.');
    }
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }
      const data = await response.json();
      return { articles: data.articles, totalResults: data.totalResults };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    loading: false,
    error: null,
    page: 1,
    totalArticles: 0,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload.articles;
        state.totalArticles = action.payload.totalResults;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(searchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload.articles;
        state.totalArticles = action.payload.totalResults;
      })
      .addCase(searchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setPage } = newsSlice.actions;

export default newsSlice.reducer;
