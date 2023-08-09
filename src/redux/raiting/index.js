import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";
export const GetRaiting = createAsyncThunk("Raiting/get", async () => {
  return await axios.get(`${API_URL}/raiting`).then((response) => response.data);
});

export const GetRaitingId = createAsyncThunk("RaitingId/get", async (id) => {
  return await axios.get(`${API_URL}/raiting/${id}`).then((response) => response.data);
});
export const GetRaitingFilterYear = createAsyncThunk("RaitingFilterYear/get", async ({year1 , year2}) => {
  return await axios.get(`${API_URL}/raiting?year1=${year1}&year2=${year2}`).then((response) => response.data);
});
export const GetRaitingFilterKvartal = createAsyncThunk("RaitingFilterKvartal/get", async ({kvartal1 , kvartal2}) => {
  return await axios.get(`${API_URL}/raiting?kvartal1=${kvartal1}&kvartal2=${kvartal2}`).then((response) => response.data);
});
export const GetRaitingFilterAtribut = createAsyncThunk("RaitingFilter/get", async (atribut) => {
  return await axios.get(`${API_URL}/raiting?atribut=${atribut}`).then((response) => response.data);
});
const RaitingSlice = createSlice({
  name: "user",
  initialState: {
    getRaiting: {
      Error: false,
      Success: false,
      Loading: false,
      Data: [],
    },
    getRaitingId: {
      Error: false,
      Success: false,
      Loading: false,
      Data: [],
    },
    getRaitingFilterYear: {
      Error: false,
      Success: false,
      Loading: false,
      Data: [],
    },
    getRaitingFilterKvartal: {
      Error: false,
      Success: false,
      Loading: false,
      Data: [],
    },
    getRaitingFilterAtribut: {
      Error: false,
      Success: false,
      Loading: false,
      Data: [],
    },
  },
  extraReducers: {
    [GetRaiting.pending]: (state, action) => {
      state.getRaiting.Loading = true;
    },
    [GetRaiting.fulfilled]: (state, action) => {
      state.getRaiting.Success = true;
      state.getRaiting.Loading = false;
      state.getRaiting.Error = false;
      state.getRaiting.Data = action.payload;
    },
    [GetRaiting.rejected]: (state, action) => {
      state.getRaiting.Success = false;
      state.getRaiting.Loading = false;
      state.getRaiting.Error = true;
      state.getRaiting.Data = [];
    },

    [GetRaitingId.pending]: (state, action) => {
      state.getRaitingId.Loading = true;
    },
    [GetRaitingId.fulfilled]: (state, action) => {
      state.getRaitingId.Success = true;
      state.getRaitingId.Loading = false;
      state.getRaitingId.Error = false;
      state.getRaitingId.Data = action.payload;
    },
    [GetRaitingId.rejected]: (state, action) => {
      state.getRaitingId.Success = false;
      state.getRaitingId.Loading = false;
      state.getRaitingId.Error = true;
      state.getRaitingId.Data = [];
    },
    [GetRaitingFilterYear.pending]: (state, action) => {
      state.getRaitingFilterYear.Loading = true;
    },
    [GetRaitingFilterYear.fulfilled]: (state, action) => {
      state.getRaitingFilterYear.Success = true;
      state.getRaitingFilterYear.Loading = false;
      state.getRaitingFilterYear.Error = false;
      state.getRaitingFilterYear.Data = action.payload;
    },
    [GetRaitingFilterYear.rejected]: (state, action) => {
      state.getRaitingFilterYear.Success = false;
      state.getRaitingFilterYear.Loading = false;
      state.getRaitingFilterYear.Error = true;
      state.getRaitingFilterYear.Data = [];
    },
    [GetRaitingFilterKvartal.pending]: (state, action) => {
      state.getRaitingFilterKvartal.Loading = true;
    },
    [GetRaitingFilterKvartal.fulfilled]: (state, action) => {
      state.getRaitingFilterKvartal.Success = true;
      state.getRaitingFilterKvartal.Loading = false;
      state.getRaitingFilterKvartal.Error = false;
      state.getRaitingFilterKvartal.Data = action.payload;
    },
    [GetRaitingFilterKvartal.rejected]: (state, action) => {
      state.getRaitingFilterKvartal.Success = false;
      state.getRaitingFilterKvartal.Loading = false;
      state.getRaitingFilterKvartal.Error = true;
      state.getRaitingFilterKvartal.Data = [];
    },
    [GetRaitingFilterAtribut.pending]: (state, action) => {
      state.getRaitingFilterAtribut.Loading = true;
    },
    [GetRaitingFilterAtribut.fulfilled]: (state, action) => {
      state.getRaitingFilterAtribut.Success = true;
      state.getRaitingFilterAtribut.Loading = false;
      state.getRaitingFilterAtribut.Error = false;
      state.getRaitingFilterAtribut.Data = action.payload;
    },
    [GetRaitingFilterAtribut.rejected]: (state, action) => {
      state.getRaitingFilterAtribut.Success = false;
      state.getRaitingFilterAtribut.Loading = false;
      state.getRaitingFilterAtribut.Error = true;
      state.getRaitingFilterAtribut.Data = [];
    },
  },
});
export const {} = RaitingSlice.actions;
export default RaitingSlice.reducer;
