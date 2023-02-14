import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";
export const GetBanks = createAsyncThunk("banks/get", async () => {
  return await axios.get(`${API_URL}/banks`).then((response) => response.data);
});
export const GetBanksId = createAsyncThunk("banks/getId", async () => {
  return await axios.get(`${API_URL}/banks/`).then((response) => response.data);
});

export const GetBanksIds = createAsyncThunk("banks/getIds", async (id) => {
  return await axios.get(`${API_URL}/banks/${id}`).then((response) => response.data);
});
export const GetBanksSearch = createAsyncThunk("banks/getSearch", async (search) => {
  return await axios.get(`${API_URL}/banks?search=${search}`).then((response) => response.data);
});

const BanksSlice = createSlice({
  name: "user",
  initialState: {
    getbanks: {
      Error: false,
      Success: false,
      Loading: false,
      Data: [],
    },
    getbanksId: {
      Error: false,
      Success: false,
      Loading: false,
      Data: [],
    },
    getbanksIds: {
      Error: false,
      Success: false,
      Loading: false,
      Data: [],
    },
    getbanksSearch: {
      Error: false,
      Success: false,
      Loading: false,
      Data: [],
    },
  },
  extraReducers: {
    [GetBanks.pending]: (state, action) => {
      state.getbanks.Loading = true;
    },
    [GetBanks.fulfilled]: (state, action) => {
      state.getbanks.Success = true;
      state.getbanks.Loading = false;
      state.getbanks.Error = false;
      state.getbanks.Data = action.payload;
    },
    [GetBanks.rejected]: (state, action) => {
      state.getbanks.Success = false;
      state.getbanks.Loading = false;
      state.getbanks.Error = true;
      state.getbanks.Data = [];
    },

    [GetBanksId.pending]: (state, action) => {
      state.getbanksId.Loading = true;
    },
    [GetBanksId.fulfilled]: (state, action) => {
      state.getbanksId.Success = true;
      state.getbanksId.Loading = false;
      state.getbanksId.Error = false;
      state.getbanksId.Data = action.payload;
    },
    [GetBanksId.rejected]: (state, action) => {
      state.getbanksId.Success = false;
      state.getbanksId.Loading = false;
      state.getbanksId.Error = true;
      state.getbanksId.Data = [];
    },
    [GetBanksIds.pending]: (state, action) => {
      state.getbanksIds.Loading = true;
    },
    [GetBanksIds.fulfilled]: (state, action) => {
      state.getbanksIds.Success = true;
      state.getbanksIds.Loading = false;
      state.getbanksIds.Error = false;
      state.getbanksIds.Data = action.payload;
    },
    [GetBanksIds.rejected]: (state, action) => {
      state.getbanksIds.Success = false;
      state.getbanksIds.Loading = false;
      state.getbanksIds.Error = true;
      state.getbanksIds.Data = [];
    },

    [GetBanksSearch.pending]: (state, action) => {
      state.getbanksSearch.Loading = true;
    },
    [GetBanksSearch.fulfilled]: (state, action) => {
      state.getbanksSearch.Success = true;
      state.getbanksSearch.Loading = false;
      state.getbanksSearch.Error = false;
      state.getbanksSearch.Data = action.payload;
    },
    [GetBanksSearch.rejected]: (state, action) => {
      state.getbanksSearch.Success = false;
      state.getbanksSearch.Loading = false;
      state.getbanksSearch.Error = true;
      state.getbanksSearch.Data = [];
    },
  },
});
export const {} = BanksSlice.actions;
export default BanksSlice.reducer;
