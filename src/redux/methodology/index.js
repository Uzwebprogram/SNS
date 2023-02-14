import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";
export const GetMethodology = createAsyncThunk("methodology/get", async () => {
  return await axios
    .get(`${API_URL}/metadalogia`)
    .then((response) => response.data);
});

const MethodologySlice = createSlice({
  name: "user",
  initialState: {
    getmethodology: {
      Error: false,
      Success: false,
      Loading: false,
      Data: [],
    },
  },
  extraReducers: {
    [GetMethodology.pending]: (state, action) => {
      state.getmethodology.Loading = true;
    },
    [GetMethodology.fulfilled]: (state, action) => {
      state.getmethodology.Success = true;
      state.getmethodology.Loading = false;
      state.getmethodology.Error = false;
      state.getmethodology.Data = action.payload;
    },
    [GetMethodology.rejected]: (state, action) => {
      state.getmethodology.Success = false;
      state.getmethodology.Loading = false;
      state.getmethodology.Error = true;
      state.getmethodology.Data = [];
    },
  },
});
export const {} = MethodologySlice.actions;
export default MethodologySlice.reducer;
