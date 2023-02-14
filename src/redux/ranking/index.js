import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";
export const GetRanking = createAsyncThunk("ranking/get", async () => {
  return await axios.get(`${API_URL}/renkingi`).then((response) => response.data);
});

export const GetRankingId = createAsyncThunk("rankingId/get", async (id) => {
  return await axios.get(`${API_URL}/renkingi/${id}`).then((response) => response.data);
});
export const GetRankingFilterYear = createAsyncThunk("rankingFilterYear/get", async ({year1 , year2}) => {
  return await axios.get(`${API_URL}/renkingi?year1=${year1}&year2=${year2}`).then((response) => response.data);
});
export const GetRankingFilterKvartal = createAsyncThunk("rankingFilterKvartal/get", async ({kvartal1 , kvartal2}) => {
  return await axios.get(`${API_URL}/renkingi?kvartal1=${kvartal1}&kvartal2=${kvartal2}`).then((response) => response.data);
});
export const GetRankingFilterAtribut = createAsyncThunk("rankingFilter/get", async (atribut) => {
  return await axios.get(`${API_URL}/renkingi?atribut=${atribut}`).then((response) => response.data);
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
    getrankingId: {
      Error: false,
      Success: false,
      Loading: false,
      Data: [],
    },
    getRankingFilterYear: {
      Error: false,
      Success: false,
      Loading: false,
      Data: [],
    },
    getRankingFilterKvartal: {
      Error: false,
      Success: false,
      Loading: false,
      Data: [],
    },
    getRankingFilterAtribut: {
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

    [GetRankingId.pending]: (state, action) => {
      state.getrankingId.Loading = true;
    },
    [GetRankingId.fulfilled]: (state, action) => {
      state.getrankingId.Success = true;
      state.getrankingId.Loading = false;
      state.getrankingId.Error = false;
      state.getrankingId.Data = action.payload;
    },
    [GetRankingId.rejected]: (state, action) => {
      state.getrankingId.Success = false;
      state.getrankingId.Loading = false;
      state.getrankingId.Error = true;
      state.getrankingId.Data = [];
    },
    [GetRankingFilterYear.pending]: (state, action) => {
      state.getRankingFilterYear.Loading = true;
    },
    [GetRankingFilterYear.fulfilled]: (state, action) => {
      state.getRankingFilterYear.Success = true;
      state.getRankingFilterYear.Loading = false;
      state.getRankingFilterYear.Error = false;
      state.getRankingFilterYear.Data = action.payload;
    },
    [GetRankingFilterYear.rejected]: (state, action) => {
      state.getRankingFilterYear.Success = false;
      state.getRankingFilterYear.Loading = false;
      state.getRankingFilterYear.Error = true;
      state.getRankingFilterYear.Data = [];
    },
    [GetRankingFilterKvartal.pending]: (state, action) => {
      state.getRankingFilterKvartal.Loading = true;
    },
    [GetRankingFilterKvartal.fulfilled]: (state, action) => {
      state.getRankingFilterKvartal.Success = true;
      state.getRankingFilterKvartal.Loading = false;
      state.getRankingFilterKvartal.Error = false;
      state.getRankingFilterKvartal.Data = action.payload;
    },
    [GetRankingFilterKvartal.rejected]: (state, action) => {
      state.getRankingFilterKvartal.Success = false;
      state.getRankingFilterKvartal.Loading = false;
      state.getRankingFilterKvartal.Error = true;
      state.getRankingFilterKvartal.Data = [];
    },
    [GetRankingFilterAtribut.pending]: (state, action) => {
      state.getRankingFilterAtribut.Loading = true;
    },
    [GetRankingFilterAtribut.fulfilled]: (state, action) => {
      state.getRankingFilterAtribut.Success = true;
      state.getRankingFilterAtribut.Loading = false;
      state.getRankingFilterAtribut.Error = false;
      state.getRankingFilterAtribut.Data = action.payload;
    },
    [GetRankingFilterAtribut.rejected]: (state, action) => {
      state.getRankingFilterAtribut.Success = false;
      state.getRankingFilterAtribut.Loading = false;
      state.getRankingFilterAtribut.Error = true;
      state.getRankingFilterAtribut.Data = [];
    },
  },
});
export const {} = RankingSlice.actions;
export default RankingSlice.reducer;
