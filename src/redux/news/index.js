import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";
export const GetNews = createAsyncThunk("news/get", async () => {
  return await axios.get(`${API_URL}/news`).then((response) => response.data);
});

const NewsSlice = createSlice({
  name: "user",
  initialState: {
    getnews: {
      Error: false,
      Success: false,
      Loading: false,
      Data: [],
    },
  },
  extraReducers: {
    [GetNews.pending]: (state, action) => {
      state.getnews.Loading = true;
    },
    [GetNews.fulfilled]: (state, action) => {
      state.getnews.Success = true;
      state.getnews.Loading = false;
      state.getnews.Error = false;
      state.getnews.Data = action.payload;
    },
    [GetNews.rejected]: (state, action) => {
      state.getnews.Success = false;
      state.getnews.Loading = false;
      state.getnews.Error = true;
      state.getnews.Data = [];
    },
  },
});
export const {} = NewsSlice.actions;
export default NewsSlice.reducer;
