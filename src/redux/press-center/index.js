import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";
export const GetPressCenter = createAsyncThunk("press-center/get", async () => {
  return await axios.get(`${API_URL}/press-center`).then((response) => response.data);
});

const PressCenterSlice = createSlice({
  name: "user",
  initialState: {
    getpresscenter: {
      Error: false,
      Success: false,
      Loading: false,
      Data: [],
    },
  },
  extraReducers: {
    [GetPressCenter.pending]: (state, action) => {
      state.getpresscenter.Loading = true;
    },
    [GetPressCenter.fulfilled]: (state, action) => {
      state.getpresscenter.Success = true;
      state.getpresscenter.Loading = false;
      state.getpresscenter.Error = false;
      state.getpresscenter.Data = action.payload;
    },
    [GetPressCenter.rejected]: (state, action) => {
      state.getpresscenter.Success = false;
      state.getpresscenter.Loading = false;
      state.getpresscenter.Error = true;
      state.getpresscenter.Data = [];
    },
  },
});
export const {} = PressCenterSlice.actions;
export default PressCenterSlice.reducer;
