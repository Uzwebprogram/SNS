import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";
export const GetRanking = createAsyncThunk("ranking/get", async () => {
  return await axios.get(`${API_URL}/renkingi`).then((response) => response.data);
});

const RankingSlice = createSlice({
  name: "user",
  initialState: {
    getranking: {
      Error: false,
      Success: false,
      Loading: false,
      Data: [],
    },
  },
  extraReducers: {
    [GetRanking.pending]: (state, action) => {
      state.getranking.Loading = true;
    },
    [GetRanking.fulfilled]: (state, action) => {
      state.getranking.Success = true;
      state.getranking.Loading = false;
      state.getranking.Error = false;
      state.getranking.Data = action.payload;
    },
    [GetRanking.rejected]: (state, action) => {
      state.getranking.Success = false;
      state.getranking.Loading = false;
      state.getranking.Error = true;
      state.getranking.Data = [];
    },
  },
});
export const {} = RankingSlice.actions;
export default RankingSlice.reducer;
