import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";
export const GetAnalytic = createAsyncThunk("analytic/get", async () => {
  return await axios.get(`${API_URL}/analitika`).then((response) => response.data);
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
  },
});
export const {} = AnalyticSlice.actions;
export default AnalyticSlice.reducer;
