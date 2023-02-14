import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";
export const GetInformation = createAsyncThunk("information/get", async () => {
  return await axios.get(`${API_URL}/infarmatsia`).then((response) => response.data);
});

const InformationSlice = createSlice({
  name: "information",
  initialState: {
    getinformation: {
      Error: false,
      Success: false,
      Loading: false,
      Data: [],
    },
  },
  extraReducers: {
    [GetInformation.pending]: (state, action) => {
      state.getinformation.Loading = true;
    },
    [GetInformation.fulfilled]: (state, action) => {
      state.getinformation.Success = true;
      state.getinformation.Loading = false;
      state.getinformation.Error = false;
      state.getinformation.Data = action.payload;
    },
    [GetInformation.rejected]: (state, action) => {
      state.getinformation.Success = false;
      state.getinformation.Loading = false;
      state.getinformation.Error = true;
      state.getinformation.Data = [];
    },
  },
});
export const {} = InformationSlice.actions;
export default InformationSlice.reducer;
