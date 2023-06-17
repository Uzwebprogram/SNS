import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";
export const GetAnalytic = createAsyncThunk("analytic/get", async () => {
  return await axios.get(`${API_URL}/analitika`).then((response) => response.data);
});
export const GetAnalyticSearch = createAsyncThunk("analyticSearch /getSearch", async (searchAnalitca) => {
  return await axios.get(`${API_URL}/analitika?search=${searchAnalitca}`).then((response) => response.data);
});
export const GetAnalyticId = createAsyncThunk("analyticId/get", async (id) => {
  return await axios.get(`${API_URL}/analitika/${id}`).then((response) => response.data);
});

const AnalyticSlice = createSlice({
  name: "user",
  initialState: {
    getanalytic: {
      Error: false,
      Success: false,
      Loading: false,
      Data: [],
    },
    getanalyticSearch: {
      Error: false,
      Success: false,
      Loading: false,
      Data: [],
    },
    getanalyticId: {
      Error: false,
      Success: false,
      Loading: false,
      Data: [],
    },
  },
  extraReducers: {
    [GetAnalytic.pending]: (state, action) => {
      state.getanalytic.Loading = true;
    },
    [GetAnalytic.fulfilled]: (state, action) => {
      state.getanalytic.Success = true;
      state.getanalytic.Loading = false;
      state.getanalytic.Error = false;
      state.getanalytic.Data = action.payload;
    },
    [GetAnalytic.rejected]: (state, action) => {
      state.getanalytic.Success = false;
      state.getanalytic.Loading = false;
      state.getanalytic.Error = true;
      state.getanalytic.Data = [];
    },
    [GetAnalyticSearch.pending]: (state, action) => {
      state.getanalyticSearch.Loading = true;
    },
    [GetAnalyticSearch.fulfilled]: (state, action) => {
      state.getanalyticSearch.Success = true;
      state.getanalyticSearch.Loading = false;
      state.getanalyticSearch.Error = false;
      state.getanalyticSearch.Data = action.payload;
    },
    [GetAnalyticSearch.rejected]: (state, action) => {
      state.getanalyticSearch.Success = false;
      state.getanalyticSearch.Loading = false;
      state.getanalyticSearch.Error = true;
      state.getanalyticSearch.Data = [];
    },

    [GetAnalyticId.pending]: (state, action) => {
      state.getanalyticId.Loading = true;
    },
    [GetAnalyticId.fulfilled]: (state, action) => {
      state.getanalyticId.Success = true;
      state.getanalyticId.Loading = false;
      state.getanalyticId.Error = false;
      state.getanalyticId.Data = action.payload;
    },
    [GetAnalyticId.rejected]: (state, action) => {
      state.getanalyticId.Success = false;
      state.getanalyticId.Loading = false;
      state.getanalyticId.Error = true;
      state.getanalyticId.Data = [];
    },
  },
});
export const {} = AnalyticSlice.actions;
export default AnalyticSlice.reducer;
